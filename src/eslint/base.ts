const { ECMA_VERSION } = require('./constants')

module.exports = {
  env: {
    [`es${ECMA_VERSION}`]: true,
  },

  // Report unused `eslint-disable` comments.
  reportUnusedDisableDirectives: true,

  extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:prettier/recommended'],

  rules: {
    'prettier/prettier': 1,

    'sort-imports': [1, { ignoreDeclarationSort: true }],

    'import/order': [
      1,
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        warnOnUnassignedImports: false,
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/first': 1,
    'import/newline-after-import': 1,

    'func-style': [1, 'declaration', { allowArrowFunctions: true }],
  },
}
