import { defineConfig } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import tseslint from 'typescript-eslint'

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'

export default defineConfig(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    files: TYPESCRIPT_FILES,

    extends: [importPlugin.flatConfigs.typescript],

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      'import/no-duplicates': [1, { 'prefer-inline': true }],

      '@typescript-eslint/consistent-type-imports': [
        1,
        {
          prefer: 'type-imports',
          fixStyle: 'separate-type-imports',
          disallowTypeAnnotations: true,
        },
      ],

      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-floating-promises': 1,
      '@typescript-eslint/no-unsafe-argument': 1,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/prefer-nullish-coalescing': [
        1,
        {
          ignorePrimitives: {
            string: true,
          },
        }
      ],
      '@typescript-eslint/no-use-before-define': [
        1,
        {
          functions: true,
          classes: true,
          variables: true,
          typedefs: false, // 允许类型在定义前使用
        },
      ],
      '@typescript-eslint/restrict-template-expressions': [
        1,
        {
          allowNumber: true,
        },
      ],
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
  },

  {
    files: JAVASCRIPT_FILES,
    extends: [tseslint.configs.disableTypeChecked],
  },
)
