import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import { COMMON_SORT_GROUPS, JAVASCRIPT_FILES, TYPESCRIPT_FILES } from '../constants.mjs'
import jsx from './jsx.mjs'

export default [
  ...jsx,

  {
    name: 'prefer-code-style/react/config',
    files: [...JAVASCRIPT_FILES, ...TYPESCRIPT_FILES],

    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],

    rules: {
      'simple-import-sort/imports': [
        1,
        {
          groups: [
            ['^react'], // React related packages come first.
            ['^@?\\w'],
            ['^(~|@)(/.*|$)'], // Internal packages.
            ...COMMON_SORT_GROUPS,
          ],
        },
      ],
    },
  },

  reactHooks.configs.flat['recommended-latest'],
]
