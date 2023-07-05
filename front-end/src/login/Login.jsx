import React from 'react'
import "./login.css";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
            console.dir(res);
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
    <div className='loginContainer'>
        <form action="" method="POST" onSubmit={LoginHandler}>
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
            <button type='submit' className="btn btn-primary">Login</button>
            <button type='button' className="btn btn-primary" onClick={moveSignUpPage}>Sign Up</button>
        </form>
    </div>
  )
}

export default Login
