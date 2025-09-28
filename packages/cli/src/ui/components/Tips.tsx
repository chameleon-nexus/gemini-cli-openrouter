/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @author chameleon-nexus
 * @email mythicscribe2014@gmail.com
 */

import type React from 'react';
import { Box, Text } from 'ink';
import { theme } from '../semantic-colors.js';
import { type Config } from '@google/gemini-cli-core';

interface TipsProps {
  config: Config;
}

export const Tips: React.FC<TipsProps> = ({ config }) => {
  const geminiMdFileCount = config.getGeminiMdFileCount();
  const language = process.env['AI_LANG'] || process.env['LANG'] || 'en';
  const currentModel = process.env['AI_MODEL'] || 'unknown';
  
  const renderTips = () => {
    switch (language) {
      case 'zh':
      case 'zh_CN':
        return (
          <>
            <Text color={theme.text.primary}>CatalystAI 是由 chameleon-nexus 发布的中文 CLI，支持国产 AI 模型和本地离线模型，联系方式：mythicscribe2014@gmail.com</Text>
            <Text color={theme.text.secondary}>当前模型: {currentModel}</Text>
            <Text color={theme.text.primary}>使用提示：</Text>
            <Text color={theme.text.primary}>
              1. 提问、编辑文件或运行命令。
            </Text>
            <Text color={theme.text.primary}>
              2. 具体描述以获得最佳结果。
            </Text>
            {geminiMdFileCount === 0 && (
              <Text color={theme.text.primary}>
                3. 创建{' '}
                <Text bold color={theme.text.accent}>
                  GEMINI.md
                </Text>{' '}
                文件来自定义与 Gemini 的交互。
              </Text>
            )}
            <Text color={theme.text.primary}>
              {geminiMdFileCount === 0 ? '4.' : '3.'}{' '}
              <Text bold color={theme.text.accent}>
                /help
              </Text>{' '}
              获取更多信息。
            </Text>
          </>
        );
      
      case 'de':
      case 'de_DE':
        return (
          <>
            <Text color={theme.text.secondary}>Aktuelles Modell: {currentModel}</Text>
            <Text color={theme.text.primary}>Tipps für den Einstieg:</Text>
            <Text color={theme.text.primary}>
              1. Stellen Sie Fragen, bearbeiten Sie Dateien oder führen Sie Befehle aus.
            </Text>
            <Text color={theme.text.primary}>
              2. Seien Sie spezifisch für die besten Ergebnisse.
            </Text>
            {geminiMdFileCount === 0 && (
              <Text color={theme.text.primary}>
                3. Erstellen Sie{' '}
                <Text bold color={theme.text.accent}>
                  GEMINI.md
                </Text>{' '}
                Dateien, um Ihre Interaktionen mit Gemini anzupassen.
              </Text>
            )}
            <Text color={theme.text.primary}>
              {geminiMdFileCount === 0 ? '4.' : '3.'}{' '}
              <Text bold color={theme.text.accent}>
                /help
              </Text>{' '}
              für weitere Informationen.
            </Text>
          </>
        );
      
      case 'vi':
      case 'vi_VN':
        return (
          <>
            <Text color={theme.text.secondary}>Mô hình hiện tại: {currentModel}</Text>
            <Text color={theme.text.primary}>Mẹo để bắt đầu:</Text>
            <Text color={theme.text.primary}>
              1. Đặt câu hỏi, chỉnh sửa tệp hoặc chạy lệnh.
            </Text>
            <Text color={theme.text.primary}>
              2. Hãy cụ thể để có kết quả tốt nhất.
            </Text>
            {geminiMdFileCount === 0 && (
              <Text color={theme.text.primary}>
                3. Tạo{' '}
                <Text bold color={theme.text.accent}>
                  GEMINI.md
                </Text>{' '}
                để tùy chỉnh tương tác với Gemini.
              </Text>
            )}
            <Text color={theme.text.primary}>
              {geminiMdFileCount === 0 ? '4.' : '3.'}{' '}
              <Text bold color={theme.text.accent}>
                /help
              </Text>{' '}
              để biết thêm thông tin.
            </Text>
          </>
        );
      
      case 'ar':
      case 'ar_SA':
        return (
          <>
            <Text color={theme.text.secondary}>النموذج الحالي: {currentModel}</Text>
            <Text color={theme.text.primary}>نصائح للبدء:</Text>
            <Text color={theme.text.primary}>
              1. اطرح الأسئلة أو عدّل الملفات أو نفّذ الأوامر.
            </Text>
            <Text color={theme.text.primary}>
              2. كن محدداً للحصول على أفضل النتائج.
            </Text>
            {geminiMdFileCount === 0 && (
              <Text color={theme.text.primary}>
                3. أنشئ{' '}
                <Text bold color={theme.text.accent}>
                  GEMINI.md
                </Text>{' '}
                لتخصيص تفاعلاتك مع Gemini.
              </Text>
            )}
            <Text color={theme.text.primary}>
              {geminiMdFileCount === 0 ? '4.' : '3.'}{' '}
              <Text bold color={theme.text.accent}>
                /help
              </Text>{' '}
              لمزيد من المعلومات.
            </Text>
          </>
        );
      
      default:
        return (
          <>
            <Text color={theme.text.secondary}>Current Model: {currentModel}</Text>
            <Text color={theme.text.primary}>Tips for getting started:</Text>
            <Text color={theme.text.primary}>
              1. Ask questions, edit files, or run commands.
            </Text>
            <Text color={theme.text.primary}>
              2. Be specific for the best results.
            </Text>
            {geminiMdFileCount === 0 && (
              <Text color={theme.text.primary}>
                3. Create{' '}
                <Text bold color={theme.text.accent}>
                  GEMINI.md
                </Text>{' '}
                files to customize your interactions with Gemini.
              </Text>
            )}
            <Text color={theme.text.primary}>
              {geminiMdFileCount === 0 ? '4.' : '3.'}{' '}
              <Text bold color={theme.text.accent}>
                /help
              </Text>{' '}
              for more information.
            </Text>
          </>
        );
    }
  };
  
  return (
    <Box flexDirection="column">
      {renderTips()}
    </Box>
  );
};
