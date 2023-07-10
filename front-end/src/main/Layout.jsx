import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import BoardList from '../board/BoardList'
import Writing from '../board/Writing'
import View from '../board/View'
import ChatWrapper from '../chat/ChatWrapper'
import UserSetting from '../user/UserLeftNav'
import UserLayout from '../user/UserLayout'
import UserHistory from '../user/UserHistory'

const Layout = () => {
  return (
    <div style={{width : '100vw', display:"flex", justifyContent:"space-between", flexDirection:"column"}}>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/question" element={<BoardList category={QUESTION}/>}/>
            <Route path="/knowledge" element={<BoardList category={KNOWLEDGE}/>}/>
            <Route path="/community" element={<BoardList category={COUUMNITY}/>}/>
            <Route path="/notice" element={<BoardList category={NOTICE}/>}/>
            <Route path="/writing/:category" element={<Writing/>}/>
            <Route path="/writing/:category/:boardNo" element={<Writing/>}/>
            <Route path="/view/:category/:boardNo" element={<View/>}/>
            <Route path="/chat/:user" element={<ChatWrapper/>}/>
            <Route path="/chat" element={<ChatWrapper/>}/>
            <Route path="/user/*" element={<UserLayout />}/>
            <Route path="/user/activity" element={<UserHistory />}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout