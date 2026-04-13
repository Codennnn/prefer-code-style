import { COMMON_SORT_GROUPS } from '../../constants.mjs'
import browser from '../browser.mjs'
import node from '../node.mjs'
import react from '../react.mjs'
import tailwind from '../tailwindcss.mjs'

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
