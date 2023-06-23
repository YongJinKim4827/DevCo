import React from 'react'
import './common.css'

const Header = () => {
  const moveChattingPage = () => {
    console.log("Move Chatting Page...")
  }

  
  return (
    <div className='div-header-wrapper'>
      <div style={{display : "flex"}}>
        <img src="src\assets\img\uncle-sam.png"
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
            <img src="src\assets\img\free-icon-chat-2450503.png" className='img-header' />
            <div className='div-chat-alarm'>
              <span>+5</span>
            </div>
        </div>
        <div style={{display : "inline", alignSelf : "center", marginLeft : "20px"}}>
          <img src="src\assets\img\free-icon-default-user.png" className='img-header'/>
        </div>
      </div>
    </div>
  )
}

export default Header