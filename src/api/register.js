import request from '@/plugin/axios'

export function register(data) {
    return request({
        url: '/userinfo/actions/register',
        method: 'post',
        params: data
    })
}