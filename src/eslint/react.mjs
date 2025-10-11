import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import { COMMON_SORT_GROUPS, JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'
import jsx from './jsx.mjs'

export default [
  ...jsx,

  {
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],

    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],

    rules: {
      'simple-import-sort/imports': [
        1,
        {
          groups: [
            ['^react'], // React related packages come first.
            ['^next', '^@next', '^@?\\w'], // Next.js related packages.
            ['^(~|@)(/.*|$)'], // Internal packages.
            ...COMMON_SORT_GROUPS,
          ],
        },
      ],
    },
  },

  reactHooks.configs.flat['recommended-latest'],
]
