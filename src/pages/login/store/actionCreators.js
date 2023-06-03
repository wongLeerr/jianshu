import * as actionTypes from './actionTypes'
import axios from 'axios'


const loginSuccess = () => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        login: true
    }
}

export const login = (account, password) => {
    return (dispatch) => {
        axios.get(`/api/login.json?account=${account}&password=${password}`)
            .then((res) => {
                const { success } = res.data
                if (success) {
                    dispatch(loginSuccess())
                } else {
                    alert("失败!")
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }

}