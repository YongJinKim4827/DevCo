import React from 'react'
import "./login.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Welcome from '../common/Welcome';
import { setCookie, getCookie, removeCookie } from './Cookies';

const Login = () => {
    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const navigate = useNavigate();

    const onChangeUserId = (event) => {
        setUserId(event.target.value);
    }
    
    const onChangeUserPassword = (event) => {
        setUserPassword(event.target.value);
    }

    const LoginHandler = (event) => {
        event.preventDefault();
        // navigate("/")
        // return;
        console.log(`User Id : ${userId} , Password : ${userPassword}`);
        //TO-DO : 비밀번호를 암호화 부분 필요
        axios.post(`${REQUEST_ORIGIN}/login`, {
            userId : userId,
            userPassword : userPassword
        })
        .then((res) => {
            // console.dir(res);
            setCookie("token", res.data, {
                path: "/",
                sameSite: "strict",
            });
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
        });
        
    }
    
    const moveSignUpPage = () => {
        console.log("회원가입 페이지로 이동...");
        navigate("/signup")
    }

  return (
    <div className='div-login-wrapper'>
        <Welcome />
        <div style={{fontSize : "small"}}>
            {PROJECT_NAME} 로그인
        </div>
        <form action="" method="POST" className="form-login" onSubmit={LoginHandler}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">ID</label>
                <input type="text" className="form-control" id="userIdInput" aria-describedby="emailHelp" value={userId} onChange={onChangeUserId}/>
            </div>
            <div className="mb-3">
                <label htmlFor= "exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="userInputPassword" value={userPassword} onChange={onChangeUserPassword}/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor= "exampleCheck1">Check me out</label>
            </div> */}
            <div style={{display : "flex", justifyContent : "center"}}>
                <button type='submit' className="btn btn-primary" style={{width : "80%", backgroundColor : "#0B7FD3"}} disabled={false}>Login</button>
            </div>
            <div style={{display : "flex", justifyContent : "center", marginTop : "10px"}}>
                <span>
                    아직 회윈이 아니신가요? 
                </span>
                <a href='/signup' style={{marginLeft : "10px"}}>회원가입</a>
            </div>
            
        </form>
    </div>
  )
}

export default Login
