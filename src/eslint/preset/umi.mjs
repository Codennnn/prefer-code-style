import browser from 'prefer-code-style/eslint/browser'
import node from 'prefer-code-style/eslint/node'
import react from 'prefer-code-style/eslint/react'
import tailwind from 'prefer-code-style/eslint/tailwindcss'

import { COMMON_SORT_GROUPS } from '../../constants'

export default [
  ...node,
  ...browser,
  ...react,
  ...tailwind,
  {
    rules: {
      'simple-import-sort/imports': [
        1,
        {
          groups: [
            // Packages `react` related packages come first.
            ['^react'],
            ['^antd', '^@ant-design', '^@?\\w'],
            // Internal packages.
            ['^(~|@)(/.*|$)'],
            ...COMMON_SORT_GROUPS,
          ],
        },
      ],
    },
  },
]
