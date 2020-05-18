import _ from 'loadsh';
const initialState = {
    datas: [],
    pagesdata: [],
    count: 0
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'DEFAULT_DATA':
            state.datas = payload.users;
            return {...state, datas: _.cloneDeep(state.datas) }; //数据持久化
        case 'SEAR_DATA':
            state.datas = payload.users;
            return {...state, datas: _.cloneDeep(state.datas) };
        case 'ADD_DATA':
            return {...state, datas: _.cloneDeep(state.datas) };
        case 'SAMPLE_DATA':
            return {...state, pagesdata: _.cloneDeep(payload.result.list), count: payload.result.count };
        default:
            return state
    }
}