import React, { PureComponent } from 'react'
import { DownloadWrapper } from '../style'

export default class Download extends PureComponent {
    render() {
        return (
            <DownloadWrapper>
                <div className='left'>
                    <img src="https://upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp" alt="" />
                </div>
                <div className='right'>
                    <header>下载简书手机App {' >'}</header>
                    <p>随时随地发现和创作内容</p>
                </div>
            </DownloadWrapper>
        )
    }
}
