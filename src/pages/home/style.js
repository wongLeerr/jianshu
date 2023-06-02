import styled from "styled-components";

// 首页包裹容器
export const HomeWrapper = styled.div`
    overflow:hidden;
    width: 960px;
    margin: 0 auto;
`

// 顶部左右布局-左部
export const HomeLeft = styled.div`
    float: left;
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    .banner-img {
        width: 625px;
        height: 270px;
        border-radius: 10px;
    }
`

// Topic 组件包裹容器
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
    float: left;
    overflow: hidden;
    height: 32px;
    padding-right:10px;
    margin-left: 18px;
    margin-bottom: 18px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color:#000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .topic-pic {
        float: left;
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        float: right;
        display: block;
        width: 125px;
        height: 100px;
        border-radius: 10px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    h3 {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: #333;
    }
    p {
        margin: 5px 0 8px;
        padding-right: 10px;
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`

export const MoreTopic = styled.div`
    float: left;
    font-size: 14px;
    color:gray;
    cursor: pointer;
    margin-left: 18px;
    line-height: 32px;
`

// 顶部左右布局-右部
export const HomeRight = styled.div`
    width: 280px;
    float: right;
`

export const RecommendWrapper = styled.div`
    width: 280px;
    margin: 30px 0;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl} );
    background-size: contain;
    margin-bottom: 6px;
`

export const DownloadWrapper = styled.div`
    overflow: hidden;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .left {
        img {
            float: left;
            vertical-align: middle;
            width: 60px;
            height: 60px;
            opacity: .85;
        }
    }
    .right {
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;
        margin-top: 10px;
        header{
            font-size: 15px;
            color: #333;
            margin-bottom: 10px;
        }
        p {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`

export const WriterWrapper = styled.div`
     padding-top: 20px;
     border-top: 1px solid #dcdcdc;
    .header {
        font-size: 14px;
        color: #969696;
        text-align: left;
        .change {
            float: right;
            .icon {
                margin-right: 5px;
            }
        }
    }
    .list {

        li {
            margin-top: 18px;
            overflow: hidden;
        }
        .content-warpper {
            padding: 5px 0 0 5px;
        }
        img {
            float: left;
            width: 48px;
            height: 48px;
            margin-right: 10px;
            border-radius: 50%;
        }
        .author {
            font-size: 14px;
            color: #333;
            .guanzhu {
                float: right;
                font-size: 13px;
                color: #42c02e;
            }
        }
        .content {
            margin-top: 12px;
            font-size: 12px;
            color: #969696;
        }
    }
    .look-more {
        width: 278px;
        height: 35px;
        text-align: center;
        font-size: 13px;
        color: #787878;
        background-color: #f7f7f7;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        margin-top: 20px;
        line-height: 35px;
    }
`



