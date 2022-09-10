import type { UserActionTypes, UserState } from './user-action-types'
import { SET_USER_INFO } from './user-action-types'

export function setUserInfo(payload: UserState['info']): UserActionTypes {
  return { type: SET_USER_INFO, payload }
}
