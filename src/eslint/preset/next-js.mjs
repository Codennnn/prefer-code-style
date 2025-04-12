import tailwind from '../tailwindcss.mjs'
import next from './next.mjs'
import normal from './normal.mjs'

export default [
  ...normal,
  ...next,
  ...tailwind,
]
