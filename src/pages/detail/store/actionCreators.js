import * as actionTypes from './actionTypes'
import axios from 'axios'

const createDetailAction = (data) => {
    return {
        type: actionTypes.GET_DETAIL_INFO,
        title: data.titile,
        content: data.content
    }
}

export const fetchDetailData = () => {
    return (dispatch) => {
        // 发请求获取数据
        axios.get('/api/detail.json').then((res) => {
            dispatch(createDetailAction(res.data.data))
        }).catch((err) => {
            console.log(err)
        })

    }
}