import axios from "axios"
import { fromJS } from 'immutable'
import * as actionTypes from '../store/actionTypes'

const createHomeAction = (data) => {
    return {
        type: actionTypes.GET_HOME_DATA,
        topicList: fromJS(data.topicList),
        articleList: fromJS(data.articleList),
        recommendList: fromJS(data.recommendList)
    }
}

const addHomeList = (data, page) => {
    return {
        type: actionTypes.ADD_HOME_LIST,
        data: fromJS(data),
        nextPage: page
    }
}

export const fetchHomeData = () => {
    return (dispatch) => {
        // 发请求
        axios.get('/api/home.json')
            .then((res) => {
                // 修改store中的数据
                dispatch(createHomeAction(res.data.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const createLoadMore = (page) => {
    return (dispatch) => {
        // 发请求获取更多数据
        axios.get('/api/homeList.json?page=' + page)
            .then((res) => {
                // 修改store中的数据
                dispatch(addHomeList(res.data.data, page + 1))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}

export const changeBackTop = (show) => {
    return {
        type: actionTypes.CHANGE_BACKTOP,
        show: show
    }
}
