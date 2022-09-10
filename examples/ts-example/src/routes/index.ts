import {
  AdProduct,
  ChartLine,
  ExperimentOne,
  GraphicDesign,
  MessageOne,
  Rss,
  System,
} from '@icon-park/react'
import { lazy } from 'react'

import type { RouteItem } from '@/types'

const Dashboard1 = lazy(() => import('@/views/dashboard/Dashboard1'))
const Dashboard2 = lazy(() => import('@/views/dashboard/Dashboard2'))
const Dashboard3 = lazy(() => import('@/views/dashboard/Dashboard3'))
const ProjectList = lazy(() => import('@/views/project/ProjectList'))
const ProjectGrid = lazy(() => import('@/views/project/ProjectGrid'))
const NewProject = lazy(() => import('@/views/project/NewProject'))
const Notice = lazy(() => import('@/views/notice/Notice'))
const Page = lazy(() => import('@/views/page/Page'))
const Test = lazy(() => import('@/views/test/Test'))

type RouteArray<T> = T[] | RouteArray<T>[]

export type Routes = RouteArray<RouteItem>

const routes: Routes = [
  {
    title: '数据分析',
    icon: ChartLine,
    children: [
      {
        path: '/index',
        title: '系统仪表盘',
        component: Dashboard1,
      },
      {
        path: '/dashboard2',
        title: '业务仪表盘',
        component: Dashboard2,
      },
      {
        path: '/dashboard3',
        title: '数据仪表盘',
        component: Dashboard3,
      },
    ],
  },

  {
    title: '项目管理',
    icon: AdProduct,
    children: [
      {
        path: '/project-list',
        title: '项目列表',
        component: ProjectList,
      },
      {
        path: '/project-grid',
        title: '项目栅格',
        component: ProjectGrid,
      },
      {
        path: '/new-project',
        title: '创建新项目',
        component: NewProject,
      },
    ],
  },

  {
    title: '消息中心',
    path: '/notice',
    component: Notice,
    icon: MessageOne,
  },
  {
    title: '业务办理',
    path: '/page2',
    component: Page,
    icon: System,
  },
  {
    title: '图像编辑',
    path: '/editor',
    component: Page,
    icon: GraphicDesign,
  },
  {
    title: '嵌套菜单',
    icon: Rss,
    children: [
      {
        path: '/page3',
        title: '页面3',
        component: Page,
      },
      {
        title: '二级嵌套菜单',
        key: 'menu2',
        children: [
          {
            path: '/page4',
            title: '页面4',
            component: Page,
          },
        ],
      },
    ],
  },
  {
    title: '功能测试',
    path: '/test',
    hidden: process.env.NODE_ENV !== 'development',
    component: Test,
    icon: ExperimentOne,
    permissions: ['test'],
  },
]

export default routes
