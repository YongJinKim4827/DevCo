package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.ReplyItem;
import com.cyberi.devcommunity.service.ReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/reply")
public class ReplyController {

    private final ReplyService replyService;

    @Autowired
    public ReplyController(ReplyService replyService){
        this.replyService = replyService;
    }

    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public List<ReplyItem> selectReply(@RequestParam("boardNo") String boardNo){
        List<ReplyItem> items = new ArrayList<>();
        ReplyItem replyItem = new ReplyItem();
        replyItem.setBoardNo(boardNo);
        items = replyService.selectReply(replyItem);
        return items;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ReplyItem updateReply(@RequestBody ReplyItem replyItem){
        ReplyItem item = new ReplyItem();
        item = replyService.updateReply(replyItem);
        return replyItem;
    }

    @RequestMapping(value = "/registry", method = RequestMethod.POST)
    public ReplyItem registryReply(@RequestBody ReplyItem replyItem){
        ReplyItem item = new ReplyItem();
        item = replyService.registryReply(replyItem);
        return item;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public int deleteReply(@RequestBody ReplyItem replyItem){
        int result = 0;
        result = replyService.deleteReply(replyItem);
        return result;
    }
}
