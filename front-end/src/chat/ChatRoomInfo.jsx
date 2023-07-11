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
            <div style={{overflow : "hidden", textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
            <span style={{fontSize : "small"}}>{item.chatContent}</span>

            </div>
      </div>
      <div style={{display : "flex", alignItems : "end", flexDirection : "column", justifyContent : "space-between"}}>
        <div style={{fontSize : "smaller", }}>
          {convertDate(item.chattingDate)}
        </div>
        {
            item.chatCount !== 0 ? 
            <div className='div-chatroom-alarm'>
                {item.chatCount}
            </div>
            : ''
        }
      </div>
    </div>
  )
}

export default ChatRoomInfo