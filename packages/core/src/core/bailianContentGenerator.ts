/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modified by Chameleon Nexus Tech
 * This file has been modified to add Bailian (Alibaba Cloud) integration support.
 * Original work: Google Gemini CLI
 * Modifications: Added Bailian API adapter and format conversion
 */

/**
 * @author chameleon-nexus
 * @email mythicscribe2014@gmail.com
 */

import type {
  CountTokensParameters,
  CountTokensResponse,
  EmbedContentParameters,
  EmbedContentResponse,
  GenerateContentParameters,
  GenerateContentResponse,
} from '@google/genai';
import type { ContentGenerator } from './contentGenerator.js';

/**
 * Alibaba Cloud Bailian ContentGenerator implementation
 * Supports accessing Qwen series models through Alibaba Cloud Bailian service
 */
export class BailianContentGenerator implements ContentGenerator {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly model: string;

  constructor() {
    // Unified environment variable support, prioritize generic variables, fallback to engine-specific variables
    this.baseUrl = process.env['AI_BASE_URL'] || process.env['BAILIAN_BASE_URL'] || 'https://dashscope.aliyuncs.com/compatible-mode/v1';
    this.apiKey = process.env['AI_API_KEY'] || process.env['DASHSCOPE_API_KEY'] || process.env['ALIBABA_CLOUD_API_KEY'] || process.env['BAILIAN_API_KEY'] || (() => {
      throw new Error('API key not found. Please set one of: AI_API_KEY, DASHSCOPE_API_KEY, ALIBABA_CLOUD_API_KEY, or BAILIAN_API_KEY environment variable.');
    })();
    this.model = process.env['AI_MODEL'] || process.env['BAILIAN_MODEL'] || 'qwen-plus';
    
    console.log('🌊 Alibaba Cloud Bailian ContentGenerator: Initialized successfully');
    console.log(`   Model: ${this.model}`);
    console.log(`   API Endpoint: ${this.baseUrl}`);
    console.log(`   Provider: Alibaba Cloud Bailian`);
  }

  async generateContent(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<GenerateContentResponse> {
    try {
      const bailianRequest = this.convertGeminiToBailian(request);
      
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bailianRequest),
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `Bailian API call failed with status ${response.status}`;
        
        if (response.status === 401) {
          errorMessage = 'Invalid API key. Please check your BAILIAN_API_KEY or DASHSCOPE_API_KEY.';
        } else if (response.status === 429) {
          errorMessage = 'Rate limit exceeded. Please try again later.';
        } else if (response.status === 400) {
          errorMessage = 'Bad request. Please check your model name and parameters.';
        }
        
        throw new Error(`${errorMessage}\nResponse: ${errorText}`);
      }

      const bailianResponse = await response.json();
      return this.convertBailianToGemini(bailianResponse) as GenerateContentResponse;
    } catch (error) {
      console.error('Bailian API call failed:', error);
      throw error;
    }
  }

  async generateContentStream(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<AsyncGenerator<GenerateContentResponse>> {
    try {
      const bailianRequest = this.convertGeminiToBailian(request);
      bailianRequest.stream = true;

      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bailianRequest),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Bailian streaming API call failed with status ${response.status}: ${errorText}`);
      }

      return this.parseStreamingResponse(response);
    } catch (error) {
      console.error('Bailian streaming API call failed:', error);
      throw error;
    }
  }

  private async *parseStreamingResponse(response: Response): AsyncGenerator<GenerateContentResponse> {
    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('No response body reader available');
    }

    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('data: ')) {
            const data = trimmedLine.slice(6);
            if (data === '[DONE]') continue;

            try {
              const chunk = JSON.parse(data);
              if (chunk.choices && chunk.choices[0]) {
                yield this.convertBailianChunkToGemini(chunk) as GenerateContentResponse;
              }
            } catch (e) {
              console.warn('Failed to parse streaming chunk:', e);
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }
  }

  async countTokens(request: CountTokensParameters): Promise<CountTokensResponse> {
    // Alibaba Cloud Bailian doesn't provide independent token calculation interface, using estimation method
    const text = this.extractTextFromRequest(request);
    const estimatedTokens = Math.ceil(text.length / 4); // Rough estimation: 4 characters approximately equal to 1 token

    return {
      totalTokens: estimatedTokens,
    };
  }

  async embedContent(request: EmbedContentParameters): Promise<EmbedContentResponse> {
    throw new Error('Embedding not supported by Bailian implementation');
  }

  private convertGeminiToBailian(request: any): any {
    const messages = [];
    
    // Handle system messages and user messages
    if (request.contents) {
      for (const content of request.contents) {
        if (content.role === 'user') {
          const userContent = content.parts?.map((part: any) => part.text).join('') || '';
          messages.push({
            role: 'user',
            content: userContent,
          });
        } else if (content.role === 'model') {
          const modelContent = content.parts?.map((part: any) => part.text).join('') || '';
          messages.push({
            role: 'assistant',
            content: modelContent,
          });
        }
      }
    }

    const bailianRequest: any = {
      model: this.model,
      messages: messages,
      stream: false,
    };

    // Handle generation configuration
    if (request.generationConfig) {
      const config = request.generationConfig;
      if (config.temperature !== undefined) {
        bailianRequest.temperature = config.temperature;
      }
      if (config.maxOutputTokens !== undefined) {
        bailianRequest.max_tokens = config.maxOutputTokens;
      }
      if (config.topP !== undefined) {
        bailianRequest.top_p = config.topP;
      }
    }

    // Handle tool calls
    if (request.tools && request.tools.length > 0) {
      bailianRequest.tools = request.tools.map((tool: any) => ({
        type: 'function',
        function: {
          name: tool.functionDeclarations?.[0]?.name || 'unknown',
          description: tool.functionDeclarations?.[0]?.description || '',
          parameters: tool.functionDeclarations?.[0]?.parameters || {},
        },
      }));
    }

    return bailianRequest;
  }

  private convertBailianToGemini(bailianResponse: any): any {
    const choices = bailianResponse.choices || [];
    const firstChoice = choices[0];
    
    if (!firstChoice) {
      throw new Error('No choices in Bailian response');
    }

    const content = firstChoice.message?.content || '';
    const finishReason = this.mapFinishReason(firstChoice.finish_reason);

    return {
      candidates: [
        {
          content: {
            role: 'model',
            parts: [{ text: content }],
          },
          finishReason: finishReason,
          index: 0,
        },
      ],
      usageMetadata: {
        promptTokenCount: bailianResponse.usage?.prompt_tokens || 0,
        candidatesTokenCount: bailianResponse.usage?.completion_tokens || 0,
        totalTokenCount: bailianResponse.usage?.total_tokens || 0,
      },
    };
  }

  private convertBailianChunkToGemini(chunk: any): any {
    const choices = chunk.choices || [];
    const firstChoice = choices[0];
    
    if (!firstChoice) {
      return {
        candidates: [],
        usageMetadata: {
          promptTokenCount: 0,
          candidatesTokenCount: 0,
          totalTokenCount: 0,
        },
      };
    }

    const delta = firstChoice.delta || {};
    const content = delta.content || '';
    const finishReason = this.mapFinishReason(firstChoice.finish_reason);

    return {
      candidates: [
        {
          content: {
            role: 'model',
            parts: content ? [{ text: content }] : [],
          },
          finishReason: finishReason,
          index: 0,
        },
      ],
      usageMetadata: chunk.usage ? {
        promptTokenCount: chunk.usage.prompt_tokens || 0,
        candidatesTokenCount: chunk.usage.completion_tokens || 0,
        totalTokenCount: chunk.usage.total_tokens || 0,
      } : {
        promptTokenCount: 0,
        candidatesTokenCount: 0,
        totalTokenCount: 0,
      },
    };
  }

  private mapFinishReason(reason: string): string {
    switch (reason) {
      case 'stop':
        return 'STOP';
      case 'length':
        return 'MAX_TOKENS';
      case 'content_filter':
        return 'SAFETY';
      case 'tool_calls':
        return 'STOP';
      default:
        return 'STOP';
    }
  }

  private extractTextFromRequest(request: CountTokensParameters): string {
    // Use JSON.stringify for simple estimation, avoiding complex type handling
    const content = JSON.stringify(request.contents);
    return content;
  }
}
