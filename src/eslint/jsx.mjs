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
        1,
        {
          props: 'never',
          children: 'never',
          propElementValues: 'always',
        },
      ],

      '@stylistic/jsx-first-prop-new-line': [1, 'multiline'],

      '@stylistic/jsx-one-expression-per-line': [1, { allow: 'non-jsx' }],

      '@stylistic/jsx-props-no-multi-spaces': [1],

      '@stylistic/jsx-self-closing-comp': [
        1,
        {
          component: true,
          html: true,
        },
      ],

      '@stylistic/jsx-sort-props': [
        1,
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
