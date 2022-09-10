import './user'
import './notice'
import './project'

import Mock from 'mockjs'

Mock.mock('/common/dashboard_table_data', 'get', {
  code: 2000,
  data: {
    list: [
      {
        id: 'SK2450',
        name: '令狐少侠',
        date: '2020-06-25',
        total: 1280,
        status: 1,
        payment: '微信支付',
      },
      {
        id: 'SK2451',
        name: '陈永仁',
        date: '2020-06-25',
        total: 880,
        status: 1,
        payment: '支付宝支付',
      },
      {
        id: 'SK2452',
        name: '刘建明',
        date: '2020-06-26',
        total: 968,
        status: 0,
        payment: '支付宝支付',
      },
      {
        id: 'SK2453',
        name: '黄志诚',
        date: '2020-06-26',
        total: 1029,
        status: 2,
        payment: '微信支付',
      },
      {
        id: 'SK2454',
        name: '韩琛',
        date: '2020-07-02',
        total: 1029,
        status: 1,
        payment: '支付宝支付',
      },
    ],
  },
})

Mock.setup({
  timeout: '300-500',
})
