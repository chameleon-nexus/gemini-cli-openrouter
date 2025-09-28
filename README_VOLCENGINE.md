# Gemini CLI (Chameleon Nexus Tech 定制版)

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**Chameleon Nexus Tech 定制的 Gemini CLI，集成火山引擎 AI**

> ⚠️ **重要声明**: 这是基于 [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) 的修改版本。原项目版权归 Google LLC 所有，遵循 Apache 2.0 许可证。

## 🚀 特性

- ✅ **完全兼容**: 保持原版 Gemini CLI 的所有功能和界面
- ✅ **火山引擎集成**: 自动将所有请求转发到火山引擎 AI 
- ✅ **中文优化**: 针对中文对话进行了优化
- ✅ **无缝替换**: 无需修改使用习惯，直接替换即可

## 📦 安装

```bash
npm install -g @chameleon-nexus-tech/gemini-cli
```

## 🔧 使用方法

### 配置 API 密钥

```bash
export GEMINI_API_KEY="your-volcengine-api-key"
# 或在 Windows 中:
set GEMINI_API_KEY=your-volcengine-api-key
```

### 直接提问模式

```bash
gemini "你好，请介绍一下自己"
```

### 交互模式

```bash
gemini
```

然后选择 "2. Use Gemini API Key" 并按回车即可开始对话。

## 🔧 配置

火山引擎相关配置已预置在代码中，包括：

- **API 端点**: `https://ark.cn-beijing.volces.com/api/v3`
- **模型**: `deepseek-v3-250324`
- **API 密钥**: 需要在源码中配置或通过环境变量设置

## 📋 与原版的差异

### 修改内容

1. **API 调用替换**: 将 Google Gemini API 调用替换为火山引擎 API 调用
2. **请求格式转换**: 实现了 Gemini 格式与火山引擎格式之间的转换
3. **响应格式适配**: 确保火山引擎的响应能够正确映射到 Gemini 格式

### 修改的文件

- `packages/core/src/core/contentGenerator.ts` - 替换 API 调用逻辑
- `packages/core/src/core/volcengineContentGenerator.ts` - 新增火山引擎适配器

## 📄 许可证合规

本项目基于 [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) 进行修改，遵循以下条款：

### 原始项目信息

- **原始项目**: Google Gemini CLI
- **原始版权**: Copyright 2025 Google LLC
- **原始许可证**: Apache License 2.0
- **原始仓库**: https://github.com/google-gemini/gemini-cli

### 修改声明

根据 Apache 2.0 许可证第 4 条的要求：

- ✅ 保留了原始的 Apache 2.0 许可证
- ✅ 保留了原始的版权声明
- ✅ 明确标注了修改内容
- ✅ 包含了完整的许可证文本

### 修改内容详述

本修改版本对以下文件进行了修改：

1. `packages/core/src/core/contentGenerator.ts` - 修改了内容生成器的创建逻辑
2. `packages/core/src/core/volcengineContentGenerator.ts` - 新增了火山引擎 API 适配器

所有修改都是为了将 API 调用从 Google Gemini 重定向到火山引擎 AI。

## 🔗 相关链接

- [原始项目 (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [火山引擎 AI](https://www.volcengine.com/products/ai)
- [Apache 2.0 许可证](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 问题报告

如果遇到问题，请在 [GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues) 中报告。

## 🤝 贡献

欢迎提交 Pull Request！请确保：

1. 遵循原项目的代码风格
2. 包含适当的测试
3. 更新相关文档

---

**免责声明**: 本项目与 Google 或火山引擎官方无关，仅为开源社区贡献。使用时请遵循相关服务的使用条款。
