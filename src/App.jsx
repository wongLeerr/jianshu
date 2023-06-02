import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Globalstyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import Header from './commen/header/index'
import Home from "./pages/home";
import Detail from "./pages/detail";
import store from "./store";
import { Provider } from 'react-redux'

export default class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle></Globalstyle>
        <GlobalFontStyle></GlobalFontStyle>
        <Provider store={store}>
          <BrowserRouter>
            <Header></Header>
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/detail" Component={Detail}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}