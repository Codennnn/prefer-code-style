import tsParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'

export default defineConfig(
  tseslint.configs.recommendedTypeChecked,

  {
    name: 'prefer-code-style/typescript/ts-parser',
    files: TYPESCRIPT_FILES,
    ignores: ['eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
      },
    },
  },

  {
    name: 'prefer-code-style/typescript/js-parser',
    files: JAVASCRIPT_FILES,
    ignores: ['eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        projectService: true,
      },
    },
  },

  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  {
    name: 'prefer-code-style/typescript/rules',
    files: TYPESCRIPT_FILES,
    extends: [importPlugin.flatConfigs.typescript],
    rules: {
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-floating-promises': 1,
      '@typescript-eslint/no-unsafe-argument': 1,
    },
  },
)
