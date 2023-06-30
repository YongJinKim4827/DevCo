import React from 'react'
import './chat.css';
const SendChat = ({messageItem}) => {
  return (
    <div className='span-chat-send-wrapper'>
        {/* <div> */}
            <span className='span-chat-send'>{messageItem.message}</span>
        {/* </div> */}
    </div>
  )
}

export default SendChat