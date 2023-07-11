import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import { getCookie } from '../login/Cookies';

const AccountInfo = () => {
    const [deleteAgree, setDeleteAgree] = useState(false);
    const [useChatting, setUseChatting] = useState(false);
    const navigation = useNavigate();
    useEffect(()=> {
        axios.get(`${REQUEST_ORIGIN}/user/select`,{
            params : {
                id : jwtDecode(userJwt).sub
            },
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {
            let data = res.data[0];
            let loadUseChatting = data.useChatting;
            loadUseChatting.toUpperCase() === 'Y'? setUseChatting(true) : setUseChatting(false); 
        }) 
        .catch((err) => {
            console.log(err);
        })
    },[])
    
    const onChangeDeleteAgree = (event) => {
        setDeleteAgree(event.target.checked);
    }

    const onChangeUseChatting = (event) =>{
        setUseChatting(event.target.checked);
        axios.post(`${REQUEST_ORIGIN}/user/chatting`, {
            userId : jwtDecode(sampleJwt).sub,
            useChatting : event.target.checked ? 'Y': 'N' 
        })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    const deleteAccount = () => {
        // axios.post("/user/delete")
        // .then((res) => {
        //     navigation("/");
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }
  return (
    <div style={{width : "50vw", marginTop : '25px'}}>
        <div style={{display : "flex", padding : "25px", justifyContent : "space-between", borderBottom : "1px solid #DCDEE1"}}>
            <h5 style={{fontWeight : 'bold', marginTop : "5px"}}>채팅 활성화</h5>
            <div className="form-check form-switch ">
                <input className="form-check-input" style={{width:"50px", height :"25px"}}
                    type="checkbox" id="flexSwitchCheckChecked" checked={useChatting} onChange={onChangeUseChatting}/>
            </div>
        </div>

        <div style={{padding : '25px'}}>
            <h5 style={{fontWeight : 'bold'}}>계정삭제</h5>
            <div className='div-accountdelete-discription'>
                이제는 되돌릴수 없슴다
            </div>
            <div style={{marginTop : '15px'}}>
                <div>
                    <input className="form-check-input" type="checkbox" 
                        value={deleteAgree} id="flexCheckDefault" 
                        style={{marginRight : '5px'}}
                        onChange={onChangeDeleteAgree}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        계정 삭제에 관한 정책을 읽고 이에 동의합니다.
                    </label>
                </div>
                <div style={{display : 'flex', justifyContent : 'end', marginTop : '10px'}}>
                    <button className='btn btn-danger' disabled = {!deleteAgree}>계정삭제</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountInfo