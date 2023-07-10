package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.dto.UserChatItem;
import com.cyberi.devcommunity.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class ChatService {

    private final ChatRepository chatRepository;

    @Autowired
    public ChatService(ChatRepository chatRepository){
        this.chatRepository = chatRepository;
    }

    //사용자가 속한 채팅방 조회 및 각 채팅방의 최근 글 조회
    public List<UserChatItem> selectChatRoom(String userId){
        UserChatItem param = new UserChatItem();
        param.setUserId(userId);
        List<UserChatItem> result = chatRepository.selectChatRoom(param);
        return result;
    }

    //사용자가 읽지않은 메시지 갯수 조회
    public int selectNonReadedMessage(String userId){
        int result = 0;
        ChatMessageItem chatMessageItem = new ChatMessageItem();
        chatMessageItem.setUserId(userId);
        result = chatRepository.selectNonReadedMessage(chatMessageItem);
        return result;
    }

    //채팅방 생성
    public int createChatRoom(ChatRoomItem chatRoomItem){
        int result = 0;
        //채팅방 고유 아이디 생성
        String chattingRoomUUID = UUID.randomUUID().toString().toUpperCase();
        chatRoomItem.setChattingRoomNo(chattingRoomUUID);
        int createRoomResult = chatRepository.createChatRoom(chatRoomItem);
        for(int i = 0 ; i < chatRoomItem.getUsers().size(); i++){
            UserChatItem userChatItem = new UserChatItem();
            userChatItem.setUserId(chatRoomItem.getUsers().get(i));
            userChatItem.setChattingRoomNo(chattingRoomUUID);
            chatRepository.insertUserChattingRoom(userChatItem);
        }
        return result;
    }



    //채팅방 삭제
    public int deleteChatRoom(ChatRoomItem chatRoomItem){
        int result = 0;
        result = chatRepository.deleteChatRoom(chatRoomItem);
        return result;
    }

    //채팅방 수정
    public int updateChatRoom(ChatRoomItem chatRoomItem){
        int result = 0;
        return result;
    }

    //채팅글 읽음 처리
    public int readedMessage(String chattingRoomNo){
        int result = 0;
        ChatRoomItem chatRoomItem = new ChatRoomItem();
        chatRoomItem.setChattingRoomNo(chattingRoomNo);
        result = chatRepository.readedMessage(chatRoomItem);
        return result;
    }

    //채팅방의 채팅 내용 조회
    public List<ChatMessageItem> selectChatMessageInChatRoom(String chattingRoomNo){
        ChatMessageItem param = new ChatMessageItem();
        param.setChattingRoomNo(chattingRoomNo);
        List<ChatMessageItem> chatMessageItems = new ArrayList();
        chatMessageItems = chatRepository.selectChatMessageInChatRoom(param);
        return chatMessageItems;
    }

    //채팅 내용 DB에 저장
    public int inputChatMessage(ChatMessageItem chatMessageItem){
        int result = 0;
        result = chatRepository.inputChatMessage(chatMessageItem);
        return result;
    }

    //채팅글 삭제
    public int deleteChatMessage(ChatMessageItem chatMessageItem){
        int result = 0;
        return result;
    }
}
