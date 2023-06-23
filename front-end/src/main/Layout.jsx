import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main'
import BoardList from '../board/BoardList'

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
        </Routes>
        <Footer/>
    </div>
  )
}

export default Layout