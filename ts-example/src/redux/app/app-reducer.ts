import routes from '@/routes'
import { getToken } from '@/utils/token'

import type { AppActionTypes, AppState } from './app-action-types'
import {
  SET_HEADER_STATUS,
  SET_LOGIN_STATUS,
  SET_ROUTES,
  SET_SIDER_STATUS,
} from './app-action-types'

const initialState: AppState = {
  isSiderOpened: true,
  isHeaderFixed: true,
  isLogin: !!getToken(),
  routes,
}

export default function appReducer(
  state = initialState,
  { type, payload }: AppActionTypes
) {
  switch (type) {
    case SET_LOGIN_STATUS:
      return { ...state, isLogin: payload as boolean }

    case SET_SIDER_STATUS:
      return { ...state, isSiderOpened: payload as boolean }

    case SET_HEADER_STATUS:
      return { ...state, isHeaderFixed: payload as boolean }

    case SET_ROUTES:
      return { ...state, routes: payload as AppState['routes'] }

    default:
      return state
  }
}
