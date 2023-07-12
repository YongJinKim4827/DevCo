import React, { useState } from 'react'
import UserHistoryContent from './UserHistoryContent'
import { useEffect } from 'react'
import axios from 'axios'
import "./user.css"
import { getCookie, getJwtUser } from '../login/Cookies';
import { useParams } from 'react-router-dom'

const UserHistory = () => {
    const [userHistoryItem, setUserHistoryItem] = useState([]);
    const [profileName, setProfileName]  = useState("");
    const param = useParams();
    useEffect(() => {
        let userId = getJwtUser();
        if(param.user){
            userId = param.user;
        }
        axios.get(`${REQUEST_ORIGIN}/user/history`, {
            params : {
                id : userId
            }
        })
        .then((res) => {
            let data = res.data;
            setProfileName(userId);
            data.sort((a,b) => {
                return new Date(a.historyDate) - new Date(b.historyDate)
            })
            setUserHistoryItem(data);
            setProfileName(data[0].userId);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
  return (
    <div className='div-user-history-wrapper'>
        <div className='div-history-profile-wrapper'>
            <h3>
                {profileName} 
            </h3>
            <span style={{fontSize : "small", fontWeight : "bold", marginLeft : "5px"}}>님의 활동이력</span>
        </div>
        <div style={{marginTop : "25px"}}>
            {
                userHistoryItem.length > 0 ? 
                userHistoryItem.map((item, idx) => {
                    return <UserHistoryContent key={`userhistory_${idx+1}`} item = {item} />
                })
                : ''
            }
        </div>
    </div>
  )
}

export default UserHistory