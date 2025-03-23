import eslint from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import simpleImportSort from 'eslint-plugin-simple-import-sort'

export default [
  {
    ignores: ['node_modules', '!.*.js', '!.*.mjs', '!.*.cjs'],
  },

  eslint.configs.recommended,
  // eslintPluginPrettierRecommended,

  stylistic.configs.customize({
    flat: true,
    indent: 2,
    quotes: 'single',
    semi: false,
    jsx: false,
    commaDangle: 'always-multiline',
    arrowParens: 'always',
    braceStyle: '1tbs',
  }),

  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    },
  },

  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      '@stylistic/padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'block-like' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
        {
          blankLine: 'always',
          prev: '*',
          next: ['export', 'case', 'default', 'return', 'class'],
        },
      ],

      '@stylistic/quote-props': ['error', 'as-needed'],
    },
  },
]
