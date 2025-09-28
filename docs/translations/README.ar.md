# Gemini CLI - إصدار OpenRouter

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**🚀 Gemini CLI محسن مع دعم OpenRouter - الوصول إلى 200+ نموذج ذكي من خلال واجهة واحدة**

> ⚠️ **إشعار مهم**: هذا إصدار معدل من [Google Gemini CLI](https://github.com/google-gemini/gemini-cli). حقوق الطبع والنشر للمشروع الأصلي تعود إلى Google LLC تحت رخصة Apache 2.0.

## 🌐 تبديل اللغة

| 🇺🇸 [English](../README.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇯🇵 [日本語](README.ja.md) | 🇩🇪 [Deutsch](README.de.md) | 🇸🇦 **العربية** | 🇨🇳 [中文](README.zh.md) |

## 🌟 الميزات الأساسية

- 🎯 **تكامل OpenRouter**: الوصول إلى 200+ نموذج ذكي من خلال API موحد لـ OpenRouter
- 🔄 **مرونة النماذج**: التبديل السهل بين GPT-4، Claude، Llama، Mistral والمزيد
- 🌍 **تغطية النماذج العالمية**: دعم جميع النماذج الذكية الرئيسية من OpenAI، Anthropic، Meta، Google والمزيد
- 🔧 **إعداد بسيط**: مفتاح API واحد لجميع النماذج
- 📊 **وظائف كاملة**: دعم البث/غير البث، عد الرموز، استدعاء الوظائف
- 🚀 **أداء محسن**: محسن للبنية التحتية عالية الأداء لـ OpenRouter

## 📦 التثبيت

```bash
npm install -g @chameleon-nexus-tech/gemini-cli
```

## 🎛️ تكامل OpenRouter

### 🌐 OpenRouter - بوابتك إلى 200+ نموذج ذكي

يوفر OpenRouter الوصول إلى أحدث النماذج الذكية في العالم من خلال API موحد واحد. يستفيد هذا Gemini CLI المحسن من OpenRouter لإعطائك وصول فوري إلى:

**🔥 النماذج الشائعة المتاحة:**
- `openai/gpt-4o` (افتراضي) - أقوى نموذج لـ OpenAI
- `openai/gpt-4` - النموذج الرئيسي لـ OpenAI
- `openai/gpt-4-turbo` - متغير GPT-4 أسرع
- `anthropic/claude-3.5-sonnet` - أقوى نموذج لـ Anthropic
- `meta-llama/llama-3.1-8b-instruct` - أحدث نموذج Llama من Meta
- `meta-llama/llama-3.1-70b-instruct` - أقوى Llama من Meta
- `mistralai/mistral-7b-instruct` - نموذج Mistral الفعال
- `mistralai/mixtral-8x7b-instruct` - خليط الخبراء من Mixtral
- `google/gemini-pro` - نموذج Gemini من Google
- `google/gemini-pro-vision` - النموذج متعدد الوسائط من Google
- `cohere/command-r-plus` - النموذج المتقدم من Cohere
- `deepseek/deepseek-coder` - نموذج البرمجة المتخصص
- و190+ نموذج إضافي من شركات الذكاء الاصطناعي الرائدة!

**🎯 لماذا OpenRouter؟**
- **مفتاح API واحد**: الوصول إلى جميع النماذج بمعلومات اعتماد واحدة
- **أفضل الأسعار**: أسعار تنافسية عبر جميع المزودين
- **توفر عالي**: 99.9% وقت التشغيل مع البنية التحتية العالمية
- **مقارنة النماذج**: التبديل السهل بين النماذج للاختبار
- **ميزات المؤسسات**: تحديد معدل، تحليلات الاستخدام والمزيد

## ⚙️ الإعداد

### 🔧 متغيرات البيئة المطلوبة

تحتاج فقط إلى تعيين **4 متغيرات بيئة** للبدء:

```bash
# 1. تعيين محرك الذكاء الاصطناعي إلى OpenRouter
export AI_ENGINE="openrouter"

# 2. تعيين مفتاح OpenRouter API الخاص بك (احصل عليه من https://openrouter.ai/keys)
export AI_API_KEY="your-openrouter-api-key"

# 3. اختر النموذج المفضل لديك
export AI_MODEL="openai/gpt-4o"

# 4. تعيين أي قيمة لتخطي التحقق من Gemini API
export GEMINI_API_KEY="any-value-here"
```

### 🪟 إعداد Windows PowerShell

```powershell
# تعيين 4 متغيرات البيئة المطلوبة
$env:AI_ENGINE="openrouter"
$env:AI_API_KEY="your-openrouter-api-key"
$env:AI_MODEL="openai/gpt-4o"
$env:GEMINI_API_KEY="any-value-here"
```

### 🎯 الإعداد السريع

هذا كل شيء! هذه المتغيرات الأربعة هي كل ما تحتاجه:
- `AI_ENGINE="openrouter"` - يخبر النظام باستخدام OpenRouter
- `AI_API_KEY="your-key"` - مفتاح OpenRouter API الخاص بك
- `AI_MODEL="model-name"` - نموذج الذكاء الاصطناعي الذي تريد استخدامه
- `GEMINI_API_KEY="anything"` - تعيين إلى أي قيمة لتخطي التحقق

## 🚀 الاستخدام

### 💬 وضع السؤال المباشر

```bash
gemini "مرحبا، يرجى تقديم نفسك"
```

### 🔄 الوضع التفاعلي

```bash
gemini
```

ثم اختر "2. Use Gemini API Key" واضغط Enter لبدء المحادثة.

## 🧪 أمثلة اختبار النماذج

### 🌐 الاختبار مع GPT-4o

```bash
# تعيين 4 متغيرات البيئة المطلوبة
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

# أمر الاختبار
gemini "مرحبا، يرجى تقديم نفسك وإخباري أي نموذج ذكاء اصطناعي أنت."
```

## 🏗️ البنية التقنية

### 🎯 بنية تكامل OpenRouter

يتميز هذا المشروع بـ **تكامل OpenRouter متخصص** يوفر وصولاً سلساً إلى 200+ نموذج ذكي:

```
تكامل OpenRouter
├── OpenrouterContentGenerator    (محول OpenRouter الأساسي)
├── ContentGeneratorFactory       (اختيار وإدارة المحرك)
├── نظام تنفيذ الأدوات            (دعم استدعاء الوظائف)
└── معالج الاستجابة المتدفقة      (معالجة الاستجابة في الوقت الفعلي)
```

### 🔧 الميزات الأساسية

✅ **تكامل OpenRouter**: الوصول المباشر إلى 200+ نموذج ذكي من خلال API موحد لـ OpenRouter  
✅ **مرونة النماذج**: التبديل السهل بين نماذج الذكاء الاصطناعي المختلفة بمتغير بيئة واحد  
✅ **تحويل التنسيق التلقائي**: تحويل سلس بين تنسيق Gemini وتنسيق API OpenRouter  
✅ **دعم الاستجابة المتدفقة**: استجابات متدفقة في الوقت الفعلي لجميع النماذج المدعومة  
✅ **استدعاء الوظائف**: دعم كامل لاستدعاء الأدوات/الوظائف عبر جميع النماذج  
✅ **معالجة الأخطاء الذكية**: معالجة شاملة للأخطاء مع رسائل مفصلة  
✅ **أولوية الإعداد**: إعداد محدد لـ OpenRouter > إعداد موحد > إعداد افتراضي  

### 📁 هيكل الملفات الأساسي

```
packages/core/src/core/
├── contentGenerator.ts              # تعريف واجهة ContentGenerator
├── contentGeneratorFactory.ts       # مصنع المحرك مع أولوية OpenRouter
├── openrouterContentGenerator.ts    # محول OpenRouter (أساسي)
├── coreToolScheduler.ts            # تنفيذ الأدوات واستدعاء الوظائف
└── [محولات أخرى]                   # دعم محرك إضافي
```

### 🔄 تكامل API OpenRouter

**تدفق تحويل الطلب**:
```
طلب Gemini → محول OpenRouter → API OpenRouter → 200+ نماذج ذكية
```

**تدفق تحويل الاستجابة**:
```
استجابة نموذج الذكاء الاصطناعي → API OpenRouter → محول OpenRouter → تنسيق استجابة Gemini
```

**ميزات OpenRouter المدعومة**:
- **اختيار النموذج**: التبديل السهل بين 200+ نموذج
- **استدعاء الوظائف**: دعم كامل لاستدعاء الأدوات/الوظائف
- **البث**: بث الاستجابة في الوقت الفعلي
- **عد الرموز**: تتبع استخدام الرموز التلقائي
- **معالجة الأخطاء**: إدارة شاملة للأخطاء
- **تحديد المعدل**: تحديد معدل مدمج ومنطق إعادة المحاولة

## 📋 الامتثال للترخيص

هذا المشروع مبني على [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) ويتبع متطلبات رخصة Apache 2.0:

### معلومات المشروع الأصلي

- **المشروع الأصلي**: Google Gemini CLI
- **حقوق الطبع والنشر الأصلية**: Copyright 2025 Google LLC  
- **الترخيص الأصلي**: Apache License 2.0
- **المستودع الأصلي**: https://github.com/google-gemini/gemini-cli

### بيان التعديل

وفقاً للقسم 4 من رخصة Apache 2.0:

- ✅ الاحتفاظ برخصة Apache 2.0 الأصلية
- ✅ الاحتفاظ بإشعارات حقوق الطبع والنشر الأصلية
- ✅ تمييز التعديلات بوضوح
- ✅ تضمين نص الترخيص الكامل

## 🔄 الهجرة من Gemini CLI الأصلي

إذا كنت تنتقل من Google Gemini CLI الأصلي:

1. **إلغاء تثبيت الإصدار الأصلي**: `npm uninstall -g @google/gemini-cli`
2. **تثبيت هذا الإصدار**: `npm install -g @chameleon-nexus-tech/gemini-cli`
3. **الحصول على مفتاح OpenRouter API**: سجل في [OpenRouter](https://openrouter.ai/keys)
4. **تعيين 4 متغيرات البيئة المطلوبة**:
   ```bash
   export AI_ENGINE="openrouter"
   export AI_API_KEY="your-openrouter-api-key"
   export AI_MODEL="openai/gpt-4o"
   export GEMINI_API_KEY="any-value-here"
   ```
5. **استخدم كما كان من قبل**: جميع الأوامر تبقى كما هي، الآن مع الوصول إلى 200+ نموذج!

## 🧪 اختبار تكامل OpenRouter

### 🚀 سكريبت اختبار سريع

أنشئ سكريبت اختبار بسيط للتحقق من إعداد OpenRouter الخاص بك:

```bash
#!/bin/bash
# test-openrouter.sh

# تعيين 4 متغيرات البيئة المطلوبة
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

echo "اختبار OpenRouter مع GPT-4o..."
gemini "مرحبا، يرجى تقديم نفسك وإخباري أي نموذج ذكاء اصطناعي أنت."
```

### 🔧 اختبار مقارنة النماذج

اختبر نماذج مختلفة لمقارنة استجاباتها:

```bash
#!/bin/bash
# compare-models.sh

# إعداد التكوين الأساسي (تعيين مرة واحدة)
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export GEMINI_API_KEY="any-value-here"

# اختبار GPT-4o
echo "=== اختبار GPT-4o ==="
export AI_MODEL="openai/gpt-4o"
gemini "اكتب قصيدة هايكو عن الذكاء الاصطناعي."
```

## 🔗 الروابط ذات الصلة

- [المشروع الأصلي (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [OpenRouter](https://openrouter.ai/) - الوصول إلى 200+ نموذج ذكي
- [وثائق API OpenRouter](https://openrouter.ai/docs)
- [قائمة نماذج OpenRouter](https://openrouter.ai/models)
- [رخصة Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 الإبلاغ عن المشاكل

إذا واجهت أي مشاكل، يرجى الإبلاغ عنها في [GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues).

## 🤝 المساهمة

المساهمات مرحب بها! يرجى التأكد من:

1. اتباع أسلوب الكود للمشروع الأصلي
2. تضمين الاختبارات المناسبة
3. تحديث الوثائق ذات الصلة
4. احترام شروط رخصة Apache 2.0

## 🌟 أبرز المشروع

- 🚀 **تكامل OpenRouter**: الوصول المباشر إلى 200+ نموذج ذكي من خلال API واحد
- 🎯 **مرونة النماذج**: التبديل السهل بين GPT-4، Claude، Llama والمزيد
- 🔄 **إعداد بسيط**: مفتاح API واحد لجميع النماذج
- 🌍 **التغطية العالمية**: الوصول إلى النماذج من OpenAI، Anthropic، Meta، Google والمزيد
- 📊 **مستوى المؤسسات**: معالجة أخطاء كاملة وإدارة التكوين
- 🔧 **استدعاء الوظائف**: دعم كامل لاستدعاء الأدوات/الوظائف عبر جميع النماذج

---

**إخلاء المسؤولية**: هذا المشروع غير مرتبط بـ Google أو OpenRouter. يرجى الامتثال لشروط الخدمة للأنظمة الأساسية المعنية عند استخدام هذا البرنامج.