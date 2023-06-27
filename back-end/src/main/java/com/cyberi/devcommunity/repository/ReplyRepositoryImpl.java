package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.ReplyItem;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ReplyRepositoryImpl implements ReplyRepository{
    @Override
    public List<ReplyItem> selectReply(ReplyItem replyItem) {
        return null;
    }

    @Override
    public ReplyItem registryReply(ReplyItem replyItem) {
        return null;
    }

    @Override
    public ReplyItem updateReply(ReplyItem replyItem) {
        return null;
    }

    @Override
    public int deleteReply(ReplyItem replyItem) {
        return 0;
    }
}
