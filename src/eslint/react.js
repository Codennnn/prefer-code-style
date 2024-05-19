const { JAVASCRIPT_FILES, COMMON_SORT_GROUPS } = require('../constants')

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
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
    },
  ],

  settings: {
    react: {
      version: 'detect',
    },
  },
}
