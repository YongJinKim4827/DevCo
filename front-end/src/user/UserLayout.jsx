import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserInfo from './UserInfo'
import AccountInfo from './AccountInfo'
import UserLeftNav from './UserLeftNav'

const UserLayout = () => {
  return (
    <div style={{display : 'flex', flex : "0.8", justifyContent : "center"}}>
        <UserLeftNav />
        <Routes>
            <Route path='/' element={<UserInfo />}/>
            <Route path='/account' element={<AccountInfo />}/>
        </Routes>
    </div>
  )
}

export default UserLayout