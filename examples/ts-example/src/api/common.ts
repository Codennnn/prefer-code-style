import request from '@/utils/axios'

export function getDashboardTableData(params) {
  return request({
    url: '/common/dashboard_table_data',
    method: 'get',
    params,
  })
}

export function login(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data,
  })
}
