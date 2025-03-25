import nextPlugin from '@next/eslint-plugin-next'

import { JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'
import react from './react.mjs'

export default [
  ...react,
  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],

    plugins: {
      '@next/next': nextPlugin,
    },

    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },

  {
    ignores: [
      'public/**',
      'next-env.d.ts',
      '.next/**',
      'dist/**',
      'build/**',
    ],
  },
]
