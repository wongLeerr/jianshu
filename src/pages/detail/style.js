import styled from 'styled-components'

export const DetailWrapper = styled.div`
    overflow:hidden;
    width:620px;
    margin: 0 auto;
    padding-bottom:100px;
`
export const Header = styled.div`
    margin: 50px 0 20px 0;
    line-height: 44px;
    font-size: 34px;
    color:#333;
    font-weight:bold;
`

export const Content = styled.div`
    color:#2f2f2f;
    img {
        width:100%;
        margin-bottom: 20px;
    }
    p {
        font-size:16px;
        margin-bottom: 20px;
        word-break: break-word;
        font-weight: 400;
        line-height: 1.8;
        b {
            font-weight: 600;
        }
    }
`

export const Author = styled.div`
    margin:0  0 30px ;
    overflow: hidden;
    img {
        float: left;
        display: block;
        width: 50px;
        height: 50px;
        border-radius:50%;
        margin-right: 10px;
    }
`


export const Title = styled.div`
    display: flex;
    align-items: center;
    .nickname {
        font-size: 16px;
        font-weight: 500;
    }
    button {
        font-size: 12px;
        margin: 0 5px 0;
        padding:  5px 7x 5px;
        line-height: 1.2;
        background-color: #fff;
        color:#ec7259;
        border:1px solid #ec7259;
        border-radius:8px;
    }
    .address {
        font-family: PingFangSC,PingFangSC-Regular;
        font-size: 13px;
        font-weight: 400;
        text-align: left;
        color: #9a9a9a;
        line-height: 11px;
    }
`

export const Time = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 15px;
    color:#969696;
    width: 300px;
    font-size: 13px;

    .hot {
        margin-right: 10px;
        color:#ec7259;
    }
    
`


export const Praise = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #969696;
    .left {
        span {
            margin:  0 15px;
        }
    }

    .right {
        display: flex;
        align-items: center;
        .circle {
            margin-left: 20px;
            font-size: 20px;
            font-weight: 500;
        }
    }
`

