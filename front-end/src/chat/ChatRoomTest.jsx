import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useRef } from 'react'
import * as StompJs from "@stomp/stompjs";
import * as Socket  from "sockjs-client/dist/sockjs";

const ChatRoomTest = () => {
    const client = useRef({});
    const [chatMessage, setChatMessage] = useState([{
        roomSeq : 0,
        message : ""
    }]);
    const [message, setMessage] = useState("");

    useEffect(()=> {
        connect();
        return () => disConnect();
    },[]);

    const connect = () => {
        client.current = new StompJs.Client({
            webSocketFactory : () => new Socket("http://localhost:8080/ws-stomp"),
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
        client.current.subscribe("/sub/chat/1", ({body}) => {
            setChatMessage((chatMessage) => [...chatMessage, JSON.parse(body)]
            );
        });
    }

    const publish = (message) => {
        if(!client.current.connected){
            return;
        }
        client.current.publish({
            destination : "/pub/chat",
            body: JSON.stringify({roomSeq: 1, message})
        });
        setMessage("");
    }

    const onChange = (event) => {
        setMessage(event.target.value)
    }
  return (
    <div>
        <span>ChatRoom</span>
        <div>
            {
                chatMessage.map((message, idx) => {

                    return (
                        <div key={`chat_${idx}`}>{message.message}</div>
                    )

                })
            }
        </div>
        <div>
        <input
          type={"text"}
          
          value={message || ""}
          onChange={onChange}
        //   onKeyPress={(e) => e.which === 13 && publish(message)}
        />
        <button onClick={() => publish(message)}>send</button>
        </div>
    </div>

  )
}

export default ChatRoomTest