import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'

class Login extends PureComponent {
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder='账号' ref={(curNode) => { this.account = curNode }} ></Input>
                    <Input placeholder='密码' type="password" ref={(curNode) => { this.password = curNode }}></Input>
                    <Button onClick={() => { this.props.login(this.account.value, this.password.value) }}>登录</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login(account, password) {
            dispatch(actionCreators.login(account, password))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)



