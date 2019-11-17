import request from '@/plugin/axios'

export function getRegisterCode (data) {
    return request({
        url: '/userinfo/register_code',
        method: 'get',
        params: data
    })
}

export function getResetpwdCode(data) {
    return request({
        url: '/userinfo/resetpwd_code',
        method: 'get',
        params: data
    })
}

export function getResetmailCode(data) {
    return request({
        url: '/userinfo/resetmail_code',
        method: 'get',
        params: data
    })
}
