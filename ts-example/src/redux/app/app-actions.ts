import type { AppActionTypes, AppState } from './app-action-types'
import {
  SET_HEADER_STATUS,
  SET_LOGIN_STATUS,
  SET_ROUTES,
  SET_SIDER_STATUS,
} from './app-action-types'

export function signIn(): AppActionTypes {
  return { type: SET_LOGIN_STATUS, payload: true }
}

export function signOut(): AppActionTypes {
  return { type: SET_LOGIN_STATUS, payload: false }
}

export function openSider(): AppActionTypes {
  return { type: SET_SIDER_STATUS, payload: true }
}

export function closeSider(): AppActionTypes {
  return { type: SET_SIDER_STATUS, payload: false }
}

export function toggleHeader(payload: boolean): AppActionTypes {
  return { type: SET_HEADER_STATUS, payload }
}

export function setAuthRoutes(payload: AppState['routes']): AppActionTypes {
  return { type: SET_ROUTES, payload }
}
