import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { getCookie, getJwtUser } from '../login/Cookies';

const UserInfoUpdate = () =>  {
    const param = useParams();
    const [userinfo, setUserInfo] = useState({});

    const [changeUserInfo, setChangeUserInfo] = useState({});
    const [authInfo , setAuthInfo] = useState({
        email : '',
        authNum : ''
    });
    const [issuanceAuth, setIssuanceAuth] = useState(true);
    const [changePassword, setChangPassword] = useState(false);
    const [changeEmail, setChangEmail] = useState(false);
    const [emailAuthBtnText, setEmailAuthBtnText] = useState("이메일 변경");
    
    const onChangeItem = (event) => {
        if(event.target.id === "changeIdInput"){
            setChangeUserInfo({...changeUserInfo, userId : event.target.value});
        }else if(event.target.id === "changePassword"){
            setChangeUserInfo({...changeUserInfo, userPassword : event.target.value});
        }else if(event.target.id === "changeReEnterPassword"){
            setChangeUserInfo({...changeUserInfo, reEnterPassword : event.target.value});
        }else if(event.target.id === "changeName"){
            // setChangeUserInfo({...changeUserInfo, userName : event.target.value});
            setChangeUserInfo((prev)=>{
                return{
                    ...changeUserInfo, userName : event.target.value
                }
            })
        }else if(event.target.id === "changeIdGender"){
            setChangeUserInfo({...changeUserInfo, gender : event.target.value});
        }else if(event.target.id === "changeEmail"){
            setChangeUserInfo({...changeUserInfo, email : event.target.value});
        }
    }

    useEffect(()=>{
        axios.get(`${REQUEST_ORIGIN}/user/select`, {
            params : {
                id : param.userId
            },
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {
            setUserInfo(res.data[0]);
            setChangeUserInfo(res.data[0]);
        })
        .catch((err) => {

        })
    },[])

    // useEffect(()=>{//비밀번호 체크 동기 처리
    //     if(changeUserInfo.userPassword === changeUserInfo.reEnterPassword){
    //         setUserInfo({...changeUserInfo, checkPassword : true});
    //     }
    // },[
    //     changeUserInfo.reEnterPassword, 
    //     changeUserInfo.userPassword
    //     ]);

    const signUpHandler = (event) => {
        event.preventDefault();
        console.dir(changeUserInfo);
        debugger
        axios.post(`${REQUEST_ORIGIN}/user/update`, changeUserInfo,
        {
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const onIssuanceAuth = () => {
        if(changeUserInfo.email.length > 0){
            axios.post(`${REQUEST_ORIGIN}/user/mail`, changeUserInfo)
            .then((res) => {
                console.log(res);
                setAuthInfo({...authInfo, email : changeUserInfo.email})
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
            setIssuanceAuth(true);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const onCheckUserId = () => {
        axios.get(`${REQUEST_ORIGIN}/user/id`, {
            params : {
                id : changeUserInfo.userId
            }
        })
        .then((res) => {
            console.log(res);
            if(res.data > 0){
                alert(CHECK_DUPLICATE_ID);
                setUsableUserId(false);
            }else{
                alert(CHECK_NO_DUPLICATE_ID);
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

    const test = () => {
        setChangEmail(true);
        setIssuanceAuth(false);
    }

    const changePasswordInput = () => {
        setChangPassword(true)
    }

    return (
        <div className='div-signup-wrapper'>
            {/* <div style={{fontSize : "small"}}>회원가입시 필요한 정보를 입력해주세요</div> */}
            <form action="" method="POST" onSubmit={signUpHandler} className='form-signup'>
                <div className='content'>
                <div className="mb-3">
                    <label htmlFor="changeIdInput" className="form-label">ID</label>
                    <div style={{display : "flex"}}>
                        <input type="text" className="form-control" style={{width : "100%"}}
                            id="changeIdInput"
                            value={changeUserInfo.userId || ""} onChange={onChangeItem}
                            disabled={true}
                            />
                    </div>

                </div>
                <div className="mb-3">
                    <label htmlFor= "changePassword" className="form-label">Password</label>
                    <div style={{display : "flex"}}>
                        <input type="password" className="form-control" style={{width : "70%"}}
                            id="changePassword" value={changeUserInfo.userPassword || ""} onChange={onChangeItem} disabled={!changePassword}
                            />
                        <button type="button" style={{width : "30%"}} onClick={changePasswordInput}>비밀번호 변경</button>
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="changeReEnterPassword" className="form-label">비밀번호 재확인</label>
                    <input type="password" className="form-control" 
                        id="changeReEnterPassword"
                        value={changeUserInfo.reEnterPassword || ""} onChange={onChangeItem}
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor= "changeName" className="form-label">이름</label>
                    <input type="text" className="form-control" 
                        id="changeName" onChange={onChangeItem} value={changeUserInfo.userName || ""} 
                        />
                </div>
                <div className="mb-3">
                    <label htmlFor= "changeEmail" className="form-label">본인확인 이메일</label>
                    <div style={{display : "flex"}}>
                        <input type="email" className="form-control"  style={{marginRight : "5px", width : "80%"}}
                            id="changeEmail" value={changeUserInfo.email || ""} onChange={onChangeItem} disabled={!changeEmail}
                        />
                        {
                            !changeEmail ?
                            <button type='button' className = "btn-issuance" onClick={test}
                            >이메일 변경</button>:
                            <button type='button' className = "btn-issuance" onClick={onIssuanceAuth} data-bs-toggle="collapse" data-bs-target="#collapseExample" 
                                aria-expanded="false" aria-controls="collapseExample"
                            >인증번호 발송</button>
                        }
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
                            !(issuanceAuth)
                        }
                    >회원가입</button>
                </div>
            </form>
        </div>
    )
}

export default UserInfoUpdate