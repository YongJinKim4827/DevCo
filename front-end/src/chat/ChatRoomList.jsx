import React from 'react'
import ChatRoomInfo from './ChatRoomInfo';
import './chat.css'
const ChatRoomList = ({roomItems, currentItem, click}) => {
  return (
    <div className='div-chat-roomlist-wrapper'>
        {
           roomItems.map((item,idx) => {
                return  (
                    <ChatRoomInfo key={`chatRoom_${idx+1}`} item={item} currentItem={currentItem} click = {click}/>
                )
           })
        }
    </div>
  )
}

export default ChatRoomList