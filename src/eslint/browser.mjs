import globals from 'globals'

import base from './base.mjs'

export default [
  ...base,

  {
    name: 'prefer-code-style/browser/globals',
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]
