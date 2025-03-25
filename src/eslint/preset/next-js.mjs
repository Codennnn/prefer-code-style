import next from 'prefer-code-style/eslint/next'
import tailwind from 'prefer-code-style/eslint/tailwindcss'

import normal from './normal.mjs'

export default [
  ...normal,
  ...next,
  ...tailwind,
]
