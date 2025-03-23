import next from 'prefer-code-style/eslint/next'
import react from 'prefer-code-style/eslint/react'
import tailwind from 'prefer-code-style/eslint/tailwindcss'

import normal from './normal.mjs'

export default [...normal, ...react, next, ...tailwind]
