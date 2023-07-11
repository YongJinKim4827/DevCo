import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import UserManageItem from './UserManageItem';
import { getCookie } from '../login/Cookies';
const UserManage = () => {
    const [userItems, setUserItems] = useState([]);
    useEffect(()=> {
        axios.get(`${REQUEST_ORIGIN}/admin/user/select`,{
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {
            console.log(res);
            setUserItems(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    const saveUserItem = (item) => {

        axios.post(`${REQUEST_ORIGIN}/admin/user/update`,
        item
        )
        .then((res) => {
            debugger;
        })
        .catch((err) => {

        })
    }
    return(
        <div style={{width : "50vw", marginTop : '25px'}}>
            <div style={{display : "flex", padding : "10px", justifyContent : "space-between", borderBottom : "1px solid #DCDEE1"}}>
                <div style={{width : "20%"}}>
                    <h5 style={{fontWeight : "bold"}}>User ID</h5>
                </div>
                <div style={{width : "20%"}}> <h5 style={{fontWeight : "bold"}}>ROLE</h5></div>
                <div style={{width : "20%"}}> <h5 style={{fontWeight : "bold"}}>Valid</h5></div>
                <div style={{width : "20%"}}> <h5 style={{fontWeight : "bold"}}>Save</h5></div>
            </div>
            <div>
                {
                    userItems.length > 0 ?
                    userItems.map((item, idx) => {
                        return (<UserManageItem key={`userItem_${idx+1}`} item = {item} save = {saveUserItem}/>)
                    })
                    : 
                    ''
                }
            </div>
        </div>
    )
}

export default UserManage