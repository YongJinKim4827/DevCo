package com.cyberi.devcommunity.repository;


import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.dto.UserChatItem;
import com.cyberi.devcommunity.dto.UserItem;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ChatRepositryImpl implements ChatRepository {

    @Autowired
    @Qualifier("sqlSessionTemplate")
    private SqlSession sqlSession;

    @Override
    public List<UserChatItem> selectChatRoom(UserChatItem userChatItem) {
        List<UserChatItem> result =  sqlSession.selectList("chatMapper.selectChatRoom", userChatItem);
        return result;
    }

    @Override
    public int selectNonReadedMessage(ChatMessageItem chatMessageItem) {
        int result = sqlSession.selectList("chatMapper.selectNonReadedMessage", chatMessageItem).size();
        return result;
    }

    @Override
    public int createChatRoom(ChatRoomItem chatRoomItem) {
        int result = 0;
        result = sqlSession.insert("createChatRoom", chatRoomItem);
        return 0;
    }

    @Override
    public int insertUserChattingRoom(UserChatItem userChatItem) {
        int result = 0;
        result = sqlSession.insert("insertUserChattingRoom", userChatItem);
        return 0;
    }

    @Override
    public int deleteChatRoom(ChatRoomItem chatRoomItem) {
        int result = 0;
        result = sqlSession.delete("deleteChatRoom", chatRoomItem);
        return result;
    }

    @Override
    public List<ChatMessageItem> selectChatMessageInChatRoom(ChatMessageItem chatMessageItem) {
        List<ChatMessageItem> result = new ArrayList();
        result = sqlSession.selectList("selectChatMessageInChatRoom", chatMessageItem);
        return result;
    }

    @Override
    public int inputChatMessage(ChatMessageItem chatMessageItem) {
        int result = 0;
        result = sqlSession.insert("inputChatMessage", chatMessageItem);
        return 0;
    }

    @Override
    public int deleteChatMesage(ChatMessageItem chatMessageItem) {
        return 0;
    }

    @Override
    public int readedMessage(ChatMessageItem chatMessageItem) {
        int result = 0;
        result = sqlSession.update("readedChatting", chatMessageItem);
        return result;
    }
}
