import fs from 'fs'
import path from 'path'

const useTypeScript = fs.existsSync(path.join(process.cwd() || '.', './tsconfig.json'))

const useTailwindCSS = fs.existsSync(path.join(process.cwd() || '.', './tailwind.config.js'))

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },

  parser: useTypeScript ? '@typescript-eslint/parser' : '@babel/eslint-parser',

  extends: (() =>
    [
      'eslint:recommended',
      useTypeScript ? 'plugin:@typescript-eslint/recommended' : null,
      'plugin:import/recommended',
      useTypeScript ? 'plugin:import/typescript' : null,
      'plugin:react/recommended',
      'plugin:react/jsx-runtime',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      useTailwindCSS ? 'plugin:tailwindcss/recommended' : null,
    ].filter((ext) => ext && typeof ext === 'string'))(),

  rules: {
    'prettier/prettier': 1,

    'sort-imports': [1, { ignoreDeclarationSort: true }],

    'import/order': [
      1,
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        warnOnUnassignedImports: false,
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
      },
    ],
    'import/first': 1,
    'import/newline-after-import': 1,

    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],

    'func-style': [1, 'declaration', { allowArrowFunctions: true }],

    ...(useTypeScript && {
      '@typescript-eslint/no-explicit-any': 0,
      '@typescript-eslint/no-var-requires': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-use-before-define': 1,
      '@typescript-eslint/explicit-module-boundary-types': 0,
      '@typescript-eslint/consistent-type-imports': [1, { fixStyle: 'inline-type-imports' }],
    }),

    ...(useTailwindCSS && { 'tailwindcss/no-custom-classname': 0 }),
  },

  settings: {
    react: {
      version: 'detect',
    },
  },
}
