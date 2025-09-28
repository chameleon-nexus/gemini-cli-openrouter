# Gemini CLI - OpenRouter版本

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**🚀 增强版Gemini CLI，支持OpenRouter - 通过一个接口访问200+AI模型**

> ⚠️ **重要声明**: 这是 [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) 的修改版本。原始项目版权归 Google LLC 所有，遵循 Apache 2.0 许可证。

## 🌐 语言切换

| 🇺🇸 [English](../README.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇯🇵 [日本語](README.ja.md) | 🇩🇪 [Deutsch](README.de.md) | 🇸🇦 [العربية](README.ar.md) | 🇨🇳 **中文** |

## 🌟 核心特性

- 🎯 **OpenRouter集成**: 通过OpenRouter统一API访问200+AI模型
- 🔄 **模型灵活性**: 在GPT-4、Claude、Llama、Mistral等模型间轻松切换
- 🌍 **全球模型覆盖**: 支持OpenAI、Anthropic、Meta、Google等所有主流AI模型
- 🔧 **简单配置**: 一个API密钥即可使用所有模型
- 📊 **完整功能**: 流式/非流式、Token计算、函数调用全支持
- 🚀 **增强性能**: 针对OpenRouter高性能基础设施优化

## 📦 安装

```bash
npm install -g @chameleon-nexus-tech/gemini-cli
```

## 🎛️ OpenRouter集成

### 🌐 OpenRouter - 通往200+AI模型的网关

OpenRouter通过单一的统一API提供对世界最先进AI模型的访问。这个增强版Gemini CLI利用OpenRouter让您即时访问：

**🔥 热门可用模型:**
- `openai/gpt-4o` (默认) - OpenAI最强大的模型
- `openai/gpt-4` - OpenAI旗舰模型
- `openai/gpt-4-turbo` - 更快的GPT-4变体
- `anthropic/claude-3.5-sonnet` - Anthropic最强大的模型
- `meta-llama/llama-3.1-8b-instruct` - Meta最新的Llama模型
- `meta-llama/llama-3.1-70b-instruct` - Meta最强大的Llama
- `mistralai/mistral-7b-instruct` - Mistral高效模型
- `mistralai/mixtral-8x7b-instruct` - Mistral专家混合模型
- `google/gemini-pro` - Google的Gemini模型
- `google/gemini-pro-vision` - Google多模态模型
- `cohere/command-r-plus` - Cohere先进模型
- `deepseek/deepseek-coder` - 专业编程模型
- 以及来自领先AI公司的190+更多模型！

**🎯 为什么选择OpenRouter？**
- **单一API密钥**: 用一个凭证访问所有模型
- **最佳定价**: 所有提供商的竞争性价格
- **高可用性**: 99.9%正常运行时间，全球基础设施
- **模型比较**: 轻松切换模型进行测试
- **企业功能**: 速率限制、使用分析等

## ⚙️ 配置

### 🔧 必需的环境变量

您只需要设置这**4个环境变量**即可开始：

```bash
# 1. 设置AI引擎为OpenRouter
export AI_ENGINE="openrouter"

# 2. 设置您的OpenRouter API密钥 (从 https://openrouter.ai/keys 获取)
export AI_API_KEY="your-openrouter-api-key"

# 3. 选择您喜欢的模型
export AI_MODEL="openai/gpt-4o"

# 4. 设置任意值跳过Gemini API验证
export GEMINI_API_KEY="any-value-here"
```

### 🪟 Windows PowerShell配置

```powershell
# 设置4个必需的环境变量
$env:AI_ENGINE="openrouter"
$env:AI_API_KEY="your-openrouter-api-key"
$env:AI_MODEL="openai/gpt-4o"
$env:GEMINI_API_KEY="any-value-here"
```

### 🎯 快速设置

就是这样！这4个变量就是您需要的全部：
- `AI_ENGINE="openrouter"` - 告诉系统使用OpenRouter
- `AI_API_KEY="your-key"` - 您的OpenRouter API密钥
- `AI_MODEL="model-name"` - 您想要使用的AI模型
- `GEMINI_API_KEY="anything"` - 设置为任意值跳过验证

## 🚀 使用方法

### 💬 直接提问模式

```bash
gemini "你好，请介绍一下自己"
```

### 🔄 交互模式

```bash
gemini
```

然后选择"2. 使用Gemini API密钥"并按回车开始聊天。

## 🧪 模型测试示例

### 🌐 使用GPT-4o测试

```bash
# 设置4个必需的环境变量
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

# 测试命令
gemini "你好，请介绍一下自己并告诉我你是哪个AI模型。"
```


## 🏗️ 技术架构

### 🎯 OpenRouter集成架构

本项目采用**专门的OpenRouter集成**，提供对200+AI模型的无缝访问：

```
OpenRouter集成
├── OpenrouterContentGenerator    (主要OpenRouter适配器)
├── ContentGeneratorFactory       (引擎选择和管理)
├── 工具执行系统                  (函数调用支持)
└── 流式响应处理器                (实时响应处理)
```

### 🔧 核心特性

✅ **OpenRouter集成**: 通过OpenRouter统一API直接访问200+AI模型  
✅ **模型灵活性**: 通过单个环境变量轻松切换不同AI模型  
✅ **自动格式转换**: Gemini格式与OpenRouter API格式之间的无缝转换  
✅ **流式响应支持**: 所有支持模型的实时流式响应  
✅ **函数调用**: 所有模型的完整工具/函数调用支持  
✅ **智能错误处理**: 详细的错误消息和全面处理  
✅ **配置优先级**: OpenRouter特定配置 > 统一配置 > 默认配置  

### 📁 核心文件结构

```
packages/core/src/core/
├── contentGenerator.ts              # ContentGenerator接口定义
├── contentGeneratorFactory.ts       # 引擎工厂，OpenRouter优先
├── openrouterContentGenerator.ts    # OpenRouter适配器 (主要)
├── coreToolScheduler.ts            # 工具执行和函数调用
└── [其他适配器]                     # 额外引擎支持
```

### 🔄 OpenRouter API集成

**请求转换流程**:
```
Gemini请求 → OpenRouter适配器 → OpenRouter API → 200+AI模型
```

**响应转换流程**:
```
AI模型响应 → OpenRouter API → OpenRouter适配器 → Gemini响应格式
```

**支持的OpenRouter功能**:
- **模型选择**: 在200+模型间轻松切换
- **函数调用**: 完整的工具/函数调用支持
- **流式处理**: 实时响应流
- **Token计算**: 自动Token使用跟踪
- **错误处理**: 全面的错误管理
- **速率限制**: 内置速率限制和重试逻辑

## 📋 许可证合规

本项目基于 [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) 并遵循Apache 2.0许可证要求：

### 原始项目信息

- **原始项目**: Google Gemini CLI
- **原始版权**: Copyright 2025 Google LLC  
- **原始许可证**: Apache License 2.0
- **原始仓库**: https://github.com/google-gemini/gemini-cli

### 修改声明

根据Apache 2.0许可证第4节：

- ✅ 保留了原始Apache 2.0许可证
- ✅ 保留了原始版权声明
- ✅ 明确标记了修改内容
- ✅ 包含了完整的许可证文本

## 🔄 从原始Gemini CLI迁移

如果您从原始Google Gemini CLI迁移：

1. **卸载原始版本**: `npm uninstall -g @google/gemini-cli`
2. **安装此版本**: `npm install -g @chameleon-nexus-tech/gemini-cli`
3. **获取OpenRouter API密钥**: 在 [OpenRouter](https://openrouter.ai/keys) 注册
4. **设置4个必需的环境变量**:
   ```bash
   export AI_ENGINE="openrouter"
   export AI_API_KEY="your-openrouter-api-key"
   export AI_MODEL="openai/gpt-4o"
   export GEMINI_API_KEY="any-value-here"
   ```
5. **照常使用**: 所有命令保持不变，现在可以访问200+模型！

## 🧪 测试OpenRouter集成

### 🚀 快速测试脚本

创建一个简单的测试脚本来验证您的OpenRouter设置：

```bash
#!/bin/bash
# test-openrouter.sh

# 设置4个必需的环境变量
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

echo "正在使用GPT-4o测试OpenRouter..."
gemini "你好，请介绍一下自己并告诉我你是哪个AI模型。"
```

### 🔧 模型比较测试

测试不同模型以比较它们的响应：

```bash
#!/bin/bash
# compare-models.sh

# 设置基础配置 (设置一次)
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export GEMINI_API_KEY="any-value-here"

# 测试GPT-4o
echo "=== 测试GPT-4o ==="
export AI_MODEL="openai/gpt-4o"
gemini "写一首关于人工智能的俳句。"
```

## 🔗 相关链接

- [原始项目 (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [OpenRouter](https://openrouter.ai/) - 访问200+AI模型
- [OpenRouter API文档](https://openrouter.ai/docs)
- [OpenRouter模型列表](https://openrouter.ai/models)
- [Apache 2.0许可证](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 问题报告

如果您遇到任何问题，请在 [GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues) 上报告。

## 🤝 贡献

欢迎贡献！请确保：

1. 遵循原始项目的代码风格
2. 包含适当的测试
3. 更新相关文档
4. 尊重Apache 2.0许可证条款


## 🌟 项目亮点

- 🚀 **OpenRouter集成**: 通过一个API直接访问200+AI模型
- 🎯 **模型灵活性**: 在GPT-4、Claude、Llama等模型间轻松切换
- 🔄 **简单配置**: 一个API密钥用于所有模型
- 🌍 **全球覆盖**: 访问OpenAI、Anthropic、Meta、Google等所有模型
- 📊 **企业级**: 完整的错误处理和配置管理
- 🔧 **函数调用**: 所有模型的完整工具/函数调用支持

---

**免责声明**: 本项目与Google或OpenRouter无关。使用本软件时请遵守相应平台的服务条款。