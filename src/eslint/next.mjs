import nextPlugin from '@next/eslint-plugin-next'

import { COMMON_SORT_GROUPS, JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'

export default {
  files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],

  ignores: ['public/**', 'next-env.d.ts', '.next/**'],

  plugins: {
    '@next/next': nextPlugin,
  },

  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs['core-web-vitals'].rules,

    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react'],
          ['^next', '^@next', '^@?\\w'],
          // Internal packages.
          ['^(~|@)(/.*|$)'],
          ...COMMON_SORT_GROUPS,
        ],
      },
    ],
  },
}
