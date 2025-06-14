import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import importPlugin from 'eslint-plugin-import'
import packageJson from 'eslint-plugin-package-json'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

import { NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS } from '../constants.mjs'

export default [
  {
    ignores: ['node_modules', '!.*.js', '!.*.mjs', '!.*.cjs'],
  },

  eslint.configs.recommended,

  importPlugin.flatConfigs.recommended,

  stylistic.configs.customize(NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS),

  {
    rules: {
      curly: 1,
      'no-unused-vars': 1,
      eqeqeq: [1, 'always'],
      'no-console': [1, { allow: ['warn', 'error'] }],
      quotes: [
        1,
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],

      '@stylistic/array-bracket-newline': [1, { multiline: true }],

      '@stylistic/brace-style': [1, 'stroustrup', { allowSingleLine: false }],

      '@stylistic/curly-newline': [1, { consistent: true }],

      '@stylistic/max-len': [
        1,
        {
          code: 100,
          ignoreUrls: true,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreRegExpLiterals: true,
        },
      ],

      '@stylistic/no-extra-parens': [1, 'all'],

      '@stylistic/padded-blocks': [1, 'never'],

      '@stylistic/padding-line-between-statements': [
        1,
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        {
          blankLine: 'always',
          prev: '*',
          next: ['case', 'default', 'return', 'class'],
        },
        {
          blankLine: 'always',
          prev: ['expression', 'const'],
          next: ['export'],
        },
        {
          blankLine: 'always',
          prev: ['export'],
          next: ['expression', 'const'],
        },
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'any', prev: 'directive', next: 'directive',
        },
      ],

      'import/newline-after-import': 1,
      'import/no-unresolved': 0,
      'import/namespace': 0,
      'import/order': 0,
    },
  },

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 1,
      'simple-import-sort/exports': 1,
    },
  },

  packageJson.configs.recommended,
]
