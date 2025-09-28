# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2025-01-22

### Fixed
- Resolved bundle packaging issue that prevented modifications from being included in npm package
- Improved environment variable configuration handling
- Enhanced error handling and timeout management

### Changed
- Updated documentation with detailed configuration examples
- Added Windows PowerShell specific configuration instructions
- Clarified environment variable priority system

## [1.0.0] - 2025-01-22

### Added
- Initial release of Chameleon Nexus Tech customized Gemini CLI
- Integration with Volcengine AI API instead of Google Gemini API
- Environment variable configuration support:
  - `VOLCENGINE_API_KEY` or `GEMINI_API_KEY` for API authentication
  - `VOLCENGINE_BASE_URL` for custom endpoint configuration
  - `VOLCENGINE_MODEL` for model selection
- Full compatibility with original Gemini CLI interface
- Support for both interactive and direct question modes
- Request/response format conversion between Gemini and Volcengine APIs
- Streaming response simulation for compatibility
- Chinese language optimization
- Comprehensive error handling and timeout management

### Modified
- `packages/core/src/core/contentGenerator.ts`: Modified to use VolcengineContentGenerator
- Added `packages/core/src/core/volcengineContentGenerator.ts`: New Volcengine AI adapter

### Technical Details
- **Default Model**: DeepSeek V3 (`deepseek-v3-250324`)
- **Default Endpoint**: `https://ark.cn-beijing.volces.com/api/v3`
- **API Compatibility**: Full Gemini CLI API compatibility maintained
- **Authentication**: Environment variable based configuration
- **Fallback**: Hardcoded API key for testing purposes

### License Compliance
- Maintained Apache 2.0 license from original project
- Added proper attribution to Google LLC
- Included modification notices as required by Apache 2.0
- Created NOTICE file with detailed modification information

---

## Original Project

This project is based on [Google Gemini CLI](https://github.com/google-gemini/gemini-cli) version 0.7.0-nightly.20250918.2722473a.

**Original Copyright**: Copyright 2025 Google LLC  
**Original License**: Apache License 2.0  
**Modifications by**: Chameleon Nexus Tech
