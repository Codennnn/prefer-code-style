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
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
      '@typescript-eslint/restrict-template-expressions': [
        'warn',
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
