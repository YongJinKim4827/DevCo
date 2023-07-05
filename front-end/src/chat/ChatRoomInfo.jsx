import React from 'react'
import './chat.css'

const ChatRoomInfo = ({item, currentItem, click}) => {
  const user = (users) => {
    let userName = '';
    // for(let i = 0; i < users.length; i++){
    //   userName += users[i];
    //   if(i !== users.length - 1){
    //     userName += ',';
    //   }
    // }
    return users[0];
  }
  
  const selectChattingRoom = () => {
    click(item);
  }
  return (
    <div className='div-chat-info-wrapper' onClick={selectChattingRoom} 

    
    >
      <div style={{display : "flex", flexDirection : "column", justifyContent : "space-between"}}>
          <span style={{fontWeight : "bold", fontSize : "medium"}}>{
              user(item.users)
            }</span>
          <span style={{fontSize : "small"}}>{item.recentMessage}</span>
      </div>
      <div style={{display : "flex", alignItems : "end", flexDirection : "column", justifyContent : "space-between"}}>
        <div style={{fontSize : "smaller", }}>
            오후 2시 30분
        </div>
        <div className='div-chatroom-alarm'>
            300
        </div>
      </div>
    </div>
  )
}

export default ChatRoomInfo