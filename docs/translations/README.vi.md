# Gemini CLI - Phiên bản OpenRouter

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**🚀 Gemini CLI nâng cao với hỗ trợ OpenRouter - Truy cập 200+ mô hình AI thông qua một giao diện**

> ⚠️ **Thông báo quan trọng**: Đây là phiên bản đã chỉnh sửa của [Google Gemini CLI](https://github.com/google-gemini/gemini-cli). Bản quyền dự án gốc thuộc về Google LLC theo Giấy phép Apache 2.0.

## 🌟 Trạng thái dự án & phát triển tương lai

**Trạng thái hiện tại**: Dự án này hiện hỗ trợ một bộ sưu tập các mô hình hiệu suất cao được tuyển chọn thông qua tích hợp OpenRouter. Chúng tôi đang tích cực làm việc để mở rộng khả năng tương thích mô hình và nâng cao tính năng.

**Được cộng đồng thúc đẩy**: Sự hỗ trợ của bạn giúp chúng tôi phát triển! ⭐ Hãy đánh dấu sao cho repository này và cân nhắc đóng góp để giúp chúng tôi:
- Thêm hỗ trợ cho nhiều mô hình AI hơn
- Cải thiện hiệu suất và độ tin cậy
- Phát triển tính năng và tích hợp mới
- Duy trì tài liệu toàn diện

**Tham gia**: Có gợi ý hoặc muốn đóng góp? Liên hệ với chúng tôi tại **mythicscribe2014@gmail.com** - chúng tôi rất muốn nghe từ bạn!

**💖 Hỗ trợ sứ mệnh của chúng tôi**: Yêu thích dự án này? Hãy cân nhắc hỗ trợ phát triển của chúng tôi thông qua quyên góp! Đóng góp của bạn giúp chúng tôi:
- Duy trì và cải thiện codebase
- Thêm hỗ trợ cho nhiều mô hình AI hơn
- Nâng cao hiệu suất và độ tin cậy
- Giữ dự án miễn phí và mã nguồn mở

[![GitHub Sponsors](https://img.shields.io/badge/Tài%20trợ-❤-ff69b4)](https://github.com/sponsors/chameleon-nexus) [![PayPal](https://img.shields.io/badge/PayPal-Quyên%20góp-blue)](https://paypal.me/mythicscribe2014) [![Buy Me a Coffee](https://img.shields.io/badge/Mua%20cà%20phê%20cho%20tôi-Quyên%20góp-yellow)](https://buymeacoffee.com/mythicscribe2014)

## 🌐 Chuyển đổi ngôn ngữ

| 🇺🇸 [English](../README.md) | 🇻🇳 **Tiếng Việt** | 🇯🇵 [日本語](README.ja.md) | 🇩🇪 [Deutsch](README.de.md) | 🇸🇦 [العربية](README.ar.md) | 🇨🇳 [中文](README.zh.md) |

## 🌟 Tính năng cốt lõi

- 🎯 **Tích hợp OpenRouter**: Truy cập 200+ mô hình AI thông qua API thống nhất của OpenRouter
- 🔄 **Linh hoạt mô hình**: Chuyển đổi dễ dàng giữa GPT-4, Claude, Llama, Mistral và nhiều hơn nữa
- 🌍 **Bao phủ mô hình toàn cầu**: Hỗ trợ tất cả các mô hình AI chính từ OpenAI, Anthropic, Meta, Google và nhiều hơn nữa
- 🔧 **Cấu hình đơn giản**: Một API key cho tất cả các mô hình
- 📊 **Chức năng đầy đủ**: Streaming/không streaming, đếm token, gọi hàm đều được hỗ trợ
- 🚀 **Hiệu suất nâng cao**: Tối ưu hóa cho cơ sở hạ tầng hiệu suất cao của OpenRouter

## 📦 Cài đặt

### 🚀 Cài đặt nhanh (Khuyến nghị)

```bash
npm install -g @chameleon-nexus-tech/gemini-cli-openrouter
```

### 📋 Các phương thức cài đặt khác

```bash
# Sử dụng npm (Trình quản lý gói Node.js)
npm install -g @chameleon-nexus-tech/gemini-cli-openrouter

# Sử dụng yarn
yarn global add @chameleon-nexus-tech/gemini-cli-openrouter

# Sử dụng pnpm
pnpm add -g @chameleon-nexus-tech/gemini-cli-openrouter
```

## 🎛️ Tích hợp OpenRouter

### 🌐 OpenRouter - Cổng vào 200+ mô hình AI

OpenRouter cung cấp quyền truy cập vào các mô hình AI tiên tiến nhất thế giới thông qua một API thống nhất duy nhất. Gemini CLI nâng cao này tận dụng OpenRouter để cung cấp cho bạn quyền truy cập tức thì vào:

**🔥 Các mô hình phổ biến có sẵn:**
- `openai/gpt-4o` (mặc định) - Mô hình mạnh nhất của OpenAI
- `openai/gpt-4` - Mô hình hàng đầu của OpenAI
- `openai/gpt-4-turbo` - Biến thể GPT-4 nhanh hơn
- `anthropic/claude-3.5-sonnet` - Mô hình mạnh nhất của Anthropic
- `meta-llama/llama-3.1-8b-instruct` - Mô hình Llama mới nhất của Meta
- `meta-llama/llama-3.1-70b-instruct` - Llama mạnh nhất của Meta
- `mistralai/mistral-7b-instruct` - Mô hình hiệu quả của Mistral
- `mistralai/mixtral-8x7b-instruct` - Hỗn hợp chuyên gia của Mixtral
- `google/gemini-pro` - Mô hình Gemini của Google
- `google/gemini-pro-vision` - Mô hình đa phương thức của Google
- `cohere/command-r-plus` - Mô hình tiên tiến của Cohere
- `deepseek/deepseek-coder` - Mô hình mã hóa chuyên biệt
- Và 190+ mô hình khác từ các công ty AI hàng đầu!

**🎯 Tại sao chọn OpenRouter?**
- **Một API Key duy nhất**: Truy cập tất cả mô hình với một thông tin xác thực
- **Giá tốt nhất**: Tỷ lệ cạnh tranh trên tất cả các nhà cung cấp
- **Tính khả dụng cao**: 99,9% thời gian hoạt động với cơ sở hạ tầng toàn cầu
- **So sánh mô hình**: Chuyển đổi dễ dàng giữa các mô hình để kiểm tra
- **Tính năng doanh nghiệp**: Giới hạn tốc độ, phân tích sử dụng và nhiều hơn nữa

## ⚙️ Cấu hình

### 🔧 Các biến môi trường bắt buộc

Bạn chỉ cần đặt **4 biến môi trường** này để bắt đầu:

```bash
# 1. Đặt AI engine thành OpenRouter
export AI_ENGINE="openrouter"

# 2. Đặt OpenRouter API key của bạn (lấy từ https://openrouter.ai/keys)
export AI_API_KEY="your-openrouter-api-key"

# 3. Chọn mô hình ưa thích của bạn
export AI_MODEL="openai/gpt-4o"

# 4. Đặt bất kỳ giá trị nào để bỏ qua xác thực Gemini API
export GEMINI_API_KEY="any-value-here"
```

### 🪟 Cấu hình Windows PowerShell

```powershell
# Đặt 4 biến môi trường bắt buộc
$env:AI_ENGINE="openrouter"
$env:AI_API_KEY="your-openrouter-api-key"
$env:AI_MODEL="openai/gpt-4o"
$env:GEMINI_API_KEY="any-value-here"
```

### 🎯 Thiết lập nhanh

Thế thôi! 4 biến này là tất cả những gì bạn cần:
- `AI_ENGINE="openrouter"` - Báo cho hệ thống sử dụng OpenRouter
- `AI_API_KEY="your-key"` - OpenRouter API key của bạn
- `AI_MODEL="model-name"` - Mô hình AI bạn muốn sử dụng
- `GEMINI_API_KEY="anything"` - Đặt thành bất kỳ giá trị nào để bỏ qua xác thực

## 🚀 Sử dụng

### 💬 Chế độ câu hỏi trực tiếp

```bash
gemini "Xin chào, hãy giới thiệu bản thân"
```

### 🔄 Chế độ tương tác

```bash
gemini
```

Sau đó chọn "2. Use Gemini API Key" và nhấn Enter để bắt đầu trò chuyện.

## 🧪 Ví dụ kiểm tra mô hình

### 🌐 Kiểm tra với GPT-4o

```bash
# Đặt 4 biến môi trường bắt buộc
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

# Lệnh kiểm tra
gemini "Xin chào, hãy giới thiệu bản thân và cho tôi biết bạn là mô hình AI nào."
```

## 🏗️ Kiến trúc kỹ thuật

### 🎯 Kiến trúc tích hợp OpenRouter

Dự án này có **tích hợp OpenRouter chuyên biệt** cung cấp quyền truy cập liền mạch vào 200+ mô hình AI:

```
Tích hợp OpenRouter
├── OpenrouterContentGenerator    (Bộ chuyển đổi OpenRouter chính)
├── ContentGeneratorFactory       (Lựa chọn và quản lý engine)
├── Hệ thống thực thi công cụ      (Hỗ trợ gọi hàm)
└── Bộ xử lý phản hồi streaming    (Xử lý phản hồi thời gian thực)
```

### 🔧 Tính năng cốt lõi

✅ **Tích hợp OpenRouter**: Truy cập trực tiếp vào 200+ mô hình AI thông qua API thống nhất của OpenRouter  
✅ **Linh hoạt mô hình**: Chuyển đổi dễ dàng giữa các mô hình AI khác nhau với một biến môi trường duy nhất  
✅ **Chuyển đổi định dạng tự động**: Chuyển đổi liền mạch giữa định dạng Gemini và định dạng API OpenRouter  
✅ **Hỗ trợ phản hồi streaming**: Phản hồi streaming thời gian thực cho tất cả các mô hình được hỗ trợ  
✅ **Gọi hàm**: Hỗ trợ đầy đủ cho việc gọi công cụ/hàm trên tất cả các mô hình  
✅ **Xử lý lỗi thông minh**: Xử lý lỗi toàn diện với thông báo chi tiết  
✅ **Ưu tiên cấu hình**: Cấu hình cụ thể OpenRouter > Cấu hình thống nhất > Cấu hình mặc định  

### 📁 Cấu trúc tệp cốt lõi

```
packages/core/src/core/
├── contentGenerator.ts              # Định nghĩa giao diện ContentGenerator
├── contentGeneratorFactory.ts       # Nhà máy engine với ưu tiên OpenRouter
├── openrouterContentGenerator.ts    # Bộ chuyển đổi OpenRouter (chính)
├── coreToolScheduler.ts            # Thực thi công cụ và gọi hàm
└── [bộ chuyển đổi khác]             # Hỗ trợ engine bổ sung
```

### 🔄 Tích hợp API OpenRouter

**Luồng chuyển đổi yêu cầu**:
```
Yêu cầu Gemini → Bộ chuyển đổi OpenRouter → API OpenRouter → 200+ mô hình AI
```

**Luồng chuyển đổi phản hồi**:
```
Phản hồi mô hình AI → API OpenRouter → Bộ chuyển đổi OpenRouter → Định dạng phản hồi Gemini
```

**Tính năng OpenRouter được hỗ trợ**:
- **Lựa chọn mô hình**: Chuyển đổi dễ dàng giữa 200+ mô hình
- **Gọi hàm**: Hỗ trợ đầy đủ cho việc gọi công cụ/hàm
- **Streaming**: Streaming phản hồi thời gian thực
- **Đếm token**: Theo dõi sử dụng token tự động
- **Xử lý lỗi**: Quản lý lỗi toàn diện
- **Giới hạn tốc độ**: Giới hạn tốc độ tích hợp và logic thử lại

## 📋 Tuân thủ giấy phép

Dự án này dựa trên [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) và tuân theo các yêu cầu Giấy phép Apache 2.0:

### Thông tin dự án gốc

- **Dự án gốc**: Google Gemini CLI
- **Bản quyền gốc**: Copyright 2025 Google LLC  
- **Giấy phép gốc**: Apache License 2.0
- **Kho lưu trữ gốc**: https://github.com/google-gemini/gemini-cli

### Tuyên bố sửa đổi

Theo Điều 4 của Giấy phép Apache 2.0:

- ✅ Giữ nguyên giấy phép Apache 2.0 gốc
- ✅ Giữ nguyên thông báo bản quyền gốc
- ✅ Đánh dấu rõ ràng các sửa đổi
- ✅ Bao gồm toàn bộ văn bản giấy phép

## 🔄 Di chuyển từ Gemini CLI gốc

Nếu bạn đang di chuyển từ Google Gemini CLI gốc:

1. **Gỡ cài đặt phiên bản gốc**: `npm uninstall -g @google/gemini-cli`
2. **Cài đặt phiên bản này**: `npm install -g @chameleon-nexus-tech/gemini-cli`
3. **Lấy OpenRouter API key**: Đăng ký tại [OpenRouter](https://openrouter.ai/keys)
4. **Đặt 4 biến môi trường bắt buộc**:
```bash
   export AI_ENGINE="openrouter"
   export AI_API_KEY="your-openrouter-api-key"
   export AI_MODEL="openai/gpt-4o"
   export GEMINI_API_KEY="any-value-here"
   ```
5. **Sử dụng như trước**: Tất cả lệnh vẫn giữ nguyên, giờ có quyền truy cập vào 200+ mô hình!

## 🧪 Kiểm tra tích hợp OpenRouter

### 🚀 Script kiểm tra nhanh

Tạo script kiểm tra đơn giản để xác minh thiết lập OpenRouter của bạn:

```bash
#!/bin/bash
# test-openrouter.sh

# Đặt 4 biến môi trường bắt buộc
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

echo "Đang kiểm tra OpenRouter với GPT-4o..."
gemini "Xin chào, hãy giới thiệu bản thân và cho tôi biết bạn là mô hình AI nào."
```

### 🔧 Kiểm tra so sánh mô hình

Kiểm tra các mô hình khác nhau để so sánh phản hồi của chúng:

```bash
#!/bin/bash
# compare-models.sh

# Thiết lập cấu hình cơ sở (đặt một lần)
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export GEMINI_API_KEY="any-value-here"

# Kiểm tra GPT-4o
echo "=== Kiểm tra GPT-4o ==="
export AI_MODEL="openai/gpt-4o"
gemini "Viết một bài thơ haiku về trí tuệ nhân tạo."
```

## 🔗 Liên kết liên quan

- [Dự án gốc (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [OpenRouter](https://openrouter.ai/) - Truy cập 200+ mô hình AI
- [Tài liệu API OpenRouter](https://openrouter.ai/docs)
- [Danh sách mô hình OpenRouter](https://openrouter.ai/models)
- [Giấy phép Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 Báo cáo vấn đề

Nếu bạn gặp bất kỳ vấn đề nào, vui lòng báo cáo trên [GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues).

## 🤝 Đóng góp

Đóng góp được chào đón! Vui lòng đảm bảo:

1. Tuân theo phong cách code của dự án gốc
2. Bao gồm các kiểm tra thích hợp
3. Cập nhật tài liệu liên quan
4. Tôn trọng các điều khoản giấy phép Apache 2.0

## 🌟 Điểm nổi bật của dự án

- 🚀 **Tích hợp OpenRouter**: Truy cập trực tiếp vào 200+ mô hình AI thông qua một API
- 🎯 **Linh hoạt mô hình**: Chuyển đổi dễ dàng giữa GPT-4, Claude, Llama và nhiều hơn nữa
- 🔄 **Cấu hình đơn giản**: Một API key cho tất cả các mô hình
- 🌍 **Bao phủ toàn cầu**: Truy cập vào các mô hình từ OpenAI, Anthropic, Meta, Google và nhiều hơn nữa
- 📊 **Cấp doanh nghiệp**: Xử lý lỗi đầy đủ và quản lý cấu hình
- 🔧 **Gọi hàm**: Hỗ trợ đầy đủ cho việc gọi công cụ/hàm trên tất cả các mô hình

---

**Tuyên bố từ chối trách nhiệm**: Dự án này không liên kết với Google hoặc OpenRouter. Vui lòng tuân thủ các điều khoản dịch vụ của các nền tảng tương ứng khi sử dụng phần mềm này.