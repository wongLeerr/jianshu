import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

const getListData = (data) => {
    return {
        type: actionTypes.FETCH_SEARCH_LIST,
        value: fromJS(data),
        totalPage: Math.ceil(data.length / 10)
    }
}

export const searchFocus = () => {
    return {
        type: actionTypes.SEARCH_FOCUS,
    }
}

export const mouseEnter = () => {
    return {
        type: actionTypes.MOUSE_ENTER
    }
}

export const mouseLeave = () => {
    return {
        type: actionTypes.MOUSE_LEAVE
    }
}

export const changePage = () => {
    return {
        type: actionTypes.CHANGE_PAGE,
    }
}





// 获取热搜列表数据
export const getList = () => {
    return (dispatch) => {
        // 这里异步获取数据，并且记得修改store中的数据
        axios.get('/api/headerList.json')
            .then((res) => {
                // 修改store中list中的数据
                dispatch(getListData(res.data.data))
            })
            .catch((err) => {
                console.log(err);
            })
    }
}