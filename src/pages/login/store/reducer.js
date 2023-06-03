import { fromJS } from "immutable";
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    login: false
})


const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return state.set('login', true)
        default:
            return state
    }
}


export default reducer