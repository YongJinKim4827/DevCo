import React from 'react'
import ChatRoomList from './ChatRoomList'
import ChatRoom from './ChatRoom'
import './chat.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import EmptyChat from './EmptyChat';
import axios from 'axios';
import { getCookie, getJwtUser } from '../login/Cookies';

const ChatWrapper = () => {
  const [chatRoomItems, setChatRoomItems] = useState([]);
  const [selectChattingRoomItem, setSelectChattingRoomItem] = useState({});
  const param = useParams();
  
  //채팅방 선택
  const onClickChattingRoom = (item) => {
    if(item.chattingRoomNo === selectChattingRoomItem.chattingRoomNo){
      setSelectChattingRoomItem({});
    }else{
      //채팅방 전체 읽음 처리
      axios.get(`${REQUEST_ORIGIN}/chat/read`, {
        params : {
          chattingRoomNo : item.chattingRoomNo
        },
        headers : {
          Authorization : `Bearer ${getCookie("token").accessToken}`
        }
      })
      .then((res) => {
        
      })
      .catch((err) => {
        console.log(err);
      })
      setSelectChattingRoomItem(item);
    }
  }

  const currentMessage = () => {//메세지 감지
    selectChattingRoom();
  }

  //로그인한 사용자의 채팅방 리스트 불러오기
  const selectChattingRoom = () => {
    debugger
    axios.get(`${REQUEST_ORIGIN}/chat/select/chattingroom`, {
      params : {
        userId : getJwtUser()
      },
      headers : {
        Authorization : `Bearer ${getCookie("token").accessToken}`
      }
    })
    .then((res) => {
      setChatRoomItems(res.data)
    })
    .catch((err) => {

    })
  }


  useEffect(() => {
    selectChattingRoom();
  },[])
  return (
    <div className='div-chat-wrapper'>
      <div style={{display : "flex", width:"70vw"}}>
        <ChatRoomList roomItems = {chatRoomItems} 
          currentItem = {selectChattingRoomItem} //현재 선택된 채팅
          click = {onClickChattingRoom}
        />
        {
          selectChattingRoomItem.chattingRoomNo ? <ChatRoom roomInfo = {selectChattingRoomItem} inputCurrentMessage = {currentMessage}/> : <EmptyChat /> 
        }
      </div>
    </div>
  )
}

export default ChatWrapper