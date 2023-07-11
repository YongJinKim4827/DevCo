package com.cyberi.devcommunity.service;


import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.dto.BoardLikeItem;
import com.cyberi.devcommunity.repository.BoardRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BoardService {
    private final BoardRepository boardRepository;

    public BoardService(BoardRepository boardRepository){
        this.boardRepository = boardRepository;
    }

    public List<BoardItem> selectMainBoardList(BoardItem param){
        param.setBoardType("QUESTION");
        List<BoardItem> questionItems = boardRepository.selectMainBoardList(param);
        param.setBoardType("COMMUNITY");
        List<BoardItem> knowItems = boardRepository.selectMainBoardList(param);
        param.setBoardType("KNOWLEDGE");
        List<BoardItem> communityItems = boardRepository.selectMainBoardList(param);
        param.setBoardType("NOTICE");
        List<BoardItem> noticeItems = boardRepository.selectMainBoardList(param);
        List<BoardItem> weeklyItems = boardRepository.weeklyBoardList(param);
        List<BoardItem> result = new ArrayList();
        result.addAll(questionItems);
        result.addAll(knowItems);
        result.addAll(communityItems);
        result.addAll(noticeItems);
        result.addAll(weeklyItems);
        return result;
    }

    public List<BoardItem> selectBoardList(BoardItem param){
        List<BoardItem> items = new ArrayList();
        items = boardRepository.selectBoardItems(param);
        return items;
    }

    public List<BoardItem> selectMyboard(String userId){
        List<BoardItem> items = new ArrayList();
        BoardItem param = new BoardItem();
        param.setWriter(userId);
        items = boardRepository.selectMyboard(param);
        return items;
    }

    public BoardItem selectBoardItem(BoardItem param) throws Exception{
        BoardItem result = new BoardItem();
        try {
            boardRepository.increaseViews(param);
            result = boardRepository.selectBoardItem(param);
            return result;
        }catch(Exception e){
            System.out.println(e);
            throw new Exception();
        }
    }

    public BoardItem registryBoardItem(BoardItem boardItem){
        BoardItem registryBoardItem = new BoardItem();
        int registryResult = 0;
        registryResult = boardRepository.registryBoardItem(boardItem);
        return registryBoardItem;
    }

    public BoardItem updateBoardItem(BoardItem boardItem){
        BoardItem updateBoardItem = new BoardItem();
        int updateResult = 0;
        updateResult = boardRepository.updateBoardItem(boardItem);
        return updateBoardItem;
    }

    public int deleteBoardItem(BoardItem boardItem){
        int deleteResult = 0;
        deleteResult = boardRepository.deleteBoardItem(boardItem);
        return deleteResult;
    }

    public int likeBoard(BoardLikeItem likeItem){
        BoardLikeItem param = new BoardLikeItem();
        int result = 0 ;
        param.setBoardNo(likeItem.getBoardNo());
        param.setLikeUser(likeItem.getLikeUser());
        List<BoardLikeItem> likeResult = new ArrayList();
        likeResult = boardRepository.selectLikeBoard(param);
        if(likeResult.size() > 0){
            result = boardRepository.updateLike(likeItem);
        }else{
            result = boardRepository.insertLike(likeItem);
        }
        return result;
    }
}
