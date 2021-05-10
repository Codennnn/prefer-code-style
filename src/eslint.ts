import fs from 'fs'
import path from 'path'

const IS_TS_PROJECT = fs.existsSync(
  path.join(process.cwd() || '.', './tsconfig.json')
)

const parser = IS_TS_PROJECT
  ? '@typescript-eslint/parser'
  : '@babel/eslint-parser'

const _extends = (() => {
  return [
    'eslint:recommended',
    IS_TS_PROJECT ? 'plugin:@typescript-eslint/recommended' : null,
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ].filter(el => el && typeof el === 'string')
})()

const rules = {
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
  ...(IS_TS_PROJECT
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
}

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser,
  extends: _extends,
  plugins: ['simple-import-sort'],
  rules,
}
