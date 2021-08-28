import fs from 'fs'
import path from 'path'

const IS_TS_PROJECT = fs.existsSync(
  path.join(process.cwd() || '.', './tsconfig.json')
)

module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: IS_TS_PROJECT ? '@typescript-eslint/parser' : '@babel/eslint-parser',
  extends: (() => 
    [
      'eslint:recommended',
      IS_TS_PROJECT ? 'plugin:@typescript-eslint/recommended' : null,
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      'plugin:jsx-a11y/recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',
    ].filter((ext) => ext && typeof ext === 'string')
  )(),
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
  },
}
