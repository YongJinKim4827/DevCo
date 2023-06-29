package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.ReplyItem;
import com.cyberi.devcommunity.repository.ReplyRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReplyService {
    private final ReplyRepository replyRepository;

    public ReplyService(ReplyRepository replyRepository){
        this.replyRepository = replyRepository;
    }

    public List<ReplyItem> selectReply(ReplyItem replyItem){
        List<ReplyItem> items = new ArrayList();
        items = replyRepository.selectReply(replyItem);
        return items;
    }

    public ReplyItem registryReply(ReplyItem replyItem){
        ReplyItem item = new ReplyItem();
        int registryResult = 0;
        registryResult = replyRepository.registryReply(replyItem);
        return item;
    }

    public ReplyItem updateReply(ReplyItem replyItem){
        ReplyItem updateReplyItem = new ReplyItem();
        int updateResult = 0;
        updateResult = replyRepository.updateReply(replyItem);
        return updateReplyItem;
    }

    public int deleteReply(ReplyItem replyItem){
        int deleteResult = 0;
        replyRepository.deleteReply(replyItem);
        return deleteResult;
    }
}
