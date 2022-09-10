import fs from 'fs'
import path from 'path'

const useTypeScript = fs.existsSync(
  path.join(process.cwd() || '.', './tsconfig.json')
)

const useTailwindCSS = fs.existsSync(
  path.join(process.cwd() || '.', './tailwind.config.js')
)

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
    mocha: true,
    jest: true,
  },

  parser: useTypeScript ? '@typescript-eslint/parser' : '@babel/eslint-parser',

  extends: (() =>
    [
      'eslint:recommended',
      useTypeScript ? 'plugin:@typescript-eslint/recommended' : null,
      'plugin:import/recommended',
      useTypeScript ? 'plugin:import/typescript' : null,
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
      useTailwindCSS ? 'plugin:tailwindcss/recommended' : null,
    ].filter((ext) => ext && typeof ext === 'string'))(),

  plugins: ['simple-import-sort'],

  rules: {
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'sort-imports': 0,
    'import/order': 0,
    'react/jsx-sort-props': [
      2,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'func-style': [2, 'declaration', { allowArrowFunctions: true }],

    ...(useTypeScript
      ? {
          '@typescript-eslint/no-var-requires': 0,
          '@typescript-eslint/no-non-null-assertion': 0,
          '@typescript-eslint/no-use-before-define': 2,
          '@typescript-eslint/explicit-module-boundary-types': 0,
          '@typescript-eslint/consistent-type-imports': [
            2,
            {
              prefer: 'type-imports',
              disallowTypeAnnotations: true,
            },
          ],
        }
      : {}),

    ...(useTailwindCSS ? { 'tailwindcss/no-custom-classname': 0 } : {}),
  },
}
