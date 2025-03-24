import stylistic from '@stylistic/eslint-plugin'

import { NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS } from '../constants.mjs'

export default [
  stylistic.configs.customize({
    ...NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS,
    jsx: true,
  }),

  {
    rules: {
      '@stylistic/jsx-curly-brace-presence': [
        'warn',
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],

      '@stylistic/jsx-first-prop-new-line': ['warn', 'multiline'],

      '@stylistic/jsx-one-expression-per-line': ['warn', { allow: 'non-jsx' }],

      '@stylistic/jsx-props-no-multi-spaces': ['warn'],

      '@stylistic/jsx-self-closing-comp': [
        'warn',
        {
          component: true,
          html: true,
        },
      ],

      '@stylistic/jsx-sort-props': [
        'warn',
        {
          ignoreCase: false,
          shorthandFirst: true,
          shorthandLast: false,
          callbacksLast: true,
          multiline: 'ignore',
          noSortAlphabetically: false,
          reservedFirst: true,
        },
      ],
    },
  },
]
