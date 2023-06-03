import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Write extends PureComponent {

    render() {
        const { loginStatus } = this.props
        if (loginStatus) {
            return (
                <div>写文章页面...</div>
            )
        } else {
            return <Navigate to='/login'></Navigate>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Write)



