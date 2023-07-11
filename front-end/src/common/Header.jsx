import React from 'react';
import './common.css';
import * as StompJs from "@stomp/stompjs";
import * as Socket  from "sockjs-client/dist/sockjs";
import logoImg from '../assets/img/uncle-sam.png';
import messageImg from '../assets/img/free-icon-chat-2450503.png';
import userImg from '../assets/img/free-icon-default-user.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { getCookie, getJwtUser, getJwtRole, removeCookie } from '../login/Cookies';

const Header = () => {
  const client = useRef({});
  const navigation = useNavigate();
  const [chatCount, setChatCount] = useState(0);
  const moveChattingPage = () => {
    if(getCookie(TOKEN)){
      navigation("/chat");
      return;
    }else{
      alert(PLEASE_LOGIN_MSG);
    }
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

  const logout = () => {
    // debugger;
    removeCookie(TOKEN);
    navigation("/");
  }

  useEffect(()=> {
      connect();
      return () => disConnect();
  },[]);

  const connect = () => {
      client.current = new StompJs.Client({
          webSocketFactory : () => new Socket(`${REQUEST_ORIGIN}/ws-stomp`),
          connectHeaders: {
              "AUTH-TOKEN" : "spring-chat-auth-token",
          },
          debug: (str) => {
              console.log(str);
          },
          reconnectDelay : 5000,
          heartbeatIncoming : 4000,
          heartbeatOutgoing : 4000,
          onConnect : () => {
              subscribe();
          },
          onStompError: (frame) => {
              console.error(frame);
          }
      });
      client.current.activate();
  }

  const disConnect = () => {
      client.current.deactivate();
  }

  const subscribe = () => {
      client.current.subscribe(`/sub/recieve`, ({body}) => {
          setChatCount(body);
      });
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
            {
                chatCount !== 0 ? 
                <div className='div-chat-alarm' onClick={moveChattingPage}>
                  <span>{chatCount}</span>
                </div>
                : ''
            }

        </div>
        <div style={{display : "inline", alignSelf : "center", marginLeft : "20px"}}>
          {
            getCookie(TOKEN) ? <span>{getJwtUser()}</span>
            :''
          }
          
          <img src={userImg} className='img-header'data-bs-toggle="dropdown" aria-expanded="false"/>
          <ul className="dropdown-menu">
            {
              getCookie(TOKEN) ?
              <div>
                <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={moveAccountInfoPage}>내 계정</button></li>
                <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={moveUserInfoPage}>내 정보</button></li>
                <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={logout}>로그아웃</button></li>
              </div>
              :
              <li><button className='dropdown-item' style={{borderRadius : '0px'}} onClick={() => navigation("/login")}>로그인</button></li>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header