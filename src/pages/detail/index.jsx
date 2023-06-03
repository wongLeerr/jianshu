import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import {
    DetailWrapper,
    Header,
    Content,
    Author,
    Title,
    Time,
    Praise
} from './style'


class Detail extends PureComponent {
    render() {
        const { title, content } = this.props
        return (
            <DetailWrapper>
                <Header>{title}</Header>
                <Author>
                    <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt="" />
                    <Title>
                        <span className='nickname'>长安小生</span>
                        <button>关注</button>
                        <span className='address'>IP属地：陕西</span>
                    </Title>
                    <Time>
                        <span className='hot'>0.17</span>
                        <span>2023.06.02 &nbsp; 21:20:56</span>
                        <span>字数 &nbsp;266</span>
                        <span>阅读&nbsp;18</span>
                    </Time>
                </Author>
                <Content dangerouslySetInnerHTML={{ __html: content }}></Content>
                <Praise>
                    <div className='left'>
                        <span>↑</span>
                        <span>1人点赞 {' >'}</span>
                        <span>↓</span>
                    </div>
                    <div className='right'>
                        <span>历史趣闻</span>
                        <div className='circle'>···</div>
                    </div>
                </Praise>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        const { getDetailData } = this.props
        getDetailData()
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getDetailData() {
            dispatch(actionCreators.fetchDetailData())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)