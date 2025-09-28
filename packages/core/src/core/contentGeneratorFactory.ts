/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * 
 * Modified by Chameleon Nexus Tech
 * This file has been modified to add multi-engine support including OpenRouter.
 * Original work: Google Gemini CLI
 * Modifications: Added engine factory with OpenRouter priority and multi-engine support
 */

/**
 * @author chameleon-nexus
 * @email mythicscribe2014@gmail.com
 */

import type { ContentGenerator } from './contentGenerator.js';
import { VolcengineContentGenerator } from './volcengineContentGenerator.js';
import { OpenrouterContentGenerator } from './openrouterContentGenerator.js';
import { AzureContentGenerator } from './azureContentGenerator.js';
import { OllamaContentGenerator } from './ollamaContentGenerator.js';
import { GlmContentGenerator } from './glmContentGenerator.js';
import { BailianContentGenerator } from './bailianContentGenerator.js';
import { 
  DEFAULT_AI_ENGINE, 
  SUPPORTED_ENGINES, 
  ALL_ENGINES,
  type SupportedEngine,
  type AllEngine 
} from './engineConstants.js';

/**
 * AI Engine type definitions
 * Using unified constant definitions
 */
export type AiEngine = AllEngine;

/**
 * ContentGenerator Factory Class
 * Creates corresponding ContentGenerator instances based on environment variables
 * Designed as an easily extensible factory pattern
 */
export class ContentGeneratorFactory {
  /**
   * Creates and returns a ContentGenerator instance based on environment variables
   * @param engineType Optional engine type, if not provided, reads from environment variables
   * @returns ContentGenerator instance
   */
  static createContentGenerator(engineType?: AiEngine): ContentGenerator {
    // Prioritize passed parameters, then environment variables, finally default values
    const engine = (engineType || process.env['AI_ENGINE'] || DEFAULT_AI_ENGINE).toLowerCase() as AiEngine;

    console.log(`🚀 Multi-Engine Support: Using ${engine.toUpperCase()} AI Engine`);

    switch (engine) {
      case 'volcengine':
        console.log('🔥 Volcengine AI Adapter: Initializing...');
        return new VolcengineContentGenerator();
        
      case 'openrouter':
        console.log('🌐 OpenRouter AI Adapter: Initializing...');
        return new OpenrouterContentGenerator();
        
      case 'azure':
        console.log('☁️ Azure OpenAI Adapter: Initializing...');
        return new AzureContentGenerator();
        
        
             case 'ollama':
               console.log('🦙 Ollama Local AI Adapter: Initializing...');
               return new OllamaContentGenerator();
               
             case 'glm':
               console.log('🧠 Zhipu AI GLM Adapter: Initializing...');
               return new GlmContentGenerator();
               
             case 'bailian':
               console.log('🌊 Alibaba Cloud Bailian Adapter: Initializing...');
               return new BailianContentGenerator();
               
             case 'openai':
               throw new Error('OpenAI engine not implemented yet. Please use openrouter or azure.');
               
             case 'anthropic':
               throw new Error('Anthropic engine not implemented yet. Please use openrouter.');
               
             case 'deepseek':
               throw new Error('DeepSeek engine not implemented yet. Please use volcengine or openrouter.');
               
             case 'custom':
               throw new Error('Custom engine not implemented yet.');
        
      default:
        console.log('🔥 Default Engine: Using Volcengine AI');
        return new VolcengineContentGenerator();
    }
  }

  /**
   * Gets the currently configured engine type
   * @returns Current engine type
   */
  static getCurrentEngine(): AiEngine {
    return (process.env['AI_ENGINE'] || DEFAULT_AI_ENGINE).toLowerCase() as AiEngine;
  }

  /**
   * Checks if the specified engine is supported
   * @param engine Engine type
   * @returns Whether the engine is supported
   */
  static isEngineSupported(engine: string): boolean {
    return SUPPORTED_ENGINES.includes(engine.toLowerCase() as SupportedEngine);
  }

  /**
   * Gets all supported engine list
   * @returns List of supported engines
   */
  static getSupportedEngines(): SupportedEngine[] {
    return [...SUPPORTED_ENGINES];
  }

  /**
   * Gets all available engine list (including unimplemented)
   * @returns List of all engines
   */
  static getAllEngines(): AllEngine[] {
    return [...ALL_ENGINES];
  }

  /**
   * Prints engine status information
   */
  static printEngineStatus(): void {
    console.log('🔧 Multi-Engine Status:');
    console.log(`   Current Engine: ${this.getCurrentEngine()}`);
    console.log(`   Supported Engines: ${this.getSupportedEngines().join(', ')}`);
    console.log(`   Available Engines: ${this.getAllEngines().join(', ')}`);
  }
}

/**
 * Convenient factory function for backward compatibility
 * @param engineType Optional engine type
 * @returns ContentGenerator instance
 */
export function createContentGenerator(engineType?: AiEngine): ContentGenerator {
  return ContentGeneratorFactory.createContentGenerator(engineType);
}
