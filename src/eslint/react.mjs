import reactPlugin from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'

import { COMMON_SORT_GROUPS } from '../constants.mjs'

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],

    ...reactPlugin.configs.flat.recommended,
    ...reactPlugin.configs.flat['jsx-runtime'],

    rules: {
      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: false,
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],

      'simple-import-sort/imports': [
        1,
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react'],
            ['^@?\\w'],
            // Internal packages.
            ['^(~|@)(/.*|$)'],
            ...COMMON_SORT_GROUPS,
          ],
        },
      ],
    },
  },

  reactHooks.configs['recommended-latest'],
]
