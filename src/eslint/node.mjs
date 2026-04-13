import globals from 'globals'

import base from './base.mjs'

export default [
  ...base,

  {
    name: 'prefer-code-style/node/globals',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
]
