import request from '@/plugin/axios'

export function getCaptcha () {
    return request({
        url: '/userinfo/captcha',
        method: 'get',
    })
}