# Gemini CLI - OpenRouter版

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**🚀 OpenRouterサポート付きGemini CLI - 1つのインターフェースで200+のAIモデルにアクセス**

> ⚠️ **重要なお知らせ**: これは [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) の修正版です。元のプロジェクトの著作権はApache 2.0ライセンスの下でGoogle LLCに帰属します。

## 🌟 プロジェクト状況と今後の開発

**現在の状況**: このプロジェクトは現在、OpenRouter統合を通じて厳選された高性能モデルをサポートしています。モデル互換性の拡張と機能強化に積極的に取り組んでいます。

**コミュニティ主導**: あなたのサポートが私たちの成長を助けます！⭐ このリポジトリにスターを付けて、貢献を検討してください：
- より多くのAIモデルサポートの追加
- パフォーマンスと信頼性の向上
- 新機能と統合の開発
- 包括的なドキュメントの維持

**参加**: 提案や貢献をお考えですか？**mythicscribe2014@gmail.com** までご連絡ください - あなたの声をお聞かせください！

## 🌐 言語切り替え

| 🇺🇸 [English](../README.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇯🇵 **日本語** | 🇩🇪 [Deutsch](README.de.md) | 🇸🇦 [العربية](README.ar.md) | 🇨🇳 [中文](README.zh.md) |

## 🌟 コア機能

- 🎯 **OpenRouter統合**: OpenRouterの統一APIで200+のAIモデルにアクセス
- 🔄 **モデル柔軟性**: GPT-4、Claude、Llama、Mistralなど間で簡単に切り替え
- 🌍 **グローバルモデルカバレッジ**: OpenAI、Anthropic、Meta、Googleなどすべての主要AIモデルをサポート
- 🔧 **シンプルな設定**: すべてのモデルに単一のAPIキー
- 📊 **完全な機能**: ストリーミング/非ストリーミング、トークンカウント、関数呼び出しすべてサポート
- 🚀 **パフォーマンス向上**: OpenRouterの高性能インフラストラクチャに最適化

## 📦 インストール

### 🚀 クイックインストール (推奨)

```bash
npm install -g @chameleon-nexus-tech/gemini-cli-openrouter
```

### 📋 その他のインストール方法

```bash
# npmを使用 (Node.jsパッケージマネージャー)
npm install -g @chameleon-nexus-tech/gemini-cli-openrouter

# yarnを使用
yarn global add @chameleon-nexus-tech/gemini-cli-openrouter

# pnpmを使用
pnpm add -g @chameleon-nexus-tech/gemini-cli-openrouter
```

## 🎛️ OpenRouter統合

### 🌐 OpenRouter - 200+AIモデルへのゲートウェイ

OpenRouterは単一の統一APIを通じて世界最先端のAIモデルへのアクセスを提供します。この強化されたGemini CLIはOpenRouterを活用して、以下への即座のアクセスを提供します：

**🔥 利用可能な人気モデル:**
- `openai/gpt-4o` (デフォルト) - OpenAIの最も強力なモデル
- `openai/gpt-4` - OpenAIのフラッグシップモデル
- `openai/gpt-4-turbo` - より高速なGPT-4バリアント
- `anthropic/claude-3.5-sonnet` - Anthropicの最も能力の高いモデル
- `meta-llama/llama-3.1-8b-instruct` - Metaの最新Llamaモデル
- `meta-llama/llama-3.1-70b-instruct` - Metaの最も強力なLlama
- `mistralai/mistral-7b-instruct` - Mistralの効率的モデル
- `mistralai/mixtral-8x7b-instruct` - Mixtralの専門家混合モデル
- `google/gemini-pro` - GoogleのGeminiモデル
- `google/gemini-pro-vision` - Googleのマルチモーダルモデル
- `cohere/command-r-plus` - Cohereの先進モデル
- `deepseek/deepseek-coder` - 専門プログラミングモデル
- そして主要AI企業からの190+の追加モデル！

**🎯 なぜOpenRouter？**
- **単一APIキー**: 1つの認証情報ですべてのモデルにアクセス
- **最良の価格**: すべてのプロバイダーで競争力のある価格
- **高可用性**: グローバルインフラストラクチャで99.9%のアップタイム
- **モデル比較**: テスト用のモデル間の簡単な切り替え
- **エンタープライズ機能**: レート制限、使用分析など

## ⚙️ 設定

### 🔧 必要な環境変数

開始するには、この**4つの環境変数**を設定するだけです：

```bash
# 1. AIエンジンをOpenRouterに設定
export AI_ENGINE="openrouter"

# 2. OpenRouter APIキーを設定 (https://openrouter.ai/keys から取得)
export AI_API_KEY="your-openrouter-api-key"

# 3. お好みのモデルを選択
export AI_MODEL="openai/gpt-4o"

# 4. Gemini API検証をスキップする任意の値を設定
export GEMINI_API_KEY="any-value-here"
```

### 🪟 Windows PowerShell設定

```powershell
# 4つの必要な環境変数を設定
$env:AI_ENGINE="openrouter"
$env:AI_API_KEY="your-openrouter-api-key"
$env:AI_MODEL="openai/gpt-4o"
$env:GEMINI_API_KEY="any-value-here"
```

### 🎯 クイックセットアップ

それだけです！この4つの変数がすべてです：
- `AI_ENGINE="openrouter"` - システムにOpenRouterを使用するよう指示
- `AI_API_KEY="your-key"` - あなたのOpenRouter APIキー
- `AI_MODEL="model-name"` - 使用したいAIモデル
- `GEMINI_API_KEY="anything"` - 検証をスキップする任意の値に設定

## 🚀 使用方法

### 💬 直接質問モード

```bash
gemini "こんにちは、自己紹介してください"
```

### 🔄 インタラクティブモード

```bash
gemini
```

その後「2. Use Gemini API Key」を選択し、Enterを押してチャットを開始します。

## 🧪 モデルテスト例

### 🌐 GPT-4oでのテスト

```bash
# 4つの必要な環境変数を設定
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

# テストコマンド
gemini "こんにちは、自己紹介してどのAIモデルか教えてください。"
```

## 🏗️ 技術アーキテクチャ

### 🎯 OpenRouter統合アーキテクチャ

このプロジェクトは200+のAIモデルへのシームレスなアクセスを提供する**専用OpenRouter統合**を特徴とします：

```
OpenRouter統合
├── OpenrouterContentGenerator    (主要OpenRouterアダプター)
├── ContentGeneratorFactory       (エンジン選択と管理)
├── ツール実行システム            (関数呼び出しサポート)
└── ストリーミング応答ハンドラー    (リアルタイム応答処理)
```

### 🔧 コア機能

✅ **OpenRouter統合**: OpenRouterの統一APIを通じて200+のAIモデルに直接アクセス  
✅ **モデル柔軟性**: 単一の環境変数で異なるAIモデル間の簡単な切り替え  
✅ **自動フォーマット変換**: GeminiフォーマットとOpenRouter APIフォーマット間のシームレスな変換  
✅ **ストリーミング応答サポート**: すべてのサポートモデルのリアルタイムストリーミング応答  
✅ **関数呼び出し**: すべてのモデルでのツール/関数呼び出しの完全サポート  
✅ **インテリジェントエラーハンドリング**: 詳細なメッセージを含む包括的なエラーハンドリング  
✅ **設定優先順位**: OpenRouter固有設定 > 統一設定 > デフォルト設定  

### 📁 コアファイル構造

```
packages/core/src/core/
├── contentGenerator.ts              # ContentGeneratorインターフェース定義
├── contentGeneratorFactory.ts       # OpenRouter優先のエンジンファクトリー
├── openrouterContentGenerator.ts    # OpenRouterアダプター (主要)
├── coreToolScheduler.ts            # ツール実行と関数呼び出し
└── [その他のアダプター]               # 追加エンジンサポート
```

### 🔄 OpenRouter API統合

**リクエスト変換フロー**:
```
Geminiリクエスト → OpenRouterアダプター → OpenRouter API → 200+AIモデル
```

**応答変換フロー**:
```
AIモデル応答 → OpenRouter API → OpenRouterアダプター → Gemini応答フォーマット
```

**サポートされるOpenRouter機能**:
- **モデル選択**: 200+モデル間の簡単な切り替え
- **関数呼び出し**: 完全なツール/関数呼び出しサポート
- **ストリーミング**: リアルタイム応答ストリーミング
- **トークンカウント**: 自動トークン使用追跡
- **エラーハンドリング**: 包括的なエラー管理
- **レート制限**: 内蔵レート制限とリトライロジック

## 📋 ライセンス準拠

このプロジェクトは [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) に基づいており、Apache 2.0ライセンス要件に従います：

### 元のプロジェクト情報

- **元のプロジェクト**: Google Gemini CLI
- **元の著作権**: Copyright 2025 Google LLC  
- **元のライセンス**: Apache License 2.0
- **元のリポジトリ**: https://github.com/google-gemini/gemini-cli

### 修正声明

Apache 2.0ライセンス第4条に従って：

- ✅ 元のApache 2.0ライセンスを保持
- ✅ 元の著作権表示を保持
- ✅ 修正を明確にマーク
- ✅ 完全なライセンステキストを含める

## 🔄 元のGemini CLIからの移行

元のGoogle Gemini CLIから移行する場合：

1. **元のバージョンをアンインストール**: `npm uninstall -g @google/gemini-cli`
2. **このバージョンをインストール**: `npm install -g @chameleon-nexus-tech/gemini-cli`
3. **OpenRouter APIキーを取得**: [OpenRouter](https://openrouter.ai/keys) でサインアップ
4. **4つの必要な環境変数を設定**:
   ```bash
   export AI_ENGINE="openrouter"
   export AI_API_KEY="your-openrouter-api-key"
   export AI_MODEL="openai/gpt-4o"
   export GEMINI_API_KEY="any-value-here"
   ```
5. **以前と同様に使用**: すべてのコマンドは同じまま、今は200+モデルにアクセス可能！

## 🧪 OpenRouter統合のテスト

### 🚀 クイックテストスクリプト

OpenRouter設定を検証する簡単なテストスクリプトを作成：

```bash
#!/bin/bash
# test-openrouter.sh

# 4つの必要な環境変数を設定
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

echo "GPT-4oでOpenRouterをテスト中..."
gemini "こんにちは、自己紹介してどのAIモデルか教えてください。"
```

### 🔧 モデル比較テスト

異なるモデルをテストして応答を比較：

```bash
#!/bin/bash
# compare-models.sh

# ベース設定をセットアップ (一度だけ設定)
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export GEMINI_API_KEY="any-value-here"

# GPT-4oをテスト
echo "=== GPT-4oをテスト中 ==="
export AI_MODEL="openai/gpt-4o"
gemini "人工知能について俳句を書いてください。"
```

## 🔗 関連リンク

- [元のプロジェクト (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [OpenRouter](https://openrouter.ai/) - 200+AIモデルにアクセス
- [OpenRouter APIドキュメント](https://openrouter.ai/docs)
- [OpenRouterモデルリスト](https://openrouter.ai/models)
- [Apache 2.0ライセンス](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 問題報告

問題が発生した場合は、[GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues) で報告してください。

## 🤝 貢献

貢献を歓迎します！以下を確認してください：

1. 元のプロジェクトのコードスタイルに従う
2. 適切なテストを含める
3. 関連ドキュメントを更新する
4. Apache 2.0ライセンス条項を尊重する

## 🌟 プロジェクトハイライト

- 🚀 **OpenRouter統合**: 1つのAPIで200+AIモデルに直接アクセス
- 🎯 **モデル柔軟性**: GPT-4、Claude、Llamaなど間の簡単な切り替え
- 🔄 **シンプルな設定**: すべてのモデルに単一のAPIキー
- 🌍 **グローバルカバレッジ**: OpenAI、Anthropic、Meta、Googleなどからのモデルにアクセス
- 📊 **エンタープライズグレード**: 完全なエラーハンドリングと設定管理
- 🔧 **関数呼び出し**: すべてのモデルでのツール/関数呼び出しの完全サポート

---

**免責事項**: このプロジェクトはGoogleやOpenRouterとは関係ありません。このソフトウェアを使用する際は、それぞれのプラットフォームの利用規約に従ってください。