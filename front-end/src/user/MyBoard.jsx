import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import MyBoardInfo from './MyBoardInfo'

const MyBoard = () => {
    const [myBoardItems, setMyBoardItems] = useState([]);
    useEffect(() => {
        axios.get(`${REQUEST_ORIGIN}/user/myboard`,{
            params : {
                id : 'ADMIN'
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
  return (
    <div style={{width : "50vw", marginTop : '25px'}}>
        <div style={{display : "flex", padding : "25px", justifyContent : "space-between", borderBottom : "1px solid #DCDEE1"}}>
            <h5 style={{fontWeight : 'bold', marginTop : "5px"}}>나의 게시글 정보</h5>
        </div>
        <div>
            {
                myBoardItems.length > 0 ?
                myBoardItems.map((item, idx)=>{
                    return(<MyBoardInfo key={`myboardItem_${idx+1}`} myBoardItem={item} />)
                })
                : ''
            }
            {}
        </div>
    </div>
  )
}

export default MyBoard