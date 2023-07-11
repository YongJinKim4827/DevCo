package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.dto.UserChatItem;
import com.cyberi.devcommunity.service.ChatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
//import org.springframework.context.event.EventListener;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.socket.messaging.SessionConnectEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/chat")
public class ChatController {
    private static final Set<String> SESSION_IDS = new HashSet<>();
    private final SimpMessagingTemplate messagingTemplate;
    private final ChatService chatService;

    @MessageMapping("/chat") // "/pub/chat"
    public void publishChat(ChatMessageItem chatMessage) {
        log.info("publishChat : {}", chatMessage);
        ChatMessageItem result = new ChatMessageItem();
        int chattingCounter = 1;
        chatService.inputChatMessage(chatMessage);
        chattingCounter = chatService.selectNonReadedMessage(chatMessage.getReceiveUser());
        result.setReceiveUser(chatMessage.getReceiveUser());
        result.setChatCount(chattingCounter);
        messagingTemplate.convertAndSend("/sub/chat/" + chatMessage.getChattingRoomNo(), chatMessage);
        messagingTemplate.convertAndSend("/sub/recieve", result);
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
        result = chatService.createChatRoom(chatRoomItem);
        return result;
    }

    @RequestMapping(value = "/select/chattingroom", method = RequestMethod.GET)
    public List<UserChatItem> selectChattingRoomItems(@RequestParam("userId") String userId){
        List<UserChatItem> result = new ArrayList();
        result = chatService.selectChatRoom(userId);
        return result;
    }

    @RequestMapping(value = "/select/message", method = RequestMethod.GET)
    public List<ChatMessageItem> selectMessage(@RequestParam("chattingRoomNo") String chattingRoomNo){
        List<ChatMessageItem> result = new ArrayList();
        result = chatService.selectChatMessageInChatRoom(chattingRoomNo);
        return result;
    }

    @RequestMapping(value = "/read", method = RequestMethod.GET)
    public int readedMessage(@RequestParam("chattingRoomNo") String chattingRoomNo,
        @RequestParam("id") String userId){
            ChatMessageItem param = new ChatMessageItem();
            param.setUserId(userId);
            param.setChattingRoomNo(chattingRoomNo);
        int result = 0;
        result = chatService.readedMessage(param);
        ChatMessageItem item = new ChatMessageItem();
        item.setReceiveUser(userId);
        item.setChatCount(result);
        // messagingTemplate.convertAndSend("/sub/recieve", item);
        return result;
    }
}
