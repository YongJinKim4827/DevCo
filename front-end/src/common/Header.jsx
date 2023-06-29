import React from 'react'
import './common.css'
import logoImg from '../assets/img/uncle-sam.png';
import messageImg from '../assets/img/free-icon-chat-2450503.png';
import userImg from '../assets/img/free-icon-default-user.png';

const Header = () => {
  const moveChattingPage = () => {
    console.log("Move Chatting Page...")
  }

  
  return (
    <div className='div-header-wrapper'>
      <div style={{display : "flex"}}>
        <img src={logoImg}
                        style={{width : "80px", height : "80px", marginBottom : "3px"}}
        />
        <div style={{display : "inline", alignSelf : "center", marginLeft : "10px"}}>
          <h1 style={{fontWeight : "bold"}}>DEVCO</h1>
        </div>
      </div>
      <div style={{display : "flex"}}>
        {
          BOARD_CATEGORY.map((data, idx) => {
            return(
              <div key={`category_${idx}`} style={{display : "inline", alignSelf : "center"}}>
                 <a key={`category_name_${idx}`} href={data.link} className='a-deco'>{data.name}</a>
                 {
                  idx === BOARD_CATEGORY.length-1 ? "" : <span style={{marginLeft : "3vh", marginRight : "3vh"}}>|</span> 
                 }
              </div>
               
              )
          })
        }
      </div>
      <div style={{display : "flex"}}>
        <div style={{display : "inline", alignSelf : "center", position : "relative"}} >
            <img src={messageImg} className='img-header' />
            <div className='div-chat-alarm'>
              <span>+5</span>
            </div>
        </div>
        <div style={{display : "inline", alignSelf : "center", marginLeft : "20px"}}>
          <img src={userImg} className='img-header'/>
        </div>
      </div>
    </div>
  )
}

export default Header