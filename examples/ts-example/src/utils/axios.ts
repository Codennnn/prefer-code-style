import { message as Message, notification as Notification } from 'antd'
import axios from 'axios'

import { getToken, removeToken } from '@/utils/token'

const responseHandler = {
  errorNotify({
    message = '哎呀！',
    description = '请求出错啦！',
    duration = null,
  }: {
    message?: string
    description?: string
    duration?: number | null
  } = {}) {
    Notification.error({
      message,
      description,
      duration,
    })
  },
  401(status: number, statusText: string) {
    this.errorNotify({
      message: `${status}`,
      description: `抱歉，您没有权限访问 - ${statusText}`,
    })
  },
  404(status: number, statusText: string) {
    this.errorNotify({
      message: `${status}`,
      description: `找不到资源 - ${statusText}`,
    })
  },
  418(status: number) {
    this.errorNotify({
      message: `${status}`,
      description: '登录过期，请重新登录~',
      duration: 3000,
    })
  },
  500(status: number, statusText: string) {
    this.errorNotify({
      message: `${status}`,
      description: `服务出错 - ${statusText}`,
    })
  },
  undefined() {
    this.errorNotify()
  },
}

const errorHandler = (error: {
  response: { status: number | string; statusText: string }
}) => {
  const { status = 'default', statusText = '错误信息' } = error.response
  responseHandler[status](status, statusText)

  return Promise.reject(error)
}

const service = axios.create({
  // baseURL: process.env.REACT_APP_REQUEST_BASE_URL,
  timeout: 20000,
  responseType: 'json',
  withCredentials: true,
})

service.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, errorHandler)

service.interceptors.response.use((response) => {
  const { data } = response

  const { code, msg = '接口异常' } = data
  if (code !== 2000) {
    Message.warning(msg)

    if (code === 4018) {
      // 登录失效的情况
      // TODO: 应使用防抖函数防止多次执行相同操作
      removeToken()
      window.location.reload()
    }

    return Promise.reject(data)
  }
  return data
}, errorHandler)

export default service
