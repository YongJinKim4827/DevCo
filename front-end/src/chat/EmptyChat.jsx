import React from 'react'
import logoImg from '../assets/img/uncle-sam.png';

const EmptyChat = () => {
  return (
    <div className='div-chat-roomdetail-wrapper' style={{border : "1px solid #DCDEE1", flexDirection : "column", justifyContent : "center"}}>
        <div style={{display : "flex", justifyContent : "center"}}>
          <h2 style={{fontWeight : "bold"}}>DevCo</h2>
            {/* <img src={logoImg}
                    style={{width : "80px", height : "80px", marginBottom : "3px"}}
            /> */}
        </div>
    </div>
  )
}

export default EmptyChat