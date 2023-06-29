package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.ReplyItem;

import java.util.List;

public interface ReplyRepository {
    public List<ReplyItem> selectReply(ReplyItem replyItem);
    public int registryReply(ReplyItem replyItem);
    public int updateReply(ReplyItem replyItem);
    public int deleteReply(ReplyItem replyItem);
}
