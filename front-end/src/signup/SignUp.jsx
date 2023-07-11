import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./signup.css"
import Welcome from '../common/Welcome';

const SignUp = () =>  {
    const [signUpInfo, setSignUpInfo] = useState({
        userId : '',
        userPassword : '',
        reEnterPassword : '',
        checkPassword : false,
        userName : '',
        gender : '',
        email : '',
        userRole : ""
    });
    const [authInfo , setAuthInfo] = useState({
        email : '',
        authNum : ''
    });
    const [issuanceAuth, setIssuanceAuth] = useState(false);
    const [usableUserId, setUsableUserId] = useState(false);
    
    const onChange = (event) => {
        if(event.target.id === "signUpIdInput"){
            setSignUpInfo({...signUpInfo, userId : event.target.value});
        }else if(event.target.id === "signUpPassword"){
            setSignUpInfo({...signUpInfo, userPassword : event.target.value});
        }else if(event.target.id === "signUpReEnterPassword"){
            setSignUpInfo({...signUpInfo, reEnterPassword : event.target.value});
        }else if(event.target.id === "signUpName"){
            setSignUpInfo({...signUpInfo, userName : event.target.value});
        }else if(event.target.id === "signUpIdGender"){
            setSignUpInfo({...signUpInfo, gender : event.target.value});
        }else if(event.target.id === "signUpEmail"){
            setSignUpInfo({...signUpInfo, email : event.target.value});
        }
    }

    useEffect(()=>{//비밀번호 체크 동기 처리
        if(signUpInfo.userPassword === signUpInfo.reEnterPassword){
            setSignUpInfo({...signUpInfo, checkPassword : true});
        }
    },[
        signUpInfo.reEnterPassword, 
        signUpInfo.userPassword
        ]);

    const signUpHandler = (event) => {
        event.preventDefault();
        console.dir(signUpInfo);
        axios.post(`${REQUEST_ORIGIN}/signup`, signUpInfo)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const moveLoginPage = () => {
        window.location.replace("/");
    }

    const onIssuanceAuth = () => {
        debugger;
        if(signUpInfo.email.length > 0){
            axios.post(`${REQUEST_ORIGIN}/user/mail`, signUpInfo)
            .then((res) => {
                console.log(res);
                setAuthInfo({...authInfo, email : signUpInfo.email})
            })
            .catch((err) => {
                console.log(err);
            })
            return;
        }
        alert(PLEASE_INPUT_EMAIL_MSG);
    }

    const onCheckAuthNum = () => {
        axios.post(`${REQUEST_ORIGIN}/user/mail/confirm`, authInfo)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const onCheckUserId = () => {
        axios.get(`${REQUEST_ORIGIN}/user/id`, {
            params : {
                id : signUpInfo.userId
            }
        })
        .then((res) => {
            console.log(res);
            if(res.data > 0){
                setUsableUserId(false);
            }else{
                setUsableUserId(true);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const onChangeAuthNum = (event) => {
        setAuthInfo({...authInfo, authNum : event.target.value});
    }

    return (
        <div className='div-signup-wrapper'>
            <Welcome />
            <div style={{fontSize : "small"}}>회원가입시 필요한 정보를 입력해주세요</div>
            <form action="" method="POST" onSubmit={signUpHandler} className='form-signup'>
                <div className='content'>
                <div className="mb-3">
                    <label htmlFor="signUpIdInput" className="form-label">ID</label>
                    <input type="text" className="form-control" 
                        id="signUpIdInput"
                        value={signUpInfo.userId} onChange={onChange}
                        />
                        <button type="button" onClick={onCheckUserId}>아이디 중복 확인</button>
                </div>
                <div className="mb-3">
                    <label htmlFor= "signUpPassword" className="form-label">Password</label>
                    <input type="password" className="form-control" 
                        id="signUpPassword" value={signUpInfo.userPassword} onChange={onChange}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor="signUpReEnterPassword" className="form-label">비밀번호 재확인</label>
                    <input type="password" className="form-control" 
                        id="signUpReEnterPassword"
                        value={signUpInfo.reEnterPassword} onChange={onChange}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor= "signUpName" className="form-label">이름</label>
                    <input type="text" className="form-control" 
                        id="signUpName" value={signUpInfo.userName} onChange={onChange}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor= "signUpEmail" className="form-label">본인확인 이메일</label>
                    <div style={{display : "flex"}}>
                        <input type="email" className="form-control"  style={{marginRight : "5px", width : "80%"}}
                            id="signUpEmail" value={signUpInfo.email} onChange={onChange}
                        />
                        <button type='button' className = "btn-issuance" onClick={onIssuanceAuth} data-bs-toggle="collapse" data-bs-target="#collapseExample" 
                            aria-expanded="false" aria-controls="collapseExample"
                        >인증번호 발송</button>
                    </div>

                    <div className="collapse" id="collapseExample" style={{marginTop : "10px"}}>
                        <div className="card card-body" style={{display : "flex", flexDirection : "inherit"}}>
                            <input type='text' className= "form-control input-authNum" onChange={onChangeAuthNum} placeholder='인증번호'/>
                            <button type='button' style={{width : "24%"}} onClick={onCheckAuthNum}>인증</button>
                        </div>
                    </div>
                </div>
                </div>
                <div style={{display : "flex", justifyContent : "center"}}>
                    {/* <button type='button' className="btn btn-primary" onClick={moveLoginPage}>{"< Prev"}</button> */}
                    <button type='submit' className="btn btn-primary" 
                        style={{width : "80%", backgroundColor : "#0B7FD3"}} disabled={
                            !(issuanceAuth && usableUserId)
                        }
                    >Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp