const { TYPESCRIPT_FILES } = require('../constants')

module.exports = {
  overrides: [
    {
      files: TYPESCRIPT_FILES,

      parser: '@typescript-eslint/parser',

      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        require.resolve('./rules/typescript-prefer-loose'),
      ],

      rules: {
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': 1,
        '@typescript-eslint/no-use-before-define': 1,
        '@typescript-eslint/consistent-type-definitions': 1,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/consistent-type-imports': [1, { fixStyle: 'inline-type-imports' }],
        '@typescript-eslint/consistent-type-exports': [
          1,
          { fixMixedExportsWithInlineTypeSpecifier: true },
        ],
        '@typescript-eslint/no-import-type-side-effects': 1,

        '@typescript-eslint/dot-notation': 0,
        '@typescript-eslint/no-unsafe-assignment': 0,
        '@typescript-eslint/no-floating-promises': 0,
        '@typescript-eslint/restrict-template-expressions': [
          1,
          {
            allowAny: false,
            allowBoolean: false,
            allowNullish: false,
            allowRegExp: false,
          },
        ],
        '@typescript-eslint/prefer-nullish-coalescing': 0, // Track this related issue: https://github.com/typescript-eslint/typescript-eslint/issues/4906
      },

      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
      },
    },
  ],
}
