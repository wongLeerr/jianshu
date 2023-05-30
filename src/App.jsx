import React, { Component } from "react";
import { Globalstyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import Header from './commen/header/index'
import store from "./store";
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle></Globalstyle>
        <GlobalFontStyle></GlobalFontStyle>
        <Provider store={store}>
          <Header></Header>
        </Provider>
      </div>
    )
  }
}