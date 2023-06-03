import styled from 'styled-components'

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    top: 56px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
`

export const LoginBox = styled.div`
    padding-top: 30px;
    width:400px;
    height: 220px;
    margin: 100px auto;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);

`

export const Input = styled.input`
    display: block;
    width:200px;
    height: 30px;
    margin: 20px auto;
    padding: 4px 12px 4px 35px;
    border-radius: 4px;
    border: 1px solid #c8c8c8;
    outline: none;
    background-color: hsla(0,0%,71%,.1);
`

export const Button = styled.button`
    width: 200px;
    padding: 9px 0px;
    margin: 10px auto;
    border-radius: 25px;
    font-size: 18px;
    display: block;
    background: #3194D0;
    text-align: center;
    border: 1px solid #3194D0;
    color: #fff;
`