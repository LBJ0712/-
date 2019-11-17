import request from '@/plugin/axios'

export function AccountLogin (data) {
  return request({
    url: '/userinfo/actions/login',
    method: 'post',
    params: data
  })
}
