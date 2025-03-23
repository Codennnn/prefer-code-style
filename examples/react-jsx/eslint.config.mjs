import browser from 'prefer-code-style/eslint/browser'
import jsxA11y from 'prefer-code-style/eslint/jsx-a11y'
import next from 'prefer-code-style/eslint/next'
import node from 'prefer-code-style/eslint/node'
import react from 'prefer-code-style/eslint/react'

import tailwind from 'prefer-code-style/eslint/tailwindcss'

export default [...node, ...browser, ...react, next, ...jsxA11y, ...tailwind]
