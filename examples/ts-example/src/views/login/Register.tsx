import { Button, Checkbox, Form, Input } from 'antd'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { getUserInfo, login, register } from '@/api/user'
import { useTypedDispatch } from '@/redux'
import { signIn } from '@/redux/app/app-actions'
import { setUserInfo } from '@/redux/user/user-actions'
import type { User } from '@/types'
import { setToken } from '@/utils/token'

export default function Register() {
  const history = useHistory()
  const dispatch = useTypedDispatch()

  const [btnLoading, setBtnLoading] = useState(false)

  const [form] = Form.useForm()

  const handleRegister = async (
    values: Pick<User, 'username' | 'password'>
  ) => {
    try {
      setBtnLoading(true)
      await register(values)
      const { token } = await login(values)
      const { info } = await getUserInfo()
      setToken(token)
      dispatch(signIn())
      dispatch(setUserInfo(info))
      history.replace('/')
    } catch {
      setBtnLoading(false)
    }
  }

  return (
    <div className="register-form">
      <div className="form-bar">
        <h2 className="title">注册账号</h2>
        <p className="desc">创建一个账号以登录本系统</p>
      </div>

      <Form
        hideRequiredMark
        form={form}
        layout="vertical"
        size="large"
        onFinish={handleRegister}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[{ required: true, message: '请输入账号' }]}
        >
          <Input placeholder="手机号/邮箱" />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder="请输入密码" />
        </Form.Item>

        <Form.Item
          dependencies={['password']}
          label="确认密码"
          name="passwordConfirm"
          rules={[
            { required: true, message: '请再次确认密码' },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject(new Error('两次密码输入不一致！'))
              },
            }),
          ]}
        >
          <Input.Password placeholder="请再次确认密码" />
        </Form.Item>

        <Form.Item
          className="mb-0"
          name="remember"
          rules={[{ required: true, message: '需要同意协议才能进行注册' }]}
          valuePropName="checked"
        >
          <Checkbox>
            我同意
            <span className="primary">《用户隐私协议》</span>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            ghost
            className="w-full"
            htmlType="submit"
            loading={btnLoading}
            size="large"
            type="primary"
          >
            立即注册
          </Button>
          <p className="mt-4 text-gray-500">
            已经有账号了？
            <Link
              className="primary cursor-pointer opacity-75 transition hover:opacity-100"
              to="/user/login"
            >
              立即登录
            </Link>
          </p>
        </Form.Item>
      </Form>
    </div>
  )
}
