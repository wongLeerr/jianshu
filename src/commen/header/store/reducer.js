import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
// 默认状态
const defaultState = fromJS({
    // 输入框是否聚焦
    focused: false,
})

const reducer = (state = defaultState, action) => {

    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused', !state.get('focused'))
    }

    return state
}

export default reducer