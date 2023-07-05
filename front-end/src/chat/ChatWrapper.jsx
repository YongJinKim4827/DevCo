import React from 'react'
import ChatRoomList from './ChatRoomList'
import ChatRoom from './ChatRoom'
import './chat.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import EmptyChat from './EmptyChat';

const ChatWrapper = () => {
  const [chatRoomItems, setChatRoomItems] = useState([]);
  const [selectChattingRoomItem, setSelectChattingRoomItem] = useState({});
  const param = useParams();
  
  //채팅방 선택
  const onClickChattingRoom = (item) => {
    if(item.chattingRoomNo === selectChattingRoomItem.chattingRoomNo){
      setSelectChattingRoomItem({});
    }else{
      setSelectChattingRoomItem(item);
    }
  }

  //로그인한 사용자의 채팅방 리스트 불러오기
  const selectChattingRoom = () => {
    setChatRoomItems([
      {
        chattingRoomNo : '1',
        creatRoomDate : new Date(),
        users : ["ADMIN", "YJKIM"],
        roomName : "ADMIN",
        recentMessage : "안녕하세요~"
      },
      {
        chattingRoomNo : '2',
        creatRoomDate : new Date(),
        users : ["나의라임오지는나무", "YJKIM"],
        roomName : "나의라임오지는나무",
        recentMessage : "안녕하세요~"
      },
      {
        chattingRoomNo : '3',
        creatRoomDate : new Date(),
        users : ["네간", "YJKIM"],
        roomName : "네간",
        recentMessage : "잘가요~"
      }
    ])
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
          selectChattingRoomItem.chattingRoomNo ? <ChatRoom roomInfo = {selectChattingRoomItem} /> : <EmptyChat /> 
        }
        
      </div>
    </div>
  )
}

export default ChatWrapper