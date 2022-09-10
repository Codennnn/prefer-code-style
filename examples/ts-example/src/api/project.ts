import request from '@/utils/axios'

export function getProjectList(params) {
  return request({
    url: '/project/list',
    method: 'get',
    params,
  })
}

export function createProject(data) {
  return request({
    url: '/project',
    method: 'post',
    data,
  })
}
