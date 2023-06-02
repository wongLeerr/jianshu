import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
    TopicWrapper,
    TopicItem,
    MoreTopic
} from '../style'

class Topic extends PureComponent {
    render() {

        const { topicList } = this.props
        return (
            <TopicWrapper>
                {
                    topicList.map((item) => {
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className="topic-pic" src={item.get('imgUrl')} alt="" />
                                {item.get('title')}
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