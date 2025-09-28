/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modified by Chameleon Nexus Tech
 * This file has been modified to add Azure OpenAI integration support.
 * Original work: Google Gemini CLI
 * Modifications: Added Azure OpenAI API adapter and format conversion
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
 * Azure OpenAI ContentGenerator implementation
 * 支持通过Azure OpenAI服务访问GPT系列模型
 */
export class AzureContentGenerator implements ContentGenerator {
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly model: string;
  private readonly apiVersion: string;

  constructor() {
    // 统一环境变量支持，优先使用引擎特定变量，fallback到通用变量
    this.baseUrl = process.env['AZURE_BASE_URL'] || process.env['AI_BASE_URL'] || (() => {
      throw new Error('Base URL not found. Please set one of: AZURE_BASE_URL or AI_BASE_URL environment variable.\n' +
        'Supported formats:\n' +
        '  - Azure OpenAI: https://your-resource-name.openai.azure.com\n' +
        '  - Azure AI Foundry: https://your-resource-name.services.ai.azure.com');
    })();
    this.apiKey = process.env['AZURE_API_KEY'] || process.env['AI_API_KEY'] || (() => {
      throw new Error('API key not found. Please set one of: AZURE_API_KEY or AI_API_KEY environment variable.\n' +
        'For Azure OpenAI: Get your API key from Azure OpenAI Studio\n' +
        'For Azure AI Foundry: Use "az account get-access-token --scope https://ai.azure.com/.default"');
    })();
    this.model = process.env['AZURE_MODEL'] || process.env['AI_MODEL'] || 'gpt-4';
    this.apiVersion = process.env['AZURE_API_VERSION'] || process.env['AI_API_VERSION'] || '2024-10-21';
    
    // 验证Base URL格式
    if (!this.baseUrl.includes('openai.azure.com') && !this.baseUrl.includes('services.ai.azure.com')) {
      console.warn('⚠️  Warning: Base URL format may be incorrect. Expected formats:\n' +
        '  - Azure OpenAI: https://your-resource-name.openai.azure.com\n' +
        '  - Azure AI Foundry: https://your-resource-name.services.ai.azure.com');
    }
    
    console.log('☁️ Azure OpenAI ContentGenerator: Initialized successfully');
    console.log(`   Model: ${this.model} (deployment name)`);
    console.log(`   API Endpoint: ${this.baseUrl}`);
    console.log(`   API Version: ${this.apiVersion}`);
    console.log(`   Note: Model name should match your Azure deployment name`);
  }

  async generateContent(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<GenerateContentResponse> {
    try {
      // 转换请求格式
      const messages = this.convertGeminiToAzure(request.contents);
      
      const azureRequest = {
        messages,
        temperature: request.config?.temperature,
        max_tokens: request.config?.maxOutputTokens,
        top_p: request.config?.topP,
        stream: false
      };

      // 调用Azure OpenAI API
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      // 支持两种认证方式：api-key 和 Bearer token
      if (this.baseUrl.includes('services.ai.azure.com')) {
        // Azure AI Foundry 使用 Bearer token
        headers['authorization'] = `Bearer ${this.apiKey}`;
      } else {
        // Azure OpenAI 使用 api-key
        headers['api-key'] = this.apiKey;
      }

      const response = await fetch(`${this.baseUrl}/openai/deployments/${this.model}/chat/completions?api-version=${this.apiVersion}`, {
        method: 'POST',
        headers,
        body: JSON.stringify(azureRequest),
        signal: request.config?.abortSignal
      });

      if (!response.ok) {
        const errorText = await response.text();
        let errorMessage = `Azure OpenAI API error: ${response.status} ${response.statusText}`;
        
        try {
          const errorJson = JSON.parse(errorText);
          if (errorJson.error?.message) {
            errorMessage += `\nDetails: ${errorJson.error.message}`;
          }
          if (errorJson.error?.code) {
            errorMessage += `\nError Code: ${errorJson.error.code}`;
          }
        } catch {
          errorMessage += `\nResponse: ${errorText}`;
        }
        
        // 提供常见错误的解决建议
        if (response.status === 401) {
          errorMessage += '\n\n💡 解决建议:\n' +
            '  - Azure OpenAI: 检查AZURE_API_KEY是否正确\n' +
            '  - Azure AI Foundry: 检查AZURE_API_KEY是否为有效的访问令牌';
        } else if (response.status === 404) {
          errorMessage += '\n\n💡 解决建议:\n' +
            '  - 检查AZURE_BASE_URL格式是否正确\n' +
            '  - 检查模型部署名称是否与AZURE_MODEL匹配\n' +
            '  - 确认部署已创建并处于活跃状态';
        } else if (response.status === 429) {
          errorMessage += '\n\n💡 解决建议: 请求频率过高，请稍后重试或检查配额限制';
        }
        
        throw new Error(errorMessage);
      }

      const azureResponse = await response.json();
      
      // 转换响应格式
      return this.convertAzureToGemini(azureResponse);

    } catch (error) {
      console.error('Azure OpenAI API call failed:', error);
      throw error;
    }
  }

  async generateContentStream(
    request: GenerateContentParameters,
    userPromptId: string,
  ): Promise<AsyncGenerator<GenerateContentResponse>> {
    // 对于流式响应，先实现非流式版本然后模拟流式输出
    const response = await this.generateContent(request, userPromptId);
    return this.simulateStream(response);
  }

  async countTokens(request: CountTokensParameters): Promise<CountTokensResponse> {
    // Azure OpenAI通过tiktoken库计算token，这里使用估算方法
    // 在实际使用中，Azure OpenAI会在响应中返回准确的token统计
    try {
      const messages = this.convertGeminiToAzure(request.contents);
      const text = messages.map(m => m.content).join(' ');
      
      // 更精确的token估算（基于OpenAI的tiktoken算法近似）
      const estimatedTokens = Math.ceil(text.length * 0.25); // 平均每个token约4个字符
      
      return {
        totalTokens: estimatedTokens,
      };
    } catch (error) {
      console.warn('Azure OpenAI token counting failed, using basic estimation:', error);
      
      // 基础估算回退
      const text = JSON.stringify(request);
      const estimatedTokens = Math.ceil(text.length / 4);
      
      return {
        totalTokens: estimatedTokens,
      };
    }
  }

  async embedContent(request: EmbedContentParameters): Promise<EmbedContentResponse> {
    throw new Error('Embedding not supported by Azure OpenAI implementation');
  }

  private convertGeminiToAzure(contents: any): Array<{role: string, content: string}> {
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

  private convertAzureToGemini(azureResponse: any): any {
    const choice = azureResponse.choices[0];
    const message = choice.message;
    
    return {
      candidates: [{
        content: {
          role: 'model',
          parts: [{ text: message.content }],
        },
        finishReason: 'STOP' as any,
        index: choice.index,
      }],
      usageMetadata: {
        promptTokenCount: azureResponse.usage.prompt_tokens,
        candidatesTokenCount: azureResponse.usage.completion_tokens,
        totalTokenCount: azureResponse.usage.total_tokens,
      },
    } as GenerateContentResponse;
  }

  private async* simulateStream(response: GenerateContentResponse): AsyncGenerator<GenerateContentResponse> {
    const content = response.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const words = content.split(' ');
    const chunkSize = 5; // 每次返回5个单词

    for (let i = 0; i < words.length; i += chunkSize) {
      const chunk = words.slice(i, i + chunkSize).join(' ');
      
      yield {
        candidates: [{
          content: {
            role: 'model',
            parts: [{ text: chunk + (i + chunkSize < words.length ? ' ' : '') }],
          },
          finishReason: 'STOP' as any,
          index: 0,
        }],
      } as GenerateContentResponse;

      // 添加小延迟以模拟流式输出
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }
}
