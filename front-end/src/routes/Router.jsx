import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "../login/Login";
import SignUp from "../signup/SignUp";
import Layout from '../main/Layout';
import Main from '../main/Main';
import UserInfoUpdate from '../user/UserInfoUpdate';


const Router = () => {
  return (
    <>

        <BrowserRouter>
            <Routes>
              <Route>
                  <Route path="/*" element={<Layout/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/signup" element={<SignUp/>}/>
                  <Route path="/userinfo/:userId" element={<UserInfoUpdate/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Router