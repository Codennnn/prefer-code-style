const { propertyGroups } = require('stylelint-config-clean-order')

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  properties,
}))

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended',
    'stylelint-config-clean-order',
    'stylelint-prettier/recommended',
  ],

  plugins: ['stylelint-less', 'stylelint-scss', 'stylelint-order'],

  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // 添加对 tailwind 指令的支持
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'import',
          // ====================
        ],
      },
    ],

    'color-function-notation': 'modern',

    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },

  ignoreFiles: ['build/**/*.css'],
}
