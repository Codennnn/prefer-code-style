export const SET_USER_INFO = 'SET_USER_INFO'

export interface UserState {
  info: {
    /** 用户昵称 */
    nickname?: string
    /** 用户头像 */
    avatar?: string
    /** 用户邮箱 */
    email?: string
    /** 用户权限 */
    permissions?: string[]
  }
}

interface SetUserInfoAction {
  type: typeof SET_USER_INFO
  payload: UserState['info']
}

export type UserActionTypes = SetUserInfoAction
