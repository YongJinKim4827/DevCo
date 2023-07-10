import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useState } from 'react';

const UserInfo = () => {
    const [userItem, setUserItem] = useState({
        userId : '',
        userName : '',
        userPassword :'',
        birth : '',
        email : '',
        gender : ''
    })

    const changeUserItem = (event) => {

    }

    useEffect(() => {
        axios.get(`${REQUEST_ORIGIN}/user/select`,{
            params : {
                id : jwtDecode(userJwt).sub
            }
        })
        .then((res) => {
            let data = res.data[0];
            setUserItem(data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
  return (
        <div className='div-user-info-wrapper'>
            <h4 style={{fontWeight : 'bold'}}>회원 정보</h4>
            <div className='div-user-info-input'>
                <label>아이디</label>
                <input type='text' value={userItem.userId ? userItem.userId : ''} onChange={changeUserItem}/>
            </div>
            <div className='div-user-info-input'>
                <label>이름</label>
                <input type='text' value={userItem.userName ? userItem.userName: ''} onChange={changeUserItem}/>
            </div>
            <div className='div-user-info-input'>
                <label>패스워드</label>
                <input type='text' value={userItem.userPassword ? "***************" : ''} onChange={changeUserItem}/>
            </div>
            <div className='div-user-info-input'>
                <label>이메일</label>
                <input type='text' value={userItem.email ? userItem.email : ''} onChange={changeUserItem}/>
            </div>
            <div style={{display : 'flex', justifyContent : 'end', marginTop : '10px'}}>
                <button style={{color : '#0d6efd', fontWeight : 'bold'}}>저장</button>
            </div>
        </div>
  )
}

export default UserInfo