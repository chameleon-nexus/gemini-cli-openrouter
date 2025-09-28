# GLM函数调用功能说明

## 概述

GLM ContentGenerator 现在与官方设计保持一致，仅负责与 Zhipu GLM API 的交互：

- 自动转换 `request.config.tools` 为 GLM API 需要的格式；
- 将模型返回的函数调用信息转发给核心调度器；
- 不直接执行任何工具。

## 核心特性

### 🛠️ 请求端 - 工具声明
- 自动转换 `request.config.tools` 到 GLM API 格式
- 增强工具描述，明确告知模型这些是可执行工具
- 支持完整的工具参数验证和类型定义

### 🎯 响应端 - 工具执行
- 自动识别并解析 GLM 返回的函数调用指令
- 将函数调用作为 `functionCall` part 返回给上层
- 工具的实际执行由 `CoreToolScheduler` 统一负责

### 🔄 流式支持
- 流式模式下累积完整的函数调用信息
- 在流结束时返回全部函数调用，交给上层执行

### 🛡️ 安全机制
- 保留对函数调用参数的基本解析校验
- 其他安全策略由核心调度器统一处理

## 使用方法

### 1. 发起带工具的请求

```typescript
const response = await generator.generateContent({
  contents: [{
    role: 'user',
    parts: [{ text: '请帮我创建一个hello.txt文件，内容是"Hello World"' }]
  }],
  config: {
    tools,
    temperature: 0.1
  }
}, 'user-prompt-id');

// response.functionCalls 包含模型返回的函数调用
// CoreToolScheduler 会根据这些调用执行工具并返回结果
```

### 5. 流式处理

```typescript
const streamGenerator = generator.generateContentStream({
  contents: [{ role: 'user', parts: [{ text: '获取当前时间' }] }],
  config: { tools }
}, 'stream-id');

for await (const chunk of streamGenerator) {
  if (chunk.text) {
    console.log('文本:', chunk.text);
  }
  if (chunk.functionCalls) {
    console.log('工具调用:', chunk.functionCalls.length);
  }
}
```

## 工作流程

### 标准模式流程
1. **请求发送**：将工具定义转换为 GLM 格式并发送
2. **AI 决策**：GLM 模型决定是否需要调用工具
3. **函数调用返回**：模型返回函数调用，`GlmContentGenerator` 将其作为 `functionCall` part 返回
4. **工具执行**：`CoreToolScheduler` 根据函数调用执行工具并将结果追加到对话中

### 流式模式流程
1. **流式响应**：接收 GLM 的流式输出
2. **工具累积**：累积完整的工具调用数据
3. **调用返回**：流结束后返回函数调用列表
4. **工具执行**：由上层调度器执行工具并处理结果

## 安全特性

### 函数名验证
- 只允许字母、数字、下划线
- 长度限制（最大100字符）
- 禁止空或无效函数名

### 参数安全
- 参数类型检查（必须为对象）
- 嵌套深度限制（最大10层）
- 参数大小限制（最大1MB）
- 危险属性过滤（`__proto__`, `constructor`, `prototype`）

### 执行控制
- 30秒执行超时
- 详细错误记录
- 异常安全处理

## 错误处理

所有工具执行都会返回标准化的结果格式：

```typescript
type ToolExecutionResult = {
  success: boolean;
  result?: any;      // 成功时的结果
  error?: string;    // 失败时的错误信息
};
```

## 日志输出

系统会输出详细的执行日志：

```
🧠 Zhipu AI GLM ContentGenerator: Initialized successfully
   Available Tools: 2 functions
   - write_file, get_time

🔧 GLM工具转换完成: 已准备 2 个可执行工具
   - write_file: 写入内容到指定文件 [可执行工具 - 我会实际调用此功能]

🔧 GLM返回了 1 个工具调用
📋 工具调用: write_file { filename: "hello.txt", content: "Hello World" }

🚀 开始执行工具调用...
🔧 执行工具调用: write_file { filename: "hello.txt", content: "Hello World" }
✅ 工具 "write_file" 执行成功: { success: true, message: "文件 hello.txt 写入成功" }
✅ 工具执行完成
```

## 示例代码

查看 `src/examples/glm-function-calling-example.ts` 获取完整的使用示例。

## 注意事项

1. `GlmContentGenerator` 不再执行工具；必须在上层集成 `CoreToolScheduler`。
2. 仍需在请求中提供 `config.tools` 来声明可用工具。
3. 流式模式下工具调用在流结束后返回，由调度器执行。
4. 如需示例工具执行器，可参考 `CoreToolScheduler` 及相关文档。

## 兼容性

- 完全向后兼容，不影响现有的非工具调用用法
- 支持 GLM-4 及更高版本的所有模型
- 兼容原有的 Google GenAI 接口规范


