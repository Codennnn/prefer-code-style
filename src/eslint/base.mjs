import eslint from '@eslint/js'
// eslint-disable-next-line import-x/default, import-x/no-named-as-default, import-x/no-named-as-default-member, import-x/namespace
import stylistic from '@stylistic/eslint-plugin'
import { flatConfigs as eslintPluginImportXFlatConfigs } from 'eslint-plugin-import-x'
import packageJson from 'eslint-plugin-package-json'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

import { NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS } from '../constants.mjs'

export default [
  {
    ignores: ['node_modules', '!.*.js', '!.*.mjs', '!.*.cjs'],
  },

  eslint.configs.recommended,

  eslintPluginImportXFlatConfigs.recommended,

  stylistic.configs.customize(NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS),

  {
    rules: {
      curly: 'warn',
      'no-unused-vars': 'warn',
      eqeqeq: ['warn', 'always'],
      'no-console': 'warn',

      '@stylistic/array-bracket-newline': ['warn', { multiline: true }],

      '@stylistic/brace-style': ['warn', 'stroustrup', { allowSingleLine: false }],

      '@stylistic/curly-newline': ['warn', { consistent: true }],

      '@stylistic/max-len': [
        'warn',
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

      '@stylistic/no-extra-parens': ['warn', 'all'],

      '@stylistic/padded-blocks': ['error', 'never'],

      '@stylistic/padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        {
          blankLine: 'always',
          prev: '*',
          next: ['export', 'case', 'default', 'return', 'class'],
        },
      ],

      'import-x/newline-after-import': 1,
      'import-x/no-unresolved': 0,
    },
  },

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  packageJson.configs.recommended,
]
