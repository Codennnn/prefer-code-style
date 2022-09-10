import './UserLayout.scss'

import { Carousel } from 'antd'
import { lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom'

import Logo from '@/assets/logo48.png'
import userPlate1 from '@/assets/user_plate_1.png'
import userPlate2 from '@/assets/user_plate_2.png'
import userPlate3 from '@/assets/user_plate_3.png'

const Login = lazy(
  () => import(/* webpackChunkName: 'Login' */ '@/views/login/Login')
)
const Register = lazy(
  () => import(/* webpackChunkName: 'Register' */ '@/views/login/Register')
)

export default function UserLayout() {
  const { path } = useRouteMatch()

  return (
    <div className="user-layout">
      <div className="user-layout__left">
        <div className="form-area">
          <div className="flex items-center">
            <img alt="logo" className="w-8 mr-4" src={Logo} />
            <div className="text-2xl font-bold whitespace-no-wrap brand-box__text">
              React Admin
            </div>
          </div>

          <Switch>
            <Route exact path={`${path}/login`}>
              <Helmet>
                <title>{`登录 - ${APP_PAGE_TITLE}`}</title>
              </Helmet>
              <Login />
            </Route>

            <Route exact path={`${path}/register`}>
              <Helmet>
                <title>{`注册 - ${APP_PAGE_TITLE}`}</title>
              </Helmet>
              <Register />
            </Route>

            <Redirect exact from="/user" to={`${path}/login`} />

            <Redirect to="/404" />
          </Switch>
        </div>

        <div className="text-sm footer">
          <ul className="flex items-center mb-2">
            <li className="mr-6 cursor-pointer primary">项目地址</li>
            <li className="mr-6 cursor-pointer primary">源码仓库</li>
            <li className="mr-6 cursor-pointer primary">Github</li>
          </ul>
          <p>This website is made by 令狐少侠</p>
        </div>
      </div>

      <div className="user-layout__right">
        <div style={{ width: '400px' }}>
          <Carousel autoplay centerMode draggable effect="fade">
            {[
              {
                img: userPlate1,
                title: 'Resources',
                text: '在成熟度模型中，迈向REST的第一步就是引入资源的概念',
              },
              {
                img: userPlate2,
                title: 'HTTP Verbs',
                text: 'REST倡导者建议使用所有HTTP动词，还试图从Web的成功之处来学习和借鉴',
              },
              {
                img: userPlate3,
                title: 'HATEOAS',
                text: '超媒体控制的关键在于它告诉我们下一步我们可以做什么，以及操作所需资源的URI',
              },
            ].map(({ img, title, text }) => (
              <div key={title}>
                <img alt="logo" className="w-full" src={img} />
                <div className="pt-4 pb-10">
                  <h2 className="mb-2 text-xl font-bold text-center">
                    {title}
                  </h2>
                  <p className="text-center">{text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  )
}
