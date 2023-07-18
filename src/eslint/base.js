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

  plugins: ['simple-import-sort'],

  rules: {
    'prettier/prettier': 1,
    'func-style': [1, 'declaration', { allowArrowFunctions: true }],
    'no-unused-vars': 1,
    curly: 1,

    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-named-as-default': 0,

    'sort-imports': 0,
    'import/order': 0,
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'no-console': [1, { allow: ['warn', 'error'] }],
    eqeqeq: [1, 'always'],
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
  ignorePatterns: ['node_modules', '!.*.js', '!.*.cjs'],
}
