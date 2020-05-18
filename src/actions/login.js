import { post } from '@/untils/request';
export function logins(opt) {
    return {
        type: 'LOGIN_DATA',
        payload: post('https://api.baxiaobu.com/index.php/home/v1/login', opt)
    }
}
export function regs(opt) {
    return {
        type: 'REG_DATA',
        payload: post('http://api.baxiaobu.com/index.php/home/v1/register', opt)
    }
}