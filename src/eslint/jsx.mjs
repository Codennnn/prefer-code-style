import stylistic from '@stylistic/eslint-plugin'
import perfectionist from 'eslint-plugin-perfectionist'

import { NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS } from '../constants.mjs'

export default [
  stylistic.configs.customize({
    ...NORMAL_STYLISTIC_CUSTOMIZE_OPTIONS,
    jsx: true,
  }),

  {
    plugins: {
      perfectionist,
    },

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

      '@stylistic/jsx-self-closing-comp': [
        1,
        {
          component: true,
          html: true,
        },
      ],

      'perfectionist/sort-jsx-props': [
        1,
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: false,
          groups: ['reserved', 'shorthand', 'unknown', 'callback'],
          customGroups: [
            {
              groupName: 'reserved',
              elementNamePattern: '^(key|ref)$',
            },
            {
              groupName: 'shorthand',
              modifiers: ['shorthand'],
            },
            {
              groupName: 'callback',
              elementNamePattern: '^on.+',
            },
          ],
        },
      ],
    },
  },
]
