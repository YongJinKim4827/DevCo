import React from 'react'
import ChatRoomList from './ChatRoomList'
import ChatRoom from './ChatRoom'
import './chat.css';

const ChatWrapper = () => {
  return (
    <div className='div-chat-wrapper'>
        <ChatRoomList />
        <ChatRoom />
    </div>
  )
}

export default ChatWrapper