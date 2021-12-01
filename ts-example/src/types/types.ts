export interface RouteItem {
  /** 显示在侧边栏的名称 */
  title: string
  /** 页面路由组件 */
  component?: React.LazyExoticComponent<() => JSX.Element> | JSX.Element
  /** 图标 */
  icon?
  /** 路径 */
  path?: string
  /** 子菜单路由 */
  children?: RouteItem[]
  /** 权限列表 */
  permissions?: string[]
  /** 控制是否在侧边栏中显示 */
  hidden?: boolean
  key?: string
}

export interface User {
  username: string
  password: string
  email: string
  avatar: string
  permissions: string[]
}
