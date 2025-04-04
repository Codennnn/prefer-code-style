import tseslint from 'typescript-eslint'

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'

export default tseslint.config(
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    files: TYPESCRIPT_FILES,

    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },

    rules: {
      '@typescript-eslint/no-explicit-any': 1,
      '@typescript-eslint/no-floating-promises': 1,
      '@typescript-eslint/no-unsafe-argument': 1,
      '@typescript-eslint/no-unsafe-call': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
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
  },

  {
    files: JAVASCRIPT_FILES,
    extends: [tseslint.configs.disableTypeChecked],
  },
)
