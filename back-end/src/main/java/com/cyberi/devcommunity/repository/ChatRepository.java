package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;

import java.util.List;

public interface ChatRepository {
    //채팅방
    public ChatRoomItem selectChatRoom(ChatRoomItem chatRoomItem);
    public int createChatRoom(ChatRoomItem chatRoomItem);
    public int deleteChatRoom(ChatRoomItem chatRoomItem);

    //채팅
    public List<ChatMessageItem> selectChatMessageInChatRoom(ChatMessageItem chatMessageItem);
    public int inputChatMessage(ChatMessageItem chatMessageItem);
    public int deleteChatMesage(ChatMessageItem chatMessageItem);
}
