import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'


class List extends PureComponent {
    render() {
        const { articleList, handleLoadMore, page } = this.props
        return (
            <div>
                {
                    articleList.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail'}>
                                <ListItem>
                                    <img className='pic' src={item.get('imgUrl')} alt="" />
                                    <ListInfo>
                                        <h3>{item.get('title')}</h3>
                                        <p>{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <LoadMore onClick={() => { handleLoadMore(page) }}>阅读更多</LoadMore>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        articleList: state.get('home').get('articleList'),
        page: state.get('home').get('page')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadMore(page) {
            dispatch(actionCreators.createLoadMore(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)