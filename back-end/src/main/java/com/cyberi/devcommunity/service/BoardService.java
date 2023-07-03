package com.cyberi.devcommunity.service;


import com.cyberi.devcommunity.dto.BoardItem;
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

    public List<BoardItem> selectBoardList(BoardItem param){
        List<BoardItem> items = new ArrayList();
        items = boardRepository.selectBoardItems(param);
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

}
