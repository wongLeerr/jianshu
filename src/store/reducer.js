import { combineReducers } from "redux-immutable";
import { reducer as headerReducer } from '../commen/header/store'

export default combineReducers({
    header: headerReducer
})