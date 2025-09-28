/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modified by Chameleon Nexus Tech
 * This file has been modified to add OpenRouter integration support.
 * Original work: Google Gemini CLI
 * Modifications: Added OpenRouter API adapter and format conversion
 */

import type {
  Content,
  CountTokensParameters,
  CountTokensResponse,
  EmbedContentParameters,
  EmbedContentResponse,
  FunctionCall,
  GenerateContentParameters,
  GenerateContentResponse,
  Part,
  Tool,
} from '@google/genai';
import type { ContentGenerator } from './contentGenerator.js';

// OpenRouter API type definitions (compatible with OpenAI ChatCompletions API)
type OpenRouterTool = {
  type: 'function';
  function: {
    name: string;
    description?: string;
    parameters?: unknown;
  };
};

type OpenRouterToolCall = {
  id?: string;
  type: 'function';
  function: {
    name: string;
    arguments: string;
  };
};

type OpenRouterMessage = {
  role: 'system' | 'user' | 'assistant' | 'tool';
  content?: string;
  tool_calls?: OpenRouterToolCall[];
  tool_call_id?: string;
};

type OpenRouterChoice = {
  index: number;
  message: OpenRouterMessage;
  finish_reason?: string;
};

type OpenRouterUsage = {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
};

type OpenRouterResponse = {
  choices: OpenRouterChoice[];
  usage?: OpenRouterUsage;
};

/**
 * OpenRouter ContentGenerator implementation
 * Supports access to multiple AI model providers through OpenRouter
 */
export class OpenrouterContentGenerator implements ContentGenerator {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly model: string;

  constructor() {
    // Unified environment variable support, prioritize engine-specific variables, fallback to generic variables
    this.baseUrl = process.env['OPENROUTER_BASE_URL'] || process.env['AI_BASE_URL'] || 'https://openrouter.ai/api/v1';
    this.apiKey = process.env['OPENROUTER_API_KEY'] || process.env['AI_API_KEY'] || (() => {
      throw new Error('API key not found. Please set one of: OPENROUTER_API_KEY or AI_API_KEY environment variable.');
    })();
    this.model = process.env['OPENROUTER_MODEL'] || process.env['AI_MODEL'] || 'anthropic/claude-3.5-sonnet';
    
    console.log('🌐 OpenRouter ContentGenerator: Initialized successfully');
    console.log(`   Model: ${this.model}`);
    console.log(`   API Endpoint: ${this.baseUrl}`);
  }

  async generateContent(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<GenerateContentResponse> {
    try {
      console.log(`🔥 OpenRouter generateContent called!`);
      // Build OpenRouter request
      const openrouterRequest = this.buildOpenRouterRequestPayload(request, false);

      console.log(`🌐 OpenRouter request: model=${this.model}, tools=${openrouterRequest.tools?.length || 0}`);

      // Call OpenRouter API
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': 'https://github.com/chameleon-nexus-tech/gemini-cli',
          'X-Title': 'Gemini CLI - OpenRouter Integration',
        },
        body: JSON.stringify(openrouterRequest),
        signal: request.config?.abortSignal
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter API error: ${response.status} ${errorText}`);
      }

      const openrouterResponse = await response.json();
      
      // Convert response format (key: don't execute tools, only return FunctionCall)
      return this.convertOpenRouterToGemini(openrouterResponse);

    } catch (error) {
      console.error('OpenRouter API call failed:', error);
      throw error;
    }
  }

  async generateContentStream(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<AsyncGenerator<GenerateContentResponse>> {
    try {
      console.log(`🔥 OpenRouter generateContentStream called!`);
      // Build OpenRouter streaming request
      const openrouterRequest = this.buildOpenRouterRequestPayload(request, true);

      console.log(`🌐 OpenRouter streaming request: model=${this.model}, tools=${openrouterRequest.tools?.length || 0}`);

      // Call OpenRouter streaming API
      const response = await fetch(`${this.baseUrl}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.apiKey}`,
          'HTTP-Referer': 'https://github.com/chameleon-nexus-tech/gemini-cli',
          'X-Title': 'Gemini CLI - OpenRouter Integration',
        },
        body: JSON.stringify(openrouterRequest),
        signal: request.config?.abortSignal
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`OpenRouter API error: ${response.status} ${errorText}`);
      }

      // Handle streaming response
      return this.handleOpenRouterStream(response);

    } catch (error) {
      console.error('OpenRouter streaming API call failed:', error);
      throw error;
    }
  }

  async countTokens(request: CountTokensParameters): Promise<CountTokensResponse> {
    // OpenRouter doesn't provide a separate token counting endpoint
    // Use a rough estimation based on text length
    const text = JSON.stringify(request);
    const estimatedTokens = Math.ceil(text.length / 4);
    
    return {
      totalTokens: estimatedTokens,
    };
  }

  async embedContent(request: EmbedContentParameters): Promise<EmbedContentResponse> {
    throw new Error('Embedding not supported by OpenRouter implementation');
  }

  private buildOpenRouterRequestPayload(
    request: GenerateContentParameters,
    stream: boolean,
  ): {
    model: string;
    messages: OpenRouterMessage[];
    temperature?: number;
    max_tokens?: number;
    top_p?: number;
    stream: boolean;
    tools?: OpenRouterTool[];
    tool_choice?: 'auto' | 'none';
    parallel_tool_calls?: boolean;
  } {
    // Ensure contents is an array
    const contents = Array.isArray(request.contents) ? request.contents : [request.contents as any];
    const messages = this.convertGeminiToOpenRouterMessages(contents);

    const payload: any = {
      model: this.model,
      messages,
      stream,
      temperature: request.config?.temperature,
      max_tokens: request.config?.maxOutputTokens,
      top_p: request.config?.topP,
    };

    // Handle tool declarations
    console.log(`🔍 OpenRouter debug: request.config?.tools =`, request.config?.tools?.length || 0);
    if (request.config?.tools && request.config.tools.length > 0) {
      // Filter out valid tool declarations
      const validTools = Array.isArray(request.config.tools) 
        ? request.config.tools.filter(tool => tool && typeof tool === 'object' && 'functionDeclarations' in tool)
        : [];
      
      console.log(`🔍 OpenRouter debug: valid tools count = ${validTools.length}`);
      
      if (validTools.length > 0) {
        payload.tools = this.convertTools(validTools as Tool[]);
        payload.tool_choice = 'auto';
        payload.parallel_tool_calls = true; // Support parallel tool calls
        
        console.log(`🔧 OpenRouter tools enabled: ${payload.tools.length} tools, tool_choice=auto`);
      }
    } else {
      console.log(`⚠️ OpenRouter debug: no tool declarations provided`);
    }

    return payload;
  }

  private convertGeminiToOpenRouterMessages(contents: Content[]): OpenRouterMessage[] {
    const messages: OpenRouterMessage[] = [];

    for (const content of contents) {
      const textParts: string[] = [];
      const toolCalls: OpenRouterToolCall[] = [];

      for (const part of content.parts ?? []) {
        if (part.text && part.text.trim()) {
          textParts.push(part.text);
        }

        if (part.functionCall) {
          toolCalls.push({
            id: part.functionCall.id || `call_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            type: 'function',
            function: {
              name: part.functionCall.name || 'unknown_function',
              arguments: JSON.stringify(part.functionCall.args ?? {}),
            },
          });
        }

        if (part.functionResponse) {
          messages.push({
            role: 'tool',
            tool_call_id: part.functionResponse.id || 'unknown',
            content: this.serializeFunctionResponse(part.functionResponse),
          });
        }
      }

      const text = textParts.join('\n').trim();
      if (text || toolCalls.length > 0) {
        const role = content.role === 'model' ? 'assistant' : (content.role as 'system' | 'user' | 'assistant' | 'tool');
        messages.push({
          role,
          content: text || undefined,
          tool_calls: toolCalls.length > 0 ? toolCalls : undefined,
        });
      }
    }

    return messages;
  }

  private convertTools(tools?: Tool[]): OpenRouterTool[] {
    if (!tools) {
      return [];
    }

    const result: OpenRouterTool[] = [];
    for (const tool of tools) {
      for (const declaration of tool.functionDeclarations ?? []) {
        if (!declaration?.name) {
          continue;
        }
        
        result.push({
          type: 'function',
          function: {
            name: declaration.name,
            description: declaration.description,
            parameters: declaration.parameters,
          },
        });
      }
    }
    
    console.log(`🔧 OpenRouter tool conversion completed: prepared ${result.length} tools`);
    result.forEach(tool => {
      console.log(`   - ${tool.function.name}: ${tool.function.description || 'no description'}`);
    });
    
    return result;
  }

  private serializeFunctionResponse(functionResponse: any): string {
    try {
      return JSON.stringify(functionResponse.response || functionResponse, null, 2);
    } catch (error) {
      console.warn('Failed to serialize function response:', error);
      return String(functionResponse.response || functionResponse);
    }
  }

  private convertOpenRouterToGemini(openrouterResponse: OpenRouterResponse): GenerateContentResponse {
    const choice = openrouterResponse.choices?.[0];
    if (!choice) {
      throw new Error('OpenRouter response did not contain any choices.');
    }

    const parts: Part[] = [];
    const functionCalls: FunctionCall[] = [];
    const message = choice.message;
    
    // Handle tool calls - key: like GLM, only create FunctionCall, don't execute
    if (message.tool_calls && message.tool_calls.length > 0) {
      console.log(`🔧 OpenRouter returned ${message.tool_calls.length} tool calls`);
      
      for (const toolCall of message.tool_calls) {
        const args = this.safeParseJson(toolCall.function.arguments);
        const call: FunctionCall = {
          id: toolCall.id || `call_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: toolCall.function.name,
          args,
        };
        functionCalls.push(call);
        parts.push({ functionCall: call });
        
        console.log(`📋 Tool call: ${call.name}`, call.args);
      }
    }

    // Handle text content
    const textContent = message.content?.trim();
    if (textContent) {
      parts.push({ text: textContent });
    }

    const usage = openrouterResponse.usage;

    return {
      candidates: [
        {
          content: {
            role: 'model',
            parts,
          },
          finishReason: this.mapFinishReason(choice.finish_reason ?? 'stop'),
          index: choice.index ?? 0,
        },
      ],
      functionCalls: functionCalls.length > 0 ? functionCalls : undefined,
      text: textContent ?? undefined,
      usageMetadata: {
        promptTokenCount: usage?.prompt_tokens ?? 0,
        candidatesTokenCount: usage?.completion_tokens ?? 0,
        totalTokenCount: usage?.total_tokens ?? 0,
      },
    } as GenerateContentResponse;
  }

  private safeParseJson(jsonString: string): Record<string, unknown> {
    try {
      const parsed = JSON.parse(jsonString);
      return typeof parsed === 'object' && parsed !== null ? parsed : {};
    } catch (error) {
      console.warn('Failed to parse tool call arguments as JSON:', error);
      return {};
    }
  }

  private mapFinishReason(reason: string): any {
    switch (reason) {
      case 'stop':
        return 'STOP';
      case 'length':
        return 'MAX_TOKENS';
      case 'tool_calls':
        return 'STOP'; // Tool calls are also considered normal stop
      case 'content_filter':
        return 'SAFETY';
      default:
        return 'OTHER';
    }
  }

  private async* handleOpenRouterStream(response: Response): AsyncGenerator<GenerateContentResponse> {
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error('Stream reader not available');
    }

    // Accumulate tool call data (similar to GLM processing)
    let accumulatedToolCalls: OpenRouterToolCall[] = [];

    try {
      while (true) {
        const { done, value } = await reader.read();
        
        if (done) {
          break;
        }

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n').filter(line => line.trim() !== '');
        
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6);
            
            if (data === '[DONE]') {
              continue;
            }
            
            try {
              const parsed = JSON.parse(data);
              const streamChoice = parsed.choices?.[0];
              
              if (streamChoice) {
                const delta = streamChoice.delta;
                
                // Handle text content流
                if (delta.content) {
                  yield {
                    candidates: [{
                      content: {
                        role: 'model',
                        parts: [{ text: delta.content }],
                      },
                      finishReason: 'STOP' as any,
                      index: 0,
                    }],
                  } as GenerateContentResponse;
                }
                
                // Handle tool call stream (accumulate)
                if (delta.tool_calls) {
                  for (const toolCallDelta of delta.tool_calls) {
                    const index = toolCallDelta.index;
                    
                    // Ensure array is long enough
                    while (accumulatedToolCalls.length <= index) {
                      accumulatedToolCalls.push({
                        id: '',
                        type: 'function',
                        function: { name: '', arguments: '' }
                      });
                    }
                    
                    const accumCall = accumulatedToolCalls[index];
                    
                    if (toolCallDelta.id) {
                      accumCall.id = toolCallDelta.id;
                    }
                    if (toolCallDelta.function?.name) {
                      accumCall.function.name = toolCallDelta.function.name;
                    }
                    if (toolCallDelta.function?.arguments) {
                      accumCall.function.arguments += toolCallDelta.function.arguments;
                    }
                  }
                }
                
                // Can record end reason here, but no additional processing needed
              }
            } catch (error) {
              console.warn('Failed to parse OpenRouter stream chunk:', error);
            }
          }
        }
      }
    } finally {
      reader.releaseLock();
    }

    // If there are accumulated tool calls, return them at the end
    if (accumulatedToolCalls.length > 0 && accumulatedToolCalls.some(call => call.function.name)) {
      const parts: Part[] = [];
      const functionCalls: FunctionCall[] = [];
      
      console.log(`🔧 OpenRouter streaming returned ${accumulatedToolCalls.length} tool calls`);
      
      for (const toolCall of accumulatedToolCalls) {
        if (toolCall.function.name) {
          const args = this.safeParseJson(toolCall.function.arguments);
          const call: FunctionCall = {
            id: toolCall.id || `call_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            name: toolCall.function.name,
            args,
          };
          functionCalls.push(call);
          parts.push({ functionCall: call });
          
          console.log(`📋 Tool call: ${call.name}`, call.args);
        }
      }
      
      if (functionCalls.length > 0) {
        yield {
          candidates: [{
            content: {
              role: 'model',
              parts,
            },
            finishReason: 'STOP' as any,
            index: 0,
          }],
          functionCalls,
        } as GenerateContentResponse;
      }
    }
  }
}
