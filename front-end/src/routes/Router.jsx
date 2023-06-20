import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../login/Login";
import SignUp from "../signup/SignUp";

const Router = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                {/* <Route path="/memo" element={<Login/>}/> */}
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router