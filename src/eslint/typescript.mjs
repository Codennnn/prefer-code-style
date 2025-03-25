import tseslint from 'typescript-eslint'

import { TYPESCRIPT_FILES } from '../constants.mjs'

export default tseslint.config(
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
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  {
    files: TYPESCRIPT_FILES,
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-floating-promises': 'warn',
      '@typescript-eslint/no-unsafe-argument': 'warn',
    },
  },
)
