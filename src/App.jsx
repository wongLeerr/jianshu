import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Globalstyle } from './style'
import { GlobalFontStyle } from './statics/iconfont/iconfont'
import Header from './commen/header/index'
import Home from "./pages/home";
import Detail from "./pages/detail";
import Login from './pages/login'
import Write from "./pages/write";
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
              <Route path="/" exact Component={Home}></Route>
              <Route path="/detail/:id" exact Component={Detail}></Route>
              <Route path="/login" exact Component={Login}></Route>
              <Route path="/write" exact Component={Write}></Route>
            </Routes>
          </BrowserRouter>
        </Provider>
      </div>
    )
  }
}