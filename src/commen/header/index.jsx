import React, { Component } from 'react'
// import { toJS } from 'immutable'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'
import { Link } from 'react-router-dom'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList,
    Addtion,
    Button,
    SearchWrapper
} from './style'


class Header extends Component {

    getListArea(show) {
        const { list, page, handleMouseEnter, handleMouseLeave, handleClick, mouseIn } = this.props
        const newList = list.toJS()
        let pageList = []
        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (newList[i] !== undefined)
                    pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if (show || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => { handleClick(this.spinIcon) }}><i ref={(cur) => { this.spinIcon = cur }} className='iconfont spin'> &#xe606;</i>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>

                        {
                            pageList.map((item) => {
                                return item;
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null
        }
    }

    render() {
        const { focused, handleInputBlur, handleInputFocus, list, login, logout } = this.props
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo></Logo>
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        login ? <NavItem className="right" onClick={logout}>退出</NavItem> : <Link to={'/login'}><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className='iconfont'>&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames={'slide'}
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={() => { handleInputFocus(list) }}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60c;</i>
                        {this.getListArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addtion>
                    <Button className='writting'>
                        <Link to="/write"><i className='iconfont'>&#xe615;</i>写文章</Link>
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addtion>
            </HeaderWrapper>
        )
    }

}



const mapStateToProps = (state) => {
    // 返回出去的对象即为UI组件收到的props
    return {
        focused: state.get('header').get('focused'),
        list: state.get('header').get('list'),
        totalPage: state.get('header').get('totalPage'),
        page: state.get('header').get('page'),
        mouseIn: state.get('header').get('mouseIn'),
        login: state.get('login').get('login')
    }
}

const mapDispatchToProps = (dispatch) => {
    // 此处返回的对象即为UI组件收到的props，调用这些方法可篡改store中的数据
    return {

        // 处理顶部搜索框focus事件
        handleInputFocus(list) {
            // 获取热搜模块数据
            if (list.size === 0) {
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },

        // 处理顶部搜索框的blur事件
        handleInputBlur() {
            dispatch(actionCreators.searchFocus())
        },

        // 处理热搜模块鼠标移入移出事件
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },

        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },

        handleClick(spin) {
            // 实现换一换前面logo的旋转
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if (originAngle) {
                originAngle = parseInt(originAngle, 10)
            } else {
                originAngle = 0
            }
            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
            dispatch(actionCreators.changePage())
        },
        logout() {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)