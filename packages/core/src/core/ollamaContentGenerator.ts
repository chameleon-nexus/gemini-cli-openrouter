/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modified by Chameleon Nexus Tech
 * This file has been modified to add Ollama integration support.
 * Original work: Google Gemini CLI
 * Modifications: Added Ollama API adapter and format conversion
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
 * Ollama ContentGenerator implementation
 * 支持通过Ollama本地部署运行各种开源大模型
 */
export class OllamaContentGenerator implements ContentGenerator {
  private readonly baseUrl: string;
  private readonly model: string;

  constructor() {
    // 统一环境变量支持，优先使用引擎特定变量，fallback到通用变量
    this.baseUrl = process.env['OLLAMA_BASE_URL'] || process.env['AI_BASE_URL'] || 'http://localhost:11434';
    this.model = process.env['OLLAMA_MODEL'] || process.env['AI_MODEL'] || 'llama3.2:latest';
    
    console.log('🦙 Ollama ContentGenerator: Initialized successfully');
    console.log(`   Model: ${this.model}`);
    console.log(`   API Endpoint: ${this.baseUrl}`);
    console.log(`   Local Deployment: ${this.baseUrl.includes('localhost') ? 'Yes' : 'No'}`);
  }

  async generateContent(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<GenerateContentResponse> {
    try {
      // 转换请求格式 - 使用chat API
      const messages = this.convertGeminiToOllama(request.contents);
      
      const ollamaRequest = {
        model: this.model,
        messages,
        stream: false, // 非流式响应
        options: {
          temperature: request.config?.temperature || 0.7,
          top_p: request.config?.topP || 0.9,
          num_predict: request.config?.maxOutputTokens || 1000,
        }
      };

      // 调用Ollama Chat API
      const response = await fetch(`${this.baseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ollamaRequest)
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `Ollama API call failed with status ${response.status}`;
        
        if (response.status === 404) {
          errorMessage = 'Model not found. Please ensure the model is available locally. Use "ollama pull <model>" to download it.';
        } else if (response.status === 500) {
          errorMessage = 'Ollama server error. Please check if Ollama is running properly.';
        }
        
        throw new Error(`${errorMessage}\nResponse: ${errorText}`);
      }

      const ollamaResponse = await response.json();
      
      // 转换响应格式
      return this.convertOllamaToGemini(ollamaResponse);

    } catch (error) {
      console.error('Ollama API call failed:', error);
      throw error;
    }
  }

  async generateContentStream(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<AsyncGenerator<GenerateContentResponse>> {
    try {
      // 转换请求格式 - 使用chat API流式模式
      const messages = this.convertGeminiToOllama(request.contents);
      
      const ollamaRequest = {
        model: this.model,
        messages,
        stream: true, // 启用流式响应
        options: {
          temperature: request.config?.temperature || 0.7,
          top_p: request.config?.topP || 0.9,
          num_predict: request.config?.maxOutputTokens || 1000,
        }
      };

      // 调用Ollama Chat API (流式)
      const response = await fetch(`${this.baseUrl}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(ollamaRequest)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Ollama streaming API call failed with status ${response.status}: ${errorText}`);
      }

      return this.parseStreamingResponse(response);

    } catch (error) {
      console.error('Ollama streaming API call failed:', error);
      throw error;
    }
  }

  async countTokens(request: CountTokensParameters): Promise<CountTokensResponse> {
    // Ollama doesn't provide a separate token counting endpoint
    // Use a rough estimation based on text length
    const text = JSON.stringify(request);
    const estimatedTokens = Math.ceil(text.length / 4);
    
    return {
      totalTokens: estimatedTokens,
    };
  }

  async embedContent(request: EmbedContentParameters): Promise<EmbedContentResponse> {
    throw new Error('Embedding not supported by Ollama implementation');
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
          if (trimmedLine) {
            try {
              const chunk = JSON.parse(trimmedLine);
              if (chunk.message && chunk.message.content !== undefined) {
                yield this.convertOllamaChunkToGemini(chunk);
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

  private convertGeminiToOllama(contents: any): Array<{role: string, content: string}> {
    const messages: Array<{role: string, content: string}> = [];
    
    for (const content of contents) {
      if (content.parts && Array.isArray(content.parts)) {
        let textContent = '';
        
        for (const part of content.parts) {
          if (part.text) {
            textContent += part.text;
          }
        }
        
        if (textContent.trim()) {
          const role = content.role === 'model' ? 'assistant' : content.role;
          messages.push({
            role,
            content: textContent,
          });
        }
      }
    }
    
    return messages;
  }

  private convertOllamaToGemini(ollamaResponse: any): any {
    return {
      candidates: [{
        content: {
          role: 'model',
          parts: [{ text: ollamaResponse.message?.content || '' }],
        },
        finishReason: 'STOP' as any,
        index: 0,
      }],
      usageMetadata: {
        promptTokenCount: ollamaResponse.prompt_eval_count || 0,
        candidatesTokenCount: ollamaResponse.eval_count || 0,
        totalTokenCount: (ollamaResponse.prompt_eval_count || 0) + (ollamaResponse.eval_count || 0),
      },
    } as GenerateContentResponse;
  }

  private convertOllamaChunkToGemini(chunk: any): any {
    return {
      candidates: [{
        content: {
          role: 'model',
          parts: [{ text: chunk.message?.content || '' }],
        },
        finishReason: chunk.done ? 'STOP' as any : undefined,
        index: 0,
      }],
      usageMetadata: chunk.done ? {
        promptTokenCount: chunk.prompt_eval_count || 0,
        candidatesTokenCount: chunk.eval_count || 0,
        totalTokenCount: (chunk.prompt_eval_count || 0) + (chunk.eval_count || 0),
      } : {
        promptTokenCount: 0,
        candidatesTokenCount: 0,
        totalTokenCount: 0,
      },
    } as GenerateContentResponse;
  }

}
