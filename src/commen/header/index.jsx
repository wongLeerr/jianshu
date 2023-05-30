import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
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


const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>科技</SearchInfoItem>
                    <SearchInfoItem>娱乐</SearchInfoItem>
                    <SearchInfoItem>javascript</SearchInfoItem>
                    <SearchInfoItem>生活方式</SearchInfoItem>
                    <SearchInfoItem>运动</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        )
    } else {
        return null
    }
}

const Header = (props) => {
    return (
        <HeaderWrapper>
            <Logo></Logo>
            <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                    <i className='iconfont'>&#xe636;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames={'slide'}
                    >
                        <NavSearch
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'focused iconfont' : 'iconfont'}>&#xe60c;</i>
                    {getListArea(props.focused)}
                </SearchWrapper>
            </Nav>
            <Addtion>
                <Button className='writting'>
                    <i className='iconfont'>&#xe615;</i>
                    写文章
                </Button>
                <Button className='reg'>注册</Button>
            </Addtion>
        </HeaderWrapper>
    )
}


const mapStateToProps = (state) => {
    // 返回出去的对象即为UI组件收到的props
    return {
        focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = (dispatch) => {
    // 此处返回的对象即为UI组件收到的props，调用这些方法可篡改store中的数据
    return {

        // 处理顶部搜索框focus事件
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },

        // 处理顶部搜索框的blur事件
        handleInputBlur() {
            dispatch(actionCreators.searchFocus())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)