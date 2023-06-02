import React, { Component } from 'react'
import { WriterWrapper } from '../style'


class Writer extends Component {
    render() {
        return (
            <WriterWrapper>
                <header className='header'>
                    <span className='title'>推荐作者</span>
                    <span className='change'>
                        <i className='iconfont icon'> &#xe606;</i>
                        换一批
                    </span>
                </header>
                <ul className='list'>
                    <li>
                        <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                        <div className='content-warpper'>
                            <div className='author'>
                                董克平日记
                                <div className='guanzhu'>+ 关注</div>
                            </div>
                            <div className='content'>写了126.1k字 · 5.9k喜欢</div>
                        </div>
                    </li>
                    <li>
                        <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                        <div className='content-warpper'>
                            <div className='author'>
                                董克平日记
                                <div className='guanzhu'>+ 关注</div>
                            </div>
                            <div className='content'>写了126.1k字 · 5.9k喜欢</div>
                        </div>
                    </li>
                    <li>
                        <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                        <div className='content-warpper'>
                            <div className='author'>
                                董克平日记
                                <div className='guanzhu'>+ 关注</div>
                            </div>
                            <div className='content'>写了126.1k字 · 5.9k喜欢</div>
                        </div>
                    </li>
                    <li>
                        <img src="https://upload.jianshu.io/users/upload_avatars/9988193/fc26c109-1ae6-4327-a298-2def343e9cd8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt='' />
                        <div className='content-warpper'>
                            <div className='author'>
                                董克平日记
                                <div className='guanzhu'>+ 关注</div>
                            </div>
                            <div className='content'>写了126.1k字 · 5.9k喜欢</div>
                        </div>
                    </li>
                </ul>
                <div className='look-more'>
                    查看全部 {'>'}
                </div>
            </WriterWrapper>
        )
    }
}

export default Writer