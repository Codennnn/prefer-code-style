module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-prettier/recommended',
    'stylelint-config-rational-order',
  ],

  plugins: ['stylelint-scss', 'stylelint-order'],

  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind'],
      },
    ],
  },

  ignoreFiles: ['build/**/*.css'],
}
