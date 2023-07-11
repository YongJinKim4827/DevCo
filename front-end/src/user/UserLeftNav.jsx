import React from 'react'
import { useNavigate } from 'react-router-dom'
import './user.css';
import { getJwtRole } from '../login/Cookies';

const UserLeftNav = () => {
    const navigation = useNavigate();
  return (
        <>
          <div className='div-user-nav'>
              <h3 style={{fontWeight : '600', marginBottom : '25px'}}>내 계정</h3>
              <button onClick={(event) => {navigation("/user")}}>회원정보</button>
              <button onClick={(event) => {navigation("/user/account")}}>계정</button>
              <button onClick={(event) => {navigation("/user/activity")}}>활동이력</button>
              <button onClick={(event) => {navigation("/user/myboard")}}>나의 게시글</button>
              {
                getJwtRole() === ADMIN_USER ? 
                <button onClick={(event) => {navigation("/user/admin")}}>사용자 관리</button>
                :''
              }
          </div>
        </>
        
  )
}

export default UserLeftNav