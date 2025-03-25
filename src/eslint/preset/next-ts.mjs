import next from 'prefer-code-style/eslint/next'
import tailwind from 'prefer-code-style/eslint/tailwindcss'
import typescript from 'prefer-code-style/eslint/typescript'

import normal from './normal.mjs'

export default [
  ...normal,
  ...typescript,
  ...next,
  ...tailwind,
]
