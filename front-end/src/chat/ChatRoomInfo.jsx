import React from 'react'
import './chat.css'

const ChatRoomInfo = () => {
  return (
    <div className='div-chat-info-wrapper'>
      <div style={{display : "flex", flexDirection : "column"}}>
          <span>사용자</span>
          <span>최근 대화</span>
      </div>
      <div>
        <span>알람</span>
      </div>
    </div>
  )
}

export default ChatRoomInfo