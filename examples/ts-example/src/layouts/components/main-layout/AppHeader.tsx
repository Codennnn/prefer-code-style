import {
  ExpandLeft,
  ExpandRight,
  FullScreen,
  Logout,
  OffScreen,
  Search,
  SettingOne,
  TableReport,
  User,
} from '@icon-park/react'
import { Avatar, Dropdown, Input, Menu } from 'antd'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import Logo from '@/assets/logo48.png'
import { useTypedDispatch, useTypedSelector } from '@/redux'
import { closeSider, openSider, signOut } from '@/redux/app/app-actions'
import { removeToken } from '@/utils/token'

import Application from './app-header/Application'
import Notice from './app-header/Notice'

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  height: 38px;
  background-color: var(--app-bg);
  border-radius: 9999px;
  & {
    .ant-input-affix-wrapper,
    .ant-input {
      background: transparent;
      border: none;
      box-shadow: none;
    }
  }
`

interface AppHeaderProps {
  isSiderOpened: boolean
  isFullScreen: boolean
  switchFullscreen: () => void
}

export default function AppHeader({
  isSiderOpened,
  isFullScreen,
  switchFullscreen,
}: AppHeaderProps) {
  const dispatch = useTypedDispatch()
  const info = useTypedSelector(({ user }) => user.info)
  const iconGroup = {
    open: ExpandRight,
    close: ExpandLeft,
  }
  const ExpandIcon = iconGroup[isSiderOpened ? 'open' : 'close']
  const ScreenIcon = isFullScreen ? OffScreen : FullScreen

  const history = useHistory()

  const routeTo = (path, clickFunc) => {
    if (path) {
      history.push(path)
    } else {
      clickFunc()
    }
  }

  const handleLogout = () => {
    removeToken()
    dispatch(signOut())
    history.replace('/')
  }

  const menuItems: {
    title: string
    icon
    path: string
    clickFunc?: () => void
  }[] = [
    { title: '个人中心', icon: User, path: '/page1' },
    { title: '网站设置', icon: SettingOne, path: '/page2' },
    { title: '登录日志', icon: TableReport, path: '/page2' },
  ]

  const menu = (
    <Menu className="header-menu overflow-hidden" style={{ padding: 0 }}>
      <div
        style={{
          background: 'rgba(var(--primary), .05)',
          borderTop: '3px solid rgba(var(--primary), 1)',
        }}
      >
        <div className="flex items-center px-6 py-4">
          <Avatar
            className="mr-4 cursor-pointer select-none"
            size={45}
            src={info.avatar}
          />
          <div>
            <div className="mt-2 text-lg font-bold">
              {info.nickname || '暂无昵称'}
            </div>
            <div className="text-sm text-gray-500">
              {info.email || '未绑定邮箱'}
            </div>
          </div>
        </div>
      </div>

      {menuItems.map(({ title, icon: Icon, path, clickFunc }) => (
        <Menu.Item
          key={title}
          className="header-menu__item flex items-center px-8 py-3"
          onClick={() => routeTo(path, clickFunc)}
        >
          <Icon className="mr-2" size={18} />
          {title}
        </Menu.Item>
      ))}
      <Menu.Divider />
      <Menu.Item
        key="退出登录"
        className="header-menu__item logout-item flex items-center px-8 py-3"
        onClick={handleLogout}
      >
        <Logout className="mr-2" size={18} />
        退出登录
      </Menu.Item>
    </Menu>
  )

  return (
    <div className="header">
      {/* LOGO */}
      <div className="brand-box">
        <img alt="logo" className="brand-box__logo" src={Logo} />
        <div className="brand-box__text">React Admin</div>
      </div>

      <div className="header-right">
        <div className="flex items-center">
          <ExpandIcon
            className="ml-2 mr-4 cursor-pointer"
            fill="#718096"
            size="22"
            title={isSiderOpened ? '收起' : '展开'}
            onClick={() => {
              isSiderOpened ? dispatch(closeSider()) : dispatch(openSider())
            }}
          />
          <SearchInput>
            <Input
              placeholder="搜索..."
              prefix={<Search size={16} />}
              style={{ marginRight: '4px', color: '#718096' }}
            />
          </SearchInput>
        </div>

        <div className="ml-auto flex h-full items-center">
          <div className="mr-6 flex items-center">
            <Application className="mr-4" />
            <ScreenIcon
              className="mr-4 cursor-pointer"
              size={23}
              onClick={switchFullscreen}
            />
            <Notice />
          </div>
          <Dropdown overlay={menu} trigger={['click']}>
            <div className="flex h-full cursor-pointer select-none items-center">
              <Avatar size="large" src={info.avatar} />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
