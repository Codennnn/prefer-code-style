import { Button, Checkbox, Form, Input } from 'antd'
import { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { getUserInfo, login } from '@/api/user'
import { useTypedDispatch } from '@/redux'
import { signIn } from '@/redux/app/app-actions'
import { setUserInfo } from '@/redux/user/user-actions'
import type { User } from '@/types'
import { setToken } from '@/utils/token'

export default function Login() {
  const history = useHistory()
  const dispatch = useTypedDispatch()

  const [btnLoading, setBtnLoading] = useState(false)

  const [form] = Form.useForm()

  // MOCK: 预览时自动填入账号和密码
  useEffect(() => {
    form.setFieldsValue({
      username: 'admin@email.com',
      password: 'abc123456',
    })
  }, [form])

  const handleLogin = async (
    values: Pick<User, 'username' | 'password'> & {
      rememberMe: boolean
    }
  ) => {
    try {
      const { data } = await login(values)
      const { data: info } = await getUserInfo()

      const tokenExpires = values.rememberMe ? 30 : undefined
      setToken(data.token, tokenExpires)

      dispatch(setUserInfo(info))
      dispatch(signIn())
      history.replace('/')
    } catch {
      setBtnLoading(false)
    }
  }

  return (
    <div className="login-form">
      <div className="form-bar">
        <h2 className="title">登录系统</h2>
        <p className="desc">使用账号和密码登录本系统</p>
      </div>

      <Form
        hideRequiredMark
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleLogin}
      >
        <Form.Item
          label={
            <div className="flex w-full items-center justify-between">
              <span>账号</span>
              <span className="primary cursor-pointer">需要帮助？</span>
            </div>
          }
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="请输入账号" />
        </Form.Item>

        <Form.Item
          label={
            <div className="flex w-full items-center justify-between">
              <span>密码</span>
              <span className="primary cursor-pointer">忘记密码？</span>
            </div>
          }
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item className="mb-0" name="rememberMe" valuePropName="checked">
          <Checkbox>记住本账号</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            className="w-full"
            htmlType="submit"
            loading={btnLoading}
            size="large"
            type="primary"
          >
            立即登录
          </Button>
          <p className="mt-4 text-gray-500">
            还没有账号？
            <Link
              className="primary cursor-pointer opacity-75 transition hover:opacity-100"
              to="/user/register"
            >
              立即注册
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}
