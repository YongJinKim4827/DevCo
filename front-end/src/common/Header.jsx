import React from 'react'
import './common.css'
import logoImg from '../assets/img/uncle-sam.png';
import messageImg from '../assets/img/free-icon-chat-2450503.png';
import userImg from '../assets/img/free-icon-default-user.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigation = useNavigate();
  const moveChattingPage = () => {
    navigation("/chat");
  }

  const moveUserInfoPage = () => {
    navigation("/user");
  }

  const moveAccountInfoPage = () => {
    navigation("/user/account");
  }

  const moveMainPage = () => {
    navigation("/");
  }
  
  return (
    <div className='div-header-wrapper'>
      <div className='div-header-logo' onClick={moveMainPage}>
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
            <img src={messageImg} className='img-header' onClick={moveChattingPage}/>
            <div className='div-chat-alarm' onClick={moveChattingPage}>
              <span>+5</span>
            </div>
        </div>
        <div style={{display : "inline", alignSelf : "center", marginLeft : "20px"}}>
          <img src={userImg} className='img-header'data-bs-toggle="dropdown" aria-expanded="false"/>
          <ul className="dropdown-menu">
            <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={moveAccountInfoPage}>내 계정</button></li>
            <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={moveUserInfoPage}>내 정보</button></li>
            <li><button className='dropdown-item' style={{borderRadius : '0px'}}>로그아웃</button></li>
            <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={() => navigation("/login")}>로그인</button></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header