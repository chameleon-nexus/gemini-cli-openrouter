/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @author chameleon-nexus
 * @email mythicscribe2014@gmail.com
 * 
 * AI Engine Constants Definition
 * Unified management of default values and configurations to avoid hardcoding
 */

/**
 * Default AI Engine
 */
export const DEFAULT_AI_ENGINE = 'volcengine';

/**
 * List of implemented and supported AI engines
 */
export const SUPPORTED_ENGINES = [
  'volcengine',
  'openrouter', 
  'azure',
  'glm',
  'bailian',
  'ollama'
] as const;

/**
 * List of all planned supported AI engines (including unimplemented)
 */
export const ALL_ENGINES = [
  ...SUPPORTED_ENGINES,
  'openai',
  'anthropic',
  'deepseek',
  'custom'
] as const;

/**
 * Engine type definitions
 */
export type SupportedEngine = typeof SUPPORTED_ENGINES[number];
export type AllEngine = typeof ALL_ENGINES[number];

/**
 * Engine configuration defaults
 */
export const ENGINE_DEFAULTS = {
  volcengine: {
    baseUrl: 'https://ark.cn-beijing.volces.com/api/v3',
    model: 'deepseek-v3-250324',
    apiKeyEnv: ['VOLCENGINE_API_KEY', 'GEMINI_API_KEY'] // Support multiple environment variables as fallback
  },
  openrouter: {
    baseUrl: 'https://openrouter.ai/api/v1',
    model: 'anthropic/claude-3.5-sonnet',
    apiKeyEnv: ['OPENROUTER_API_KEY']
  },
  azure: {
    baseUrl: '', // Must be provided by user
    model: 'gpt-4',
    apiVersion: '2024-02-15-preview',
    apiKeyEnv: ['AZURE_API_KEY']
  },
  glm: {
    baseUrl: 'https://open.bigmodel.cn/api/paas/v4',
    model: 'glm-4',
    apiKeyEnv: ['GLM_API_KEY', 'ZHIPU_API_KEY']
  },
  bailian: {
    baseUrl: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    model: 'qwen-plus',
    apiKeyEnv: ['AI_API_KEY', 'DASHSCOPE_API_KEY', 'ALIBABA_CLOUD_API_KEY', 'BAILIAN_API_KEY']
  },
  ollama: {
    baseUrl: 'http://localhost:11434',
    model: 'llama3.2:latest',
    apiKeyEnv: [] // Ollama doesn't need API key
  }
} as const;

/**
 * List of engines that require API keys
 */
export const ENGINES_REQUIRING_API_KEY = SUPPORTED_ENGINES.filter(engine => 
  ENGINE_DEFAULTS[engine]?.apiKeyEnv?.length > 0
);

/**
 * List of engines that require Base URL
 */
export const ENGINES_REQUIRING_BASE_URL = SUPPORTED_ENGINES.filter(engine => {
  const defaults = ENGINE_DEFAULTS[engine];
  return defaults?.baseUrl && defaults.baseUrl.length > 0;
});
