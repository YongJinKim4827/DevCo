package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import sun.swing.BakedArrayList;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/board")
public class BoardController {

    private final BoardService boardService;

    @Autowired
    public BoardController(BoardService boardService){
        this.boardService = boardService;
    }

    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public List<BoardItem> selectBoardList(BoardItem boardItem){
        List<BoardItem> items = new ArrayList();
        items = boardService.selectBoardList(boardItem);
        return items;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public BoardItem updateBoardItem(@RequestBody BoardItem boardItem){
        BoardItem item = new BoardItem();
        item = boardService.updateBoardItem(boardItem);
        return item;
    }

    @RequestMapping(value = "/registy", method = RequestMethod.POST)
    public BoardItem registryBoardItem(@RequestBody BoardItem boardItem){
        BoardItem item = new BoardItem();
        item = boardService.registryBoardItem(boardItem);
        return item;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public int deleteBoardItem(@RequestBody BoardItem boardItem){
        int result = 0;
        result = boardService.deleteBoardItem(boardItem);
        return result;
    }
}
