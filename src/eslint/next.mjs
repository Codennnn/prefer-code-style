import nextPlugin from '@next/eslint-plugin-next'

import { COMMON_SORT_GROUPS, JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'
import react from './react.mjs'

export default [
  ...react,
  {
    name: 'prefer-code-style/next/rules',
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],

    plugins: {
      '@next/next': nextPlugin,
    },

    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-img-element': 'off',
      'simple-import-sort/imports': [
        1,
        {
          groups: [
            ['^react'],
            ['^next', '^@next', '^@?\\w'],
            ['^(~|@)(/.*|$)'],
            ...COMMON_SORT_GROUPS,
          ],
        },
      ],
    },
  },

  {
    name: 'prefer-code-style/next/ignores',
    ignores: [
      'public/**',
      'next-env.d.ts',
      '.next/**',
      'dist/**',
      'build/**',
    ],
  },
]
