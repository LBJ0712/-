import request from '@/plugin/axios'

export function updateEmailAPI (data) {
  return request({
    url: '/userinfo/mail',
    method: 'put',
    params: data
  })
}