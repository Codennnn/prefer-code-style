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
        ignoreAtRules: [
          // 添加对 tailwind 指令的支持
          'tailwind',
          'apply',
          'layer',
          'import',
          'screen',
          // ====================
        ],
      },
    ],
    'color-function-notation': 'legacy',
    'alpha-value-notation': 'number',
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },

  ignoreFiles: ['build/**/*.css'],
}
