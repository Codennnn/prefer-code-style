import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import type { AppState } from './app/app-action-types'
import type { store } from './store'
import type { UserState } from './user/user-action-types'
export { persistor, store } from './store'

export const useTypedDispatch = () => useDispatch<typeof store.dispatch>()

export const useTypedSelector: TypedUseSelectorHook<{
  app: AppState
  user: UserState
}> = useSelector
