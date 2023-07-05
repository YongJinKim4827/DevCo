package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.HashSet;
import java.util.Set;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {
    private static final Set<String> SESSION_IDS = new HashSet<>();
    private final SimpMessagingTemplate messagingTemplate;

    @MessageMapping("/chat") // "/pub/chat"
    public void publishChat(ChatMessageItem chatMessage) {
        log.info("publishChat : {}", chatMessage);
        messagingTemplate.convertAndSend("/sub/chat/" + chatMessage.getRoomSeq(), chatMessage);
    }

    @EventListener(SessionConnectEvent.class)
    public void onConnect(SessionConnectEvent event) {
        String sessionId = event.getMessage().getHeaders().get("simpSessionId").toString();
        SESSION_IDS.add(sessionId);
        log.info("[connect] connections : {}", SESSION_IDS.size());
    }

    @EventListener(SessionDisconnectEvent.class)
    public void onDisconnect(SessionDisconnectEvent event) {
        String sessionId = event.getSessionId();
        SESSION_IDS.remove(sessionId);
        log.info("[disconnect] connections : {}", SESSION_IDS.size());
    }

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public int createChatting(@RequestBody ChatRoomItem chatRoomItem){
        int result = 0;
        return result;
    }
}
