import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem,
    MoreTopic
} from '../style'


class Topic extends Component {
    render() {
        const { topicList } = this.props
        const tempTopicList = topicList.toJS()
        return (
            <TopicWrapper>
                {
                    tempTopicList.map((item) => {
                        return (
                            <TopicItem key={item.id}>
                                <img className="topic-pic" src={item.imgUrl} alt="" />
                                {item.title}
                            </TopicItem>
                        )
                    })
                }
                <MoreTopic>
                    更多热门专题 {`>`}
                </MoreTopic>
            </TopicWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topicList: state.get('home').get('topicList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topic)