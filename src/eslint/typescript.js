const { TYPESCRIPT_FILES } = require('../constants')

module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parser: '@typescript-eslint/parser',
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/consistent-type-imports': [1, { fixStyle: 'inline-type-imports' }],
      },
    },
  ],
}
