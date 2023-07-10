import React from 'react'
import './chat.css'
import * as StompJs from "@stomp/stompjs";
import * as Socket  from "sockjs-client/dist/sockjs";
import { useState } from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import ReceiveChat from './ReceiveChat';
import SendChat from './SendChat';
import axios from 'axios';

const ChatRoom = ({roomInfo, inputCurrentMessage}) => {
    const client = useRef({});
    const [chatMessages, setChatMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [user, setUser] = useState('A-MAN');
    const inputChat = (event) => {
        setInputMessage(event.target.value);
    }

    const sendMessage = () => {
        publish(inputMessage);
        setInputMessage("");
    }

    const selectChattingMessage = () => {
        axios.get(`${REQUEST_ORIGIN}/chat/select/message`,{
            params : {
                chattingRoomNo : roomInfo.chattingRoomNo
            }
        })
        .then((res) => {
            setChatMessages(res.data);
            console.log(res);
        })
        .catch((err) => {
            console.log(err)
        })
    }

    //Web Socket 부분
    useEffect(()=> {
        setChatMessages([]);
        selectChattingMessage();
        connect();
        return () => disConnect();
    },[]);

    useEffect(()=> {
        // setChatMessages([]);
        selectChattingMessage();
    },[roomInfo]);



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
        client.current.subscribe(`/sub/chat/${roomInfo.chattingRoomNo}`, ({body}) => {
            setChatMessages((chatMessage) => [...chatMessage, JSON.parse(body)]
            );
        });
    }

    const publish = (message) => {
        if(!client.current.connected){
            return;
        }

        client.current.publish({
            destination : "/pub/chat",
            body: JSON.stringify({chattingRoomNo: roomInfo.chattingRoomNo, userId: 'ADMIN', chatContent: message})
        });
        setInputMessage("");
        inputCurrentMessage();
    }

    const userChange = (event) => {
        setUser(event.target.value);
    }

    return (
    <div className='div-chat-roomdetail-wrapper'>
        <div>
        {/* <select className="form-select" aria-label="Default select example" onChange={userChange}>
            <option defaultValue="A-MAN">A</option>
            <option value="B-MAN">B</option>
            <option value="C-MAN">C</option>
        </select> */}
        </div>
        <div className='div-chat-room-header'>
            <div style={{display : "flex", alignItems : "center", fontWeight : "bold", marginLeft : "15px"}}>
                <span>{roomInfo.userId}</span>
            </div>
        </div>
        <div className='div-chat-room-content'>
            {
                chatMessages.length > 0 ?
                chatMessages.map((item, idx) => {
                    let prevUser = '';
                    if(idx > 0){
                        prevUser = chatMessages[idx-1].user;
                    }
                    if(item.userId === user){
                        return(
                            <SendChat key={`chat_${idx+1}`} messageItem = {item} />
                        )
                    }else{
                        return(
                            <ReceiveChat key={`chat_${idx+1}`} messageItem = {item} prevUser = {prevUser}/>
                        )
                    }
                })
                : ''
            }
        </div>
        <div className='div-chat-room-footer'>
            <input type='text' style={{width : "80%", height : "100%"}} value={inputMessage} onChange={inputChat}/>
            <button style={{width : "20%", height : "100%"}} onClick={sendMessage}>전송</button>
        </div>
    </div>
  )
}

export default ChatRoom