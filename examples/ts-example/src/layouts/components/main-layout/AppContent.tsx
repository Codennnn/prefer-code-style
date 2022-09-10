import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom'

import { useTypedDispatch, useTypedSelector } from '@/redux'
import { signOut } from '@/redux/app/app-actions'
import { hasRoutePermission } from '@/utils'
import { getToken } from '@/utils/token'

function createRoutes(routes, permissions?: string[]) {
  return routes.map(
    ({
      path,
      title,
      exact,
      children,
      component: Component,
      permissions: routePermission,
    }) => {
      if (!hasRoutePermission(routePermission, permissions)) {
        return null
      }
      if (children?.length > 0) {
        return createRoutes(children)
      }
      return (
        <Route key={path} exact={exact || false} path={path}>
          <Helmet>
            <title>
              {title ? `${title} - ${APP_PAGE_TITLE}` : APP_PAGE_TITLE}
            </title>
          </Helmet>
          <Component />
        </Route>
      )
    }
  )
}

export default function AppContent({ routes }) {
  const dispatch = useTypedDispatch()
  const location = useLocation()
  const history = useHistory()
  const permissions = useTypedSelector(({ user }) => user.info?.permissions)

  useEffect(() => {
    if (!getToken()) {
      dispatch(signOut())
      history.replace('/')
    }
  }, [location, dispatch, history])

  return (
    <Switch>
      {createRoutes(routes, permissions)}
      <Redirect to="/404" />
    </Switch>
  )
}

AppContent.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
