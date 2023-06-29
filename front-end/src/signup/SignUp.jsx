import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "./signup.css"

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

    return (
        <div className='signUpContainer'>
            <form action="" method="POST" onSubmit={signUpHandler} className='signUpForm'>
                <div className='content'>
                <div className="mb-3">
                    <label htmlFor="signUpIdInput" className="form-label">ID</label>
                    <input type="text" className="form-control" 
                        id="signUpIdInput"
                        value={signUpInfo.userId} onChange={onChange}
                        />
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
                    <label htmlFor="signUpIdGender" className="form-label">성별</label>
                    <select id='signUpIdGender' className="form-select" aria-label="Default select example" placeholder='성별을 선택해주세요.' onChange={onChange} defaultValue={"N"}>
                        <option value="N" disabled>성별을 선택해주세요.</option>
                        <option value="M">남성</option>
                        <option value="F">여성</option>
                    </select>
                    {/* <input type="text" className="form-control" 
                        id="signUpIdGender"
                        value={signUpInfo.gender} onChange={onChange}
                        /> */}
                </div>
                <div className="mb-3">
                    <label htmlFor= "signUpEmail" className="form-label">본인확인 이메일</label>
                    <input type="email" className="form-control" 
                        id="signUpEmail" value={signUpInfo.email} onChange={onChange}
                        />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor= "exampleCheck1">Check me out</label>
                </div> */}
                </div>
                <div>
                    <button type='button' className="btn btn-primary" onClick={moveLoginPage}>{"< Prev"}</button>
                    <button type='submit' className="btn btn-primary" >Sign Up</button>
                </div>
            </form>
        </div>
    )
}

export default SignUp