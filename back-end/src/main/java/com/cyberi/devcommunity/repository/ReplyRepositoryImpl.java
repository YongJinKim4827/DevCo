package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.ReplyItem;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReplyRepositoryImpl implements ReplyRepository{

    @Autowired
    @Qualifier("sqlSessionTemplate")
    private SqlSession sqlSession;


    @Override
    public List<ReplyItem> selectReply(ReplyItem replyItem) {
        List<ReplyItem> result = sqlSession.selectList("selectReplyList", replyItem);
        return result;
    }

    @Override
    public List<ReplyItem> selectReplyHistory(ReplyItem replyItem) {
        List<ReplyItem> result = sqlSession.selectList("selectReplyHistory", replyItem);
        return result;
    }

    @Override
    public int registryReply(ReplyItem replyItem) {
        int result = sqlSession.insert("registryReply", replyItem);
        return result;
    }

    @Override
    public int updateReply(ReplyItem replyItem) {
        int result = sqlSession.update("updateReply", replyItem);
        return result;
    }

    @Override
    public int deleteReply(ReplyItem replyItem) {
        int result = sqlSession.delete("deleteReply", replyItem);
        return result;
    }
}
