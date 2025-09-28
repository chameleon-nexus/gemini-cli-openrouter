# Gemini CLI - OpenRouter Edition

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**🚀 Enhanced Gemini CLI with OpenRouter Support - Access 200+ AI Models Through One Interface**

> ⚠️ **Important Notice**: This is a modified version of [Google Gemini CLI](https://github.com/google-gemini/gemini-cli). Original project copyright belongs to Google LLC under Apache 2.0 License.

## 🌐 Language Switch

| 🇺🇸 **English** | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇯🇵 [日本語](README.ja.md) | 🇩🇪 [Deutsch](README.de.md) | 🇸🇦 [العربية](README.ar.md) | 🇨🇳 [中文](README.zh.md) |

## 🌟 Core Features

- 🎯 **OpenRouter Integration**: Access 200+ AI models through OpenRouter's unified API
- 🔄 **Model Flexibility**: Switch between GPT-4, Claude, Llama, Mistral, and many more
- 🌍 **Global Model Coverage**: Supports all major AI models from OpenAI, Anthropic, Meta, Google, and more
- 🔧 **Simple Configuration**: Single API key for all models
- 📊 **Complete Functionality**: Streaming/non-streaming, token counting, function calling all supported
- 🚀 **Enhanced Performance**: Optimized for OpenRouter's high-performance infrastructure

## 📦 Installation

```bash
npm install -g @chameleon-nexus-tech/gemini-cli
```

## 🎛️ OpenRouter Integration

### 🌐 OpenRouter - Your Gateway to 200+ AI Models

OpenRouter provides access to the world's most advanced AI models through a single, unified API. This enhanced Gemini CLI leverages OpenRouter to give you instant access to:

**🔥 Popular Models Available:**
- `openai/gpt-4o` (default) - OpenAI's most powerful model
- `openai/gpt-4` - OpenAI's flagship model
- `openai/gpt-4-turbo` - Faster GPT-4 variant
- `anthropic/claude-3.5-sonnet` - Anthropic's most capable model
- `meta-llama/llama-3.1-8b-instruct` - Meta's latest Llama model
- `meta-llama/llama-3.1-70b-instruct` - Meta's most powerful Llama
- `mistralai/mistral-7b-instruct` - Mistral's efficient model
- `mistralai/mixtral-8x7b-instruct` - Mixtral's mixture of experts
- `google/gemini-pro` - Google's Gemini model
- `google/gemini-pro-vision` - Google's multimodal model
- `cohere/command-r-plus` - Cohere's advanced model
- `deepseek/deepseek-coder` - Specialized coding model
- And 190+ more models from leading AI companies!

**🎯 Why OpenRouter?**
- **Single API Key**: Access all models with one credential
- **Best Pricing**: Competitive rates across all providers
- **High Availability**: 99.9% uptime with global infrastructure
- **Model Comparison**: Easy switching between models for testing
- **Enterprise Features**: Rate limiting, usage analytics, and more

## ⚙️ Configuration

### 🔧 Required Environment Variables

You only need to set these **4 environment variables** to get started:

```bash
# 1. Set AI engine to OpenRouter
export AI_ENGINE="openrouter"

# 2. Set your OpenRouter API key (get from https://openrouter.ai/keys)
export AI_API_KEY="your-openrouter-api-key"

# 3. Choose your preferred model
export AI_MODEL="openai/gpt-4o"

# 4. Set any value to skip Gemini API validation
export GEMINI_API_KEY="any-value-here"
```

### 🪟 Windows PowerShell Configuration

```powershell
# Set the 4 required environment variables
$env:AI_ENGINE="openrouter"
$env:AI_API_KEY="your-openrouter-api-key"
$env:AI_MODEL="openai/gpt-4o"
$env:GEMINI_API_KEY="any-value-here"
```

### 🎯 Quick Setup

That's it! These 4 variables are all you need:
- `AI_ENGINE="openrouter"` - Tells the system to use OpenRouter
- `AI_API_KEY="your-key"` - Your OpenRouter API key
- `AI_MODEL="model-name"` - The AI model you want to use
- `GEMINI_API_KEY="anything"` - Set to any value to skip validation

## 🚀 Usage

### 💬 Direct Question Mode

```bash
gemini "Hello, please introduce yourself"
```

### 🔄 Interactive Mode

```bash
gemini
```

Then select "2. Use Gemini API Key" and press Enter to start chatting.

## 🧪 Model Testing Examples

### 🌐 Testing with GPT-4o

```bash
# Set the 4 required environment variables
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

# Test command
gemini "Hello, please introduce yourself and tell me which AI model you are."
```

## 🏗️ Technical Architecture

### 🎯 OpenRouter Integration Architecture

This project features a **specialized OpenRouter integration** that provides seamless access to 200+ AI models:

```
OpenRouter Integration
├── OpenrouterContentGenerator    (Primary OpenRouter adapter)
├── ContentGeneratorFactory       (Engine selection and management)
├── Tool Execution System        (Function calling support)
└── Streaming Response Handler    (Real-time response processing)
```

### 🔧 Core Features

✅ **OpenRouter Integration**: Direct access to 200+ AI models through OpenRouter's unified API  
✅ **Model Flexibility**: Easy switching between different AI models with a single environment variable  
✅ **Automatic Format Conversion**: Seamless conversion between Gemini format and OpenRouter API format  
✅ **Streaming Response Support**: Real-time streaming responses for all supported models  
✅ **Function Calling**: Full support for tool/function calling across all models  
✅ **Intelligent Error Handling**: Comprehensive error handling with detailed messages  
✅ **Configuration Priority**: OpenRouter-specific config > Unified config > Default config  

### 📁 Core File Structure

```
packages/core/src/core/
├── contentGenerator.ts              # ContentGenerator interface definition
├── contentGeneratorFactory.ts       # Engine factory with OpenRouter priority
├── openrouterContentGenerator.ts    # OpenRouter adapter (primary)
├── coreToolScheduler.ts            # Tool execution and function calling
└── [other adapters]                 # Additional engine support
```

### 🔄 OpenRouter API Integration

**Request Conversion Flow**:
```
Gemini Request → OpenRouter Adapter → OpenRouter API → 200+ AI Models
```

**Response Conversion Flow**:
```
AI Model Response → OpenRouter API → OpenRouter Adapter → Gemini Response Format
```

**Supported OpenRouter Features**:
- **Model Selection**: Easy switching between 200+ models
- **Function Calling**: Full tool/function calling support
- **Streaming**: Real-time response streaming
- **Token Counting**: Automatic token usage tracking
- **Error Handling**: Comprehensive error management
- **Rate Limiting**: Built-in rate limiting and retry logic

## 📋 License Compliance

This project is based on [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) and follows Apache 2.0 License requirements:

### Original Project Information

- **Original Project**: Google Gemini CLI
- **Original Copyright**: Copyright 2025 Google LLC  
- **Original License**: Apache License 2.0
- **Original Repository**: https://github.com/google-gemini/gemini-cli

### Modification Statement

In accordance with Apache 2.0 License Section 4:

- ✅ Retained original Apache 2.0 license
- ✅ Retained original copyright notices
- ✅ Clearly marked modifications
- ✅ Included complete license text

## 🔄 Migration from Original Gemini CLI

If you're migrating from the original Google Gemini CLI:

1. **Uninstall original version**: `npm uninstall -g @google/gemini-cli`
2. **Install this version**: `npm install -g @chameleon-nexus-tech/gemini-cli`
3. **Get OpenRouter API key**: Sign up at [OpenRouter](https://openrouter.ai/keys)
4. **Set the 4 required environment variables**:
   ```bash
   export AI_ENGINE="openrouter"
   export AI_API_KEY="your-openrouter-api-key"
   export AI_MODEL="openai/gpt-4o"
   export GEMINI_API_KEY="any-value-here"
   ```
5. **Use as before**: All commands remain the same, now with access to 200+ models!

## 🧪 Testing OpenRouter Integration

### 🚀 Quick Test Script

Create a simple test script to verify your OpenRouter setup:

```bash
#!/bin/bash
# test-openrouter.sh

# Set the 4 required environment variables
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

echo "Testing OpenRouter with GPT-4o..."
gemini "Hello, please introduce yourself and tell me which AI model you are."
```

### 🔧 Model Comparison Test

Test different models to compare their responses:

```bash
#!/bin/bash
# compare-models.sh

# Set up the base configuration (set once)
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export GEMINI_API_KEY="any-value-here"

# Test GPT-4o
echo "=== Testing GPT-4o ==="
export AI_MODEL="openai/gpt-4o"
gemini "Write a haiku about artificial intelligence."
```

## 🔗 Related Links

- [Original Project (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [OpenRouter](https://openrouter.ai/) - Access 200+ AI models
- [OpenRouter API Documentation](https://openrouter.ai/docs)
- [OpenRouter Model List](https://openrouter.ai/models)
- [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 Issue Reporting

If you encounter any issues, please report them on [GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues).

## 🤝 Contributing

Contributions are welcome! Please ensure:

1. Follow the original project's code style
2. Include appropriate tests
3. Update relevant documentation
4. Respect the Apache 2.0 license terms

## 🌟 Project Highlights

- 🚀 **OpenRouter Integration**: Direct access to 200+ AI models through one API
- 🎯 **Model Flexibility**: Easy switching between GPT-4, Claude, Llama, and more
- 🔄 **Simple Configuration**: Single API key for all models
- 🌍 **Global Coverage**: Access to models from OpenAI, Anthropic, Meta, Google, and more
- 📊 **Enterprise Grade**: Complete error handling and configuration management
- 🔧 **Function Calling**: Full support for tool/function calling across all models

---

**Disclaimer**: This project is not affiliated with Google or OpenRouter. Please comply with the terms of service of the respective platforms when using this software.