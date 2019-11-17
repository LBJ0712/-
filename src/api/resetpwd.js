import request from '@/plugin/axios'

export function resetpwd (data) {
  return request({
    url: '/userinfo/actions/resetpwd',
    method: 'put',
    params: data
  })
}

export function resetpwdAPI (data) {
  return request({
    url: '/userinfo/actions/resetpwd',
    method: 'put',
    params: data
  })
}
