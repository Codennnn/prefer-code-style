import { defineConfig } from 'eslint/config'
import tsParser from '@typescript-eslint/parser'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'

export default defineConfig(
  tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    files: [...TYPESCRIPT_FILES, ...JAVASCRIPT_FILES],
    ignores: ['eslint.config.js'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  {
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  {
    files: TYPESCRIPT_FILES,
    extends: [importPlugin.flatConfigs.typescript],
    rules: {
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-floating-promises': 1,
      '@typescript-eslint/no-unsafe-argument': 1,
    },
  },
)
