package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ChatService {

    private final ChatRepository chatRepository;

    @Autowired
    public ChatService(ChatRepository chatRepository){
        this.chatRepository = chatRepository;
    }

    //사용자가 속한 채팅방 조회 및 각 채팅방의 최근 글 조회
    public ChatRoomItem selectChatRoom(ChatRoomItem chatRoomItem){
        ChatRoomItem result = new ChatRoomItem();
        return result;
    }

    //채팅방 생성
    public int createChatRoom(ChatRoomItem chatRoomItem){
        int result = 0;
        return result;
    }

    //채팅방 삭제
    public int deleteChatRoom(ChatRoomItem chatRoomItem){
        int result = 0;
        return result;
    }

    //채팅방 수정
    public int updateChatRoom(ChatRoomItem chatRoomItem){
        int result = 0;
        return result;
    }

    //채팅방의 채팅 내용 조회
    public List<ChatMessageItem> selectChatMessageInChatRoom(){
        List<ChatMessageItem> chatMessageItems = new ArrayList();
        return chatMessageItems;
    }

    //채팅 내용 DB에 저장
    public int inputChatMessage(ChatMessageItem chatMessageItem){
        int result = 0;
        return result;
    }

    //채팅글 삭제
    public int deleteChatMessage(ChatMessageItem chatMessageItem){
        int result = 0;
        return result;
    }


}
