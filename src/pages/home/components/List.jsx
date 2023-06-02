import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'


class List extends Component {
    render() {
        const { articleList } = this.props
        return (
            <div>
                {
                    articleList.map((item) => {
                        return (
                            <ListItem key={item.get('id')}>
                                <img className='pic' src={item.get('imgUrl')} alt="" />
                                <ListInfo>
                                    <h3>{item.get('header')}</h3>
                                    <p>{item.get('content')}</p>
                                </ListInfo>
                            </ListItem>
                        )
                    })
                }
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.get('home').get('articleList')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)