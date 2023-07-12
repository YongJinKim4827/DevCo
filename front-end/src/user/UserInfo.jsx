import axios from 'axios';
import React from 'react'
import { useEffect } from 'react'
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { getCookie, getJwtUser } from '../login/Cookies';
import { useNavigate } from 'react-router-dom';

const UserInfo = () => {
    const navigation = useNavigate();
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
                id : getJwtUser()
            },
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
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
                <input type='text' style={{padding : "10px"}} value={userItem.userId ? userItem.userId : ''} onChange={changeUserItem} disabled={true}/>
            </div>
            <div className='div-user-info-input'>
                <label>이름</label>
                <input type='text' style={{padding : "10px"}} value={userItem.userName ? userItem.userName: ''} onChange={changeUserItem} disabled={true}/>
            </div>
            <div className='div-user-info-input'>
                <label>패스워드</label>
                {/* <div> */}
                    <input type='text' style={{padding : "10px"}} value={userItem.userPassword ? "***************" : ''} onChange={changeUserItem} disabled={true}/>
                    {/* <button>비밀번호 변경</button> */}
                {/* </div> */}
            </div>
            <div className='div-user-info-input'>
                <label>이메일</label>
                <input type='text' style={{padding : "10px"}} value={userItem.email ? userItem.email : ''} onChange={changeUserItem} disabled={true}/>
            </div>
            <div style={{display : 'flex', justifyContent : 'end', marginTop : '10px'}}>
                <button style={{color : '#0d6efd', fontWeight : 'bold'}} onClick={
                    () => navigation(`/userinfo/${userItem.userId}`)
                }>수정</button>
            </div>
        </div>
  )
}

export default UserInfo