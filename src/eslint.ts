module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 1,
    'simple-import-sort/exports': 1,
    'sort-imports': 0,
    'import/order': 0,
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
  },
}
