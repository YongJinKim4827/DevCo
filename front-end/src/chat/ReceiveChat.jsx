import React from 'react'
import './chat.css'

const ReceiveChat = ({messageItem, prevUser}) => {
    console.log(prevUser)
  return (

        
        <div className='span-chat-receive-wrapper'>
            {
                messageItem.user === prevUser ? '' : <span>{messageItem.user}</span>
            }
            <div>
                <div style={{backgroundColor : "red", width : "10px", height : "10px"}}></div>
                <div>
                    <span className='span-chat-receive'>{messageItem.message}</span>
                </div>
            </div>
                {/* <span>{messageItem.message}</span> */}
        </div>


  )
}

export default ReceiveChat