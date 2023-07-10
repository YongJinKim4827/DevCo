package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.dto.UserChatItem;
import com.cyberi.devcommunity.dto.UserItem;

import java.util.List;

public interface ChatRepository {
    public List<UserChatItem> selectChatRoom(UserChatItem chatRoomItem);
    public int selectNonReadedMessage(ChatMessageItem chatMessageItem);
    public int createChatRoom(ChatRoomItem chatRoomItem);
    public int insertUserChattingRoom(UserChatItem userChatItem);
    public int deleteChatRoom(ChatRoomItem chatRoomItem);
    public int readedMessage(ChatRoomItem chatRoomItem);
    public List<ChatMessageItem> selectChatMessageInChatRoom(ChatMessageItem chatMessageItem);
    public int inputChatMessage(ChatMessageItem chatMessageItem);
    public int deleteChatMesage(ChatMessageItem chatMessageItem);
}
