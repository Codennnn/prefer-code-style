export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS'
export const SET_SIDER_STATUS = 'SET_SIDER_STATUS'
export const SET_ROUTES = 'SET_ROUTES'
export const SET_HEADER_STATUS = 'SET_HEADER_STATUS'
import type { Routes } from '@/routes'

export interface AppState {
  /** 侧边栏是否为展开状态 */
  isSiderOpened: boolean
  /** 顶部导航栏是否固定在顶部 */
  isHeaderFixed: boolean
  /** 用户是否已登录 */
  isLogin: boolean
  /** 权限路由 */
  routes: Routes
}

interface SetLoginStatusAction {
  type: typeof SET_LOGIN_STATUS
  payload: boolean
}

interface SetSiderStatusAction {
  type: typeof SET_SIDER_STATUS
  payload: boolean
}

interface SetAuthRoutesAction {
  type: typeof SET_ROUTES
  payload: AppState['routes']
}

interface ToggleHeaderAction {
  type: typeof SET_HEADER_STATUS
  payload: boolean
}

export type AppActionTypes =
  | SetLoginStatusAction
  | SetSiderStatusAction
  | SetAuthRoutesAction
  | ToggleHeaderAction
