import React, { Component } from 'react'
import List from './components/List.jsx'
import Recommend from './components/Recommend.jsx'
import Topic from './components/Topic.jsx'
import Writer from './components/Writer.jsx'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './style'


class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="http://upload.jianshu.io/admin_banners/web_images/4682/cef3102cc521ac4b87a82b5c6f93300ba0aa21c8.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend></Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home