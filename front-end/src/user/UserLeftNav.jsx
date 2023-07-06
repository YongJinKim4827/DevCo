import React from 'react'
import { useNavigate } from 'react-router-dom'
import './user.css';

const UserLeftNav = () => {
    const navigation = useNavigate();

  return (
        <>
          <div className='div-user-nav'>
              <h3 style={{fontWeight : '600', marginBottom : '25px'}}>내 계정</h3>
              <button onClick={(event) => {navigation("/user")}}>회원정보</button>
              <button onClick={(event) => {navigation("/user/account")}}>계정</button>
              <button onClick={(event) => {navigation("/user/activity")}}>활동이력</button>
          </div>
          <div>

          </div>
        </>
        
  )
}

export default UserLeftNav