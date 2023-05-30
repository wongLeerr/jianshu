// 默认状态
const defaultState = {
    // 输入框是否聚焦
    focused: false,
}

const reducer = (state = defaultState, action) => {

    if (action.type === 'search_focus') {
        const newState = JSON.parse(JSON.stringify(state))
        newState.focused = !newState.focused
        return newState
    }

    return state
}

export default reducer