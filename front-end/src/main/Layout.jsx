import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import BoardList from '../board/BoardList'
import Writing from '../board/Writing'
import View from '../board/View'
import ChatRoom from '../chat/ChatRoomTest'
import ChatWrapper from '../chat/ChatWrapper'

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/question" element={<BoardList category={QUESTION}/>}/>
            <Route path="/knowledge" element={<BoardList category={KNOWLEDGE}/>}/>
            <Route path="/community" element={<BoardList category={COUUMNITY}/>}/>
            <Route path="/notice" element={<BoardList category={NOTICE}/>}/>
            <Route path="/writing" element={<Writing/>}/>
            <Route path="/view/:category/:boardNo" element={<View/>}/>
            <Route path="/chat" element={<ChatWrapper/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout