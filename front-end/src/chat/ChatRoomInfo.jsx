import React from 'react'
import './chat.css'

const ChatRoomInfo = ({item, currentItem, click}) => {
  
  const selectChattingRoom = () => {
    click(item);
  }
  return (
    <div className='div-chat-info-wrapper' onClick={selectChattingRoom} >
      <div style={{display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
          <span style={{fontWeight : "bold", fontSize : "medium"}}>{
              item.userId
            }</span>
          <span style={{fontSize : "small"}}>{item.chatContent}</span>
      </div>
      <div style={{display : "flex", alignItems : "end", flexDirection : "column", justifyContent : "space-between"}}>
        <div style={{fontSize : "smaller", }}>
          {convertDate(item.chattingDate)}
        </div>
        {/* <div className='div-chatroom-alarm'>
            300
        </div> */}
      </div>
    </div>
  )
}

export default ChatRoomInfo