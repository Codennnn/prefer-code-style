import type { User } from '@/types'
import request from '@/utils/axios'

export function getUserInfo() {
  return request<User>({
    url: '/user/info',
    method: 'get',
  })
}

export function login(data: Pick<User, 'username' | 'password'>) {
  return request<{ token: string }>({
    url: '/user/login',
    method: 'post',
    data,
  })
}

export function register(data: Pick<User, 'username' | 'password'>) {
  return request<null>({
    url: '/user/register',
    method: 'post',
    data,
  })
}
