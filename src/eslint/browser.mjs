import globals from 'globals'

import base from './base.mjs'

export default [
  ...base,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },
]
