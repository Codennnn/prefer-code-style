import * as React from 'react'
import {
  BrowserRouter,
  HashRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import MainLayout from '@/layouts/MainLayout'
import UserLayout from '@/layouts/UserLayout'
import VisualLayout from '@/layouts/VisualLayout'
import { useTypedSelector } from '@/redux'
import NotFound from '@/views/error-page/NotFound'

function AppRouter() {
  const isLogin = useTypedSelector(({ app }) => app.isLogin)
  const routeMode = {
    history: BrowserRouter,
    hash: HashRouter,
  }
  const Router: React.ElementType = routeMode[APP_ROUTER_MODE]

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to={isLogin ? '/index' : '/user/login'} />
        {isLogin ? (
          <Redirect from="/user" to="/" />
        ) : (
          <Route component={UserLayout} path="/user" />
        )}

        <Route component={NotFound} path="/404" />
        <Route component={VisualLayout} path="/visual" />

        {isLogin ? (
          <Route component={MainLayout} />
        ) : (
          <Redirect to="/user/login" />
        )}
      </Switch>
    </Router>
  )
}

export default function App() {
  return (
    <div className="app">
      <AppRouter />
    </div>
  )
}
