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

    public List<BoardItem> selectBoardList(BoardItem boardItem){
        BoardItem param = new BoardItem();
        List<BoardItem> items = new ArrayList();
        items = boardRepository.selectBoardItems(param);
        return items;
    }

    public BoardItem registryBoardItem(BoardItem boardItem){
        BoardItem registryBoardItem = new BoardItem();
        registryBoardItem = boardRepository.registryBoardItem(boardItem);
        return registryBoardItem;
    }

    public BoardItem updateBoardItem(BoardItem boardItem){
        BoardItem updateBoardItem = new BoardItem();
        updateBoardItem = boardRepository.updateBoardItem(boardItem);
        return updateBoardItem;
    }

    public int deleteBoardItem(BoardItem boardItem){
        int result = 0;
        boardRepository.deleteBoardItem(boardItem);
        return result;
    }

}
