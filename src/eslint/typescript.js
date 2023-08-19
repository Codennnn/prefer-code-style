const { TYPESCRIPT_FILES } = require('../constants')

module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/strict',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        require.resolve('./rules/typescript-prefer-loose'),
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/consistent-type-definitions': 1,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/consistent-type-imports': [1, { fixStyle: 'inline-type-imports' }],

        '@typescript-eslint/dot-notation': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/restrict-template-expressions': 2,
        '@typescript-eslint/prefer-nullish-coalescing': 0, // Track this related issue: https://github.com/typescript-eslint/typescript-eslint/issues/4906
      },
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  ],
}
