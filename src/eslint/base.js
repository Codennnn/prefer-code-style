const { ECMA_VERSION, JAVASCRIPT_FILES } = require('../constants')

module.exports = {
  env: {
    [`es${ECMA_VERSION}`]: true,
  },

  // Global parser options.
  parserOptions: {
    ecmaVersion: ECMA_VERSION,
    sourceType: 'module',
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
      },
    ],
    'import/first': 1,
    'import/newline-after-import': 1,
    'func-style': [1, 'declaration', { allowArrowFunctions: true }],
    'no-unused-vars': 1,
  },

  overrides: [
    {
      files: JAVASCRIPT_FILES,
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
    },
  ],

  // Tell ESLint not to ignore dot-files, which are ignored by default.
  ignorePatterns: ['!.*.js'],
}
