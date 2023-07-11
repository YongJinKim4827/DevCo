import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MyBoardInfo from './MyBoardInfo'
import { getCookie, getJwtUser } from '../login/Cookies';

const MyBoard = () => {
    const [myBoardItems, setMyBoardItems] = useState([]);
    useEffect(() => {
        axios.get(`${REQUEST_ORIGIN}/user/myboard`,{
            params : {
                id : getJwtUser()
            },
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {
            console.log(res.data);
            setMyBoardItems(res.data);
        })
        .catch((err) => {
            console.log(err);    
        })
    },[])
    const onChangeShare  = (event, item) => {
        let idx = myBoardItems.findIndex((e) => e.boardNo === item.boardNo);
        let copyArray = [...myBoardItems];
        let checked = event.target.checked ? 'Y':'N'
        if(idx != -1) {
            copyArray[idx] = {...copyArray[idx], share: checked};
          }
        setMyBoardItems(copyArray);
        item.share = checked;
        axios.post(`${REQUEST_ORIGIN}/board/update`, item,{
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {

        })
        .catch((err) => {

        })
    }

  return (
    <div style={{width : "50vw", marginTop : '25px'}}>
        <div style={{display : "flex", padding : "25px", justifyContent : "space-between", borderBottom : "1px solid #DCDEE1"}}>
            <h5 style={{fontWeight : 'bold', marginTop : "5px"}}>나의 게시글 정보</h5>
        </div>
        <div>
            {
                myBoardItems.length > 0 ?
                myBoardItems.map((item, idx)=>{
                    return(<MyBoardInfo key={`myboardItem_${idx+1}`} myBoardItem={item} onChange = {onChangeShare}/>)
                })
                : ''
            }
            {}
        </div>
    </div>
  )
}

export default MyBoard