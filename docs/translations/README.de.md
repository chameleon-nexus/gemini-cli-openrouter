# Gemini CLI - OpenRouter Edition

[![npm version](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli.svg)](https://badge.fury.io/js/%40chameleon-nexus-tech%2Fgemini-cli)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

**🚀 Erweiterte Gemini CLI mit OpenRouter-Unterstützung - Zugriff auf 200+ KI-Modelle über eine Schnittstelle**

> ⚠️ **Wichtiger Hinweis**: Dies ist eine modifizierte Version von [Google Gemini CLI](https://github.com/google-gemini/gemini-cli). Das Urheberrecht des ursprünglichen Projekts gehört Google LLC unter Apache 2.0 Lizenz.

## 🌟 Projektstatus & zukünftige Entwicklung

**Aktueller Status**: Dieses Projekt unterstützt derzeit eine kuratierte Auswahl hochperformanter Modelle durch OpenRouter-Integration. Wir arbeiten aktiv daran, die Modellkompatibilität zu erweitern und Funktionen zu verbessern.

**Community-getrieben**: Ihre Unterstützung hilft uns beim Wachstum! ⭐ Vergeben Sie einen Stern an dieses Repository und erwägen Sie einen Beitrag, um uns zu helfen:
- Unterstützung für mehr KI-Modelle hinzufügen
- Leistung und Zuverlässigkeit verbessern
- Neue Funktionen und Integrationen entwickeln
- Umfassende Dokumentation pflegen

**Mitmachen**: Haben Sie Vorschläge oder möchten Sie beitragen? Kontaktieren Sie uns unter **mythicscribe2014@gmail.com** - wir freuen uns auf Ihre Nachricht!

## 🌐 Sprachwechsel

| 🇺🇸 [English](../README.md) | 🇻🇳 [Tiếng Việt](README.vi.md) | 🇯🇵 [日本語](README.ja.md) | 🇩🇪 **Deutsch** | 🇸🇦 [العربية](README.ar.md) | 🇨🇳 [中文](README.zh.md) |

## 🌟 Kernfunktionen

- 🎯 **OpenRouter-Integration**: Zugriff auf 200+ KI-Modelle über OpenRouters einheitliche API
- 🔄 **Modell-Flexibilität**: Einfacher Wechsel zwischen GPT-4, Claude, Llama, Mistral und vielen mehr
- 🌍 **Globale Modell-Abdeckung**: Unterstützt alle wichtigen KI-Modelle von OpenAI, Anthropic, Meta, Google und mehr
- 🔧 **Einfache Konfiguration**: Ein API-Schlüssel für alle Modelle
- 📊 **Vollständige Funktionalität**: Streaming/Non-Streaming, Token-Zählung, Funktionsaufrufe alle unterstützt
- 🚀 **Verbesserte Leistung**: Optimiert für OpenRouters hochperformante Infrastruktur

## 📦 Installation

### 🚀 Schnelle Installation (Empfohlen)

```bash
npm install -g @chameleon-nexus-tech/gemini-cli-openrouter
```

### 📋 Alternative Installationsmethoden

```bash
# Mit npm (Node.js Paketmanager)
npm install -g @chameleon-nexus-tech/gemini-cli-openrouter

# Mit yarn
yarn global add @chameleon-nexus-tech/gemini-cli-openrouter

# Mit pnpm
pnpm add -g @chameleon-nexus-tech/gemini-cli-openrouter
```

## 🎛️ OpenRouter-Integration

### 🌐 OpenRouter - Ihr Gateway zu 200+ KI-Modellen

OpenRouter bietet Zugriff auf die weltweit fortschrittlichsten KI-Modelle über eine einzige, einheitliche API. Diese erweiterte Gemini CLI nutzt OpenRouter, um Ihnen sofortigen Zugriff zu geben auf:

**🔥 Beliebte verfügbare Modelle:**
- `openai/gpt-4o` (Standard) - OpenAIs leistungsstärkstes Modell
- `openai/gpt-4` - OpenAIs Flaggschiff-Modell
- `openai/gpt-4-turbo` - Schnellere GPT-4-Variante
- `anthropic/claude-3.5-sonnet` - Anthropics leistungsstärkstes Modell
- `meta-llama/llama-3.1-8b-instruct` - Metas neuestes Llama-Modell
- `meta-llama/llama-3.1-70b-instruct` - Metas leistungsstärkstes Llama
- `mistralai/mistral-7b-instruct` - Mistrals effizientes Modell
- `mistralai/mixtral-8x7b-instruct` - Mixtrals Mixture of Experts
- `google/gemini-pro` - Googles Gemini-Modell
- `google/gemini-pro-vision` - Googles multimodales Modell
- `cohere/command-r-plus` - Coheres fortschrittliches Modell
- `deepseek/deepseek-coder` - Spezialisiertes Codierungsmodell
- Und 190+ weitere Modelle von führenden KI-Unternehmen!

**🎯 Warum OpenRouter?**
- **Einzelner API-Schlüssel**: Zugriff auf alle Modelle mit einer Anmeldedaten
- **Beste Preise**: Wettbewerbsfähige Preise bei allen Anbietern
- **Hohe Verfügbarkeit**: 99,9% Uptime mit globaler Infrastruktur
- **Modell-Vergleich**: Einfacher Wechsel zwischen Modellen zum Testen
- **Enterprise-Features**: Rate-Limiting, Nutzungsanalysen und mehr

## ⚙️ Konfiguration

### 🔧 Erforderliche Umgebungsvariablen

Sie müssen nur diese **4 Umgebungsvariablen** setzen, um zu beginnen:

```bash
# 1. KI-Engine auf OpenRouter setzen
export AI_ENGINE="openrouter"

# 2. Ihren OpenRouter API-Schlüssel setzen (von https://openrouter.ai/keys erhalten)
export AI_API_KEY="your-openrouter-api-key"

# 3. Ihr bevorzugtes Modell wählen
export AI_MODEL="openai/gpt-4o"

# 4. Beliebigen Wert setzen, um Gemini API-Validierung zu überspringen
export GEMINI_API_KEY="any-value-here"
```

### 🪟 Windows PowerShell-Konfiguration

```powershell
# Die 4 erforderlichen Umgebungsvariablen setzen
$env:AI_ENGINE="openrouter"
$env:AI_API_KEY="your-openrouter-api-key"
$env:AI_MODEL="openai/gpt-4o"
$env:GEMINI_API_KEY="any-value-here"
```

### 🎯 Schnelle Einrichtung

Das war's! Diese 4 Variablen sind alles, was Sie brauchen:
- `AI_ENGINE="openrouter"` - Teilt dem System mit, OpenRouter zu verwenden
- `AI_API_KEY="your-key"` - Ihr OpenRouter API-Schlüssel
- `AI_MODEL="model-name"` - Das KI-Modell, das Sie verwenden möchten
- `GEMINI_API_KEY="anything"` - Auf beliebigen Wert setzen, um Validierung zu überspringen

## 🚀 Verwendung

### 💬 Direkter Frage-Modus

```bash
gemini "Hallo, bitte stellen Sie sich vor"
```

### 🔄 Interaktiver Modus

```bash
gemini
```

Dann wählen Sie "2. Use Gemini API Key" und drücken Enter, um mit dem Chatten zu beginnen.

## 🧪 Modell-Testbeispiele

### 🌐 Testen mit GPT-4o

```bash
# Die 4 erforderlichen Umgebungsvariablen setzen
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

# Test-Befehl
gemini "Hallo, bitte stellen Sie sich vor und sagen Sie mir, welches KI-Modell Sie sind."
```

## 🏗️ Technische Architektur

### 🎯 OpenRouter-Integrationsarchitektur

Dieses Projekt verfügt über eine **spezialisierte OpenRouter-Integration**, die nahtlosen Zugriff auf 200+ KI-Modelle bietet:

```
OpenRouter-Integration
├── OpenrouterContentGenerator    (Primärer OpenRouter-Adapter)
├── ContentGeneratorFactory       (Engine-Auswahl und -verwaltung)
├── Tool-Ausführungssystem        (Funktionsaufruf-Unterstützung)
└── Streaming-Antwort-Handler      (Echtzeit-Antwortverarbeitung)
```

### 🔧 Kernfunktionen

✅ **OpenRouter-Integration**: Direkter Zugriff auf 200+ KI-Modelle über OpenRouters einheitliche API  
✅ **Modell-Flexibilität**: Einfacher Wechsel zwischen verschiedenen KI-Modellen mit einer einzigen Umgebungsvariable  
✅ **Automatische Formatkonvertierung**: Nahtlose Konvertierung zwischen Gemini-Format und OpenRouter API-Format  
✅ **Streaming-Antwort-Unterstützung**: Echtzeit-Streaming-Antworten für alle unterstützten Modelle  
✅ **Funktionsaufrufe**: Vollständige Unterstützung für Tool-/Funktionsaufrufe über alle Modelle  
✅ **Intelligente Fehlerbehandlung**: Umfassende Fehlerbehandlung mit detaillierten Nachrichten  
✅ **Konfigurationspriorität**: OpenRouter-spezifische Konfiguration > Einheitliche Konfiguration > Standardkonfiguration  

### 📁 Kern-Dateistruktur

```
packages/core/src/core/
├── contentGenerator.ts              # ContentGenerator-Interface-Definition
├── contentGeneratorFactory.ts       # Engine-Factory mit OpenRouter-Priorität
├── openrouterContentGenerator.ts    # OpenRouter-Adapter (primär)
├── coreToolScheduler.ts            # Tool-Ausführung und Funktionsaufrufe
└── [andere Adapter]                 # Zusätzliche Engine-Unterstützung
```

### 🔄 OpenRouter API-Integration

**Anfrage-Konvertierungsfluss**:
```
Gemini-Anfrage → OpenRouter-Adapter → OpenRouter API → 200+ KI-Modelle
```

**Antwort-Konvertierungsfluss**:
```
KI-Modell-Antwort → OpenRouter API → OpenRouter-Adapter → Gemini-Antwortformat
```

**Unterstützte OpenRouter-Funktionen**:
- **Modellauswahl**: Einfacher Wechsel zwischen 200+ Modellen
- **Funktionsaufrufe**: Vollständige Tool-/Funktionsaufruf-Unterstützung
- **Streaming**: Echtzeit-Antwort-Streaming
- **Token-Zählung**: Automatische Token-Nutzungsverfolgung
- **Fehlerbehandlung**: Umfassende Fehlerverwaltung
- **Rate-Limiting**: Eingebaute Rate-Limiting und Wiederholungslogik

## 📋 Lizenz-Compliance

Dieses Projekt basiert auf [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) und folgt den Apache 2.0 Lizenz-Anforderungen:

### Ursprüngliche Projektinformationen

- **Ursprüngliches Projekt**: Google Gemini CLI
- **Ursprüngliches Urheberrecht**: Copyright 2025 Google LLC  
- **Ursprüngliche Lizenz**: Apache License 2.0
- **Ursprüngliches Repository**: https://github.com/google-gemini/gemini-cli

### Änderungsaussage

In Übereinstimmung mit Apache 2.0 Lizenz Abschnitt 4:

- ✅ Ursprüngliche Apache 2.0 Lizenz beibehalten
- ✅ Ursprüngliche Urheberrechtshinweise beibehalten
- ✅ Änderungen klar markiert
- ✅ Vollständigen Lizenztext eingefügt

## 🔄 Migration von der ursprünglichen Gemini CLI

Wenn Sie von der ursprünglichen Google Gemini CLI migrieren:

1. **Ursprüngliche Version deinstallieren**: `npm uninstall -g @google/gemini-cli`
2. **Diese Version installieren**: `npm install -g @chameleon-nexus-tech/gemini-cli`
3. **OpenRouter API-Schlüssel erhalten**: Bei [OpenRouter](https://openrouter.ai/keys) anmelden
4. **Die 4 erforderlichen Umgebungsvariablen setzen**:
```bash
   export AI_ENGINE="openrouter"
   export AI_API_KEY="your-openrouter-api-key"
   export AI_MODEL="openai/gpt-4o"
   export GEMINI_API_KEY="any-value-here"
   ```
5. **Wie zuvor verwenden**: Alle Befehle bleiben gleich, jetzt mit Zugriff auf 200+ Modelle!

## 🧪 OpenRouter-Integration testen

### 🚀 Schnelles Test-Skript

Erstellen Sie ein einfaches Test-Skript, um Ihre OpenRouter-Einrichtung zu überprüfen:

```bash
#!/bin/bash
# test-openrouter.sh

# Die 4 erforderlichen Umgebungsvariablen setzen
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export AI_MODEL="openai/gpt-4o"
export GEMINI_API_KEY="any-value-here"

echo "OpenRouter mit GPT-4o testen..."
gemini "Hallo, bitte stellen Sie sich vor und sagen Sie mir, welches KI-Modell Sie sind."
```

### 🔧 Modell-Vergleichstest

Testen Sie verschiedene Modelle, um ihre Antworten zu vergleichen:

```bash
#!/bin/bash
# compare-models.sh

# Basis-Konfiguration einrichten (einmal setzen)
export AI_ENGINE="openrouter"
export AI_API_KEY="your-openrouter-api-key"
export GEMINI_API_KEY="any-value-here"

# GPT-4o testen
echo "=== GPT-4o testen ==="
export AI_MODEL="openai/gpt-4o"
gemini "Schreiben Sie ein Haiku über künstliche Intelligenz."
```

## 🔗 Verwandte Links

- [Ursprüngliches Projekt (Google Gemini CLI)](https://github.com/google-gemini/gemini-cli)
- [OpenRouter](https://openrouter.ai/) - Zugriff auf 200+ KI-Modelle
- [OpenRouter API-Dokumentation](https://openrouter.ai/docs)
- [OpenRouter-Modellliste](https://openrouter.ai/models)
- [Apache 2.0 Lizenz](https://www.apache.org/licenses/LICENSE-2.0)

## 🐛 Problemberichterstattung

Wenn Sie Probleme haben, melden Sie diese bitte bei [GitHub Issues](https://github.com/chameleon-nexus/gemini-cli/issues).

## 🤝 Beitragen

Beiträge sind willkommen! Bitte stellen Sie sicher:

1. Dem Code-Stil des ursprünglichen Projekts folgen
2. Angemessene Tests einschließen
3. Relevante Dokumentation aktualisieren
4. Apache 2.0 Lizenz-Bedingungen respektieren

## 🌟 Projekt-Highlights

- 🚀 **OpenRouter-Integration**: Direkter Zugriff auf 200+ KI-Modelle über eine API
- 🎯 **Modell-Flexibilität**: Einfacher Wechsel zwischen GPT-4, Claude, Llama und mehr
- 🔄 **Einfache Konfiguration**: Ein API-Schlüssel für alle Modelle
- 🌍 **Globale Abdeckung**: Zugriff auf Modelle von OpenAI, Anthropic, Meta, Google und mehr
- 📊 **Enterprise-Grade**: Vollständige Fehlerbehandlung und Konfigurationsverwaltung
- 🔧 **Funktionsaufrufe**: Vollständige Unterstützung für Tool-/Funktionsaufrufe über alle Modelle

---

**Haftungsausschluss**: Dieses Projekt steht nicht in Verbindung mit Google oder OpenRouter. Bitte beachten Sie die Nutzungsbedingungen der jeweiligen Plattformen bei der Verwendung dieser Software.