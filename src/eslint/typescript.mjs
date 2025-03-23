import globals from 'globals'
import tseslint from 'typescript-eslint'

import { TYPESCRIPT_FILES } from '../constants.mjs'

export default tseslint.config(
  ...tseslint.configs.recommendedTypeChecked,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      ecmaVersion: 5,
      sourceType: 'module',
      parserOptions: {
        // projectService: true,
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
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
