package com.cyberi.devcommunity.repository;


import com.cyberi.devcommunity.dto.ChatMessageItem;
import com.cyberi.devcommunity.dto.ChatRoomItem;
import com.cyberi.devcommunity.dto.UserItem;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ChatRepositryImpl implements ChatRepository {

    @Autowired
    @Qualifier("sqlSessionTemplate")
    private SqlSession sqlSession;

    @Override
    public ChatRoomItem selectChatRoom(ChatRoomItem chatRoomItem) {
        return null;
    }

    @Override
    public int selectNonReadedMessage(UserItem userItem) {
        int result = sqlSession.selectList("chatMapper.selectNonReadedMessage").size();
        return 0;
    }

    @Override
    public int createChatRoom(ChatRoomItem chatRoomItem) {
        return 0;
    }

    @Override
    public int deleteChatRoom(ChatRoomItem chatRoomItem) {
        return 0;
    }

    @Override
    public List<ChatMessageItem> selectChatMessageInChatRoom(ChatMessageItem chatMessageItem) {
        return null;
    }

    @Override
    public int inputChatMessage(ChatMessageItem chatMessageItem) {
        return 0;
    }

    @Override
    public int deleteChatMesage(ChatMessageItem chatMessageItem) {
        return 0;
    }
}
