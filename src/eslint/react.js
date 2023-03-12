const { COMMON_SORT_GROUPS, TYPESCRIPT_FILES } = require('../constants')

module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
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
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parser: '@typescript-eslint/parser',
      plugins: ['jsx-falsy'],
      rules: {
        'jsx-falsy/no-falsy-and': 1,
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
}
