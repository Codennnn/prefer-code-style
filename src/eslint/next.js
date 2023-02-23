const { COMMON_SORT_GROUPS } = require('../constants')

module.exports = {
  extends: ['plugin:@next/next/recommended'],
  ignorePatterns: ['public', 'next-env.d.ts', '.next'],
  rules: {
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
