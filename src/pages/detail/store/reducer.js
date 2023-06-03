import { fromJS } from "immutable"
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    title: "",
    content: ''
})

const reducer = (state = defaultState, action) => {
    const { type } = action
    switch (type) {
        case actionTypes.GET_DETAIL_INFO:
            return state.set('title', action.title).set('content', action.content)
        default:
            return state;
    }
}

export default reducer