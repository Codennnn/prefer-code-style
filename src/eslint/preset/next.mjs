import next from '../next.mjs'
import tailwind from '../tailwindcss.mjs'
import typescriptStrict from '../typescript-strict.mjs'
import normal from './normal.mjs'

export default [
  ...normal,
  ...typescriptStrict,
  ...next,
  ...tailwind,
]
