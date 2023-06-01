import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
// 默认状态
const defaultState = fromJS({
    // 输入框是否聚焦
    focused: false,
    mouseIn: false,
    // 热搜模块列表数据
    list: [],
    page: 1,
    totalPage: 1,
})

const reducer = (state = defaultState, action) => {

    const { type } = action

    switch (type) {
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused', !state.get('focused'))
        case actionTypes.FETCH_SEARCH_LIST:
            return state.merge({
                list: action.value,
                totalPage: action.totalPage
            })
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true)
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false)
        case actionTypes.CHANGE_PAGE:
            return state.set('page', state.get('page') + 1 > state.get('totalPage') ? 1 : state.get('page') + 1)
        default:
            return state
    }

}

export default reducer