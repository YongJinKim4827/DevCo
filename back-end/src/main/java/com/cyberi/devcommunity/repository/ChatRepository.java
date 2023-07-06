package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.dto.UserItem;

import java.util.List;

public interface ChatRepository {
    public ChatRoomItem selectChatRoom(ChatRoomItem chatRoomItem);
    public int selectNonReadedMessage(UserItem userItem);
    public int createChatRoom(ChatRoomItem chatRoomItem);
    public int deleteChatRoom(ChatRoomItem chatRoomItem);
    public List<ChatMessageItem> selectChatMessageInChatRoom(ChatMessageItem chatMessageItem);
    public int inputChatMessage(ChatMessageItem chatMessageItem);
    public int deleteChatMesage(ChatMessageItem chatMessageItem);
}
