import React from 'react'
import ChatRoomInfo from './ChatRoomInfo';
import './chat.css'
const ChatRoomList = () => {

    const itemsSample = () => {
        const result = [];
        for(let i = 0; i < 15; i++){
            result.push(<ChatRoomInfo key={`chatRoom_${i+1}`}/>)
        }
        return result;
    }
  return (
    <div className='div-chat-roomlist-wrapper'>
        {
            itemsSample()
        }
    </div>
  )
}

export default ChatRoomList