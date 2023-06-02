import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
import { connect } from 'react-redux'


class Recommend extends Component {
    render() {
        const { recommendList } = this.props
        return (
            <RecommendWrapper>
                {
                    recommendList.map((item) => {
                        return (
                            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
                        )
                    })
                }
            </RecommendWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        recommendList: state.get('home').get('recommendList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Recommend)