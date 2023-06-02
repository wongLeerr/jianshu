import { fromJS } from "immutable"
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    page: 1,
    showBackTopBtn: false
})

const reducer = (state = defaultState, action) => {
    const { type } = action
    switch (type) {
        case actionTypes.GET_HOME_DATA:
            return state.merge({
                topicList: action.topicList,
                articleList: action.articleList,
                recommendList: action.recommendList
            })
        case actionTypes.ADD_HOME_LIST:
            return state.merge({
                articleList: state.get('articleList').concat(action.data),
                page: action.nextPage
            })
        case actionTypes.CHANGE_BACKTOP:
            return state.set('showBackTopBtn', action.show)
        default:
            return state;
    }
}

export default reducer