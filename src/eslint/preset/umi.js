const { COMMON_SORT_GROUPS } = require('../../constants')

module.exports = {
  extends: [
    require.resolve('../node'),
    require.resolve('../browser'),
    require.resolve('../typescript'),
    require.resolve('../react'),
    require.resolve('../tailwindcss'),
  ],
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
}
