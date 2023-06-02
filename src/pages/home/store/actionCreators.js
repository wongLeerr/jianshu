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