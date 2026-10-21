import { propertyGroups } from 'stylelint-config-clean-order'

import { PRETTIER_CONFIG } from './constants.mjs'

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  properties,
}))

/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-clean-order',
    'stylelint-prettier/recommended',
    'stylelint-config-tailwindcss',
  ],

  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
    },

    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
  ],

  rules: {
    'prettier/prettier': [
      true, {
        severity: 'warning',
        ...PRETTIER_CONFIG,
      },
    ],

    'order/properties-order': [
      propertiesOrder,
      {
        severity: 'warning',
        unspecified: 'bottomAlphabetical',
      },
    ],

    'at-rule-no-deprecated': [
      true,
      {
        ignoreAtRules: ['apply'],
      },
    ],

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          // Tailwind v3 directives
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'layer',
          'import',
          // Tailwind v4 directives
          'config',
          'custom-variant',
          'plugin',
          'reference',
          'source',
          'theme',
          'utility',
          'variant',
        ],
      },
    ],

    'at-rule-prelude-no-invalid': [
      true,
      {
        ignoreAtRules: ['apply'],
      },
    ],

    'color-function-notation': 'modern',

    'selector-id-pattern': '^[a-zA-Z_]+$',
    'selector-class-pattern':
      '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$',
  },

  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,

  ignoreFiles: ['build/**/*.css'],
}
