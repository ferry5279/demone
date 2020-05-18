import {get, post } from '@/untils/request';
import {
    DEFAULT_DATA,
    SEAR_DATA,
    ADD_DATA,
    SAMPLE_DATA
} from '@/constants/actionTypes'
import api from '@/services/api'
export function defaultData(payload) {
    return {
        type: DEFAULT_DATA,
        payload: get('https://api.baxiaobu.com/index.php/home/v5/findUser')
    }
}
export function searData(opt) {
    return {
        type: SEAR_DATA,
        payload: get(`/apb${api.sear}?keyword=` + opt)
    }
}
export function addData(opt) {
    return {
        type: ADD_DATA,
        payload: post(`/apb${api.add}`, opt)
    }
}
export function sampleData(opt) {
    return {
        type: SAMPLE_DATA,
        payload: get(`/apa${api.listWithPage}?page=` + opt)
    }
}