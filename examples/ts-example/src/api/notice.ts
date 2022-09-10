import request from '@/utils/axios'

export function getNoticeList(params) {
  return request({
    url: '/notice/list',
    method: 'get',
    params,
  })
}

export function deleteNotice(data) {
  return request({
    url: '/notice',
    method: 'delete',
    data,
  })
}

export function getNoticeCount() {
  return request({
    url: '/notice/count',
    method: 'get',
  })
}
