package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.dto.BoardLikeItem;
import com.cyberi.devcommunity.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
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

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<BoardItem> selectBoardList(@RequestParam("category") String catrgory){
        BoardItem param = new BoardItem();
        param.setBoardType(catrgory.toUpperCase());
        List<BoardItem> items = new ArrayList();
        items = boardService.selectBoardList(param);
        return items;
    }

    @RequestMapping(value = "/select", method = RequestMethod.GET)
    public BoardItem selectBoardItem(@RequestParam("category") String category, 
            @RequestParam("boardNo") String boardNo,
            @RequestParam("user") String loginUser) throws Exception{
        BoardItem result = new BoardItem();
        BoardItem param = new BoardItem();
        param.setBoardType(category.toUpperCase());
        param.setBoardNo(boardNo);
        param.setLoginUser(loginUser);
        result = boardService.selectBoardItem(param);
        return result;
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public BoardItem updateBoardItem(@RequestBody BoardItem boardItem){
        BoardItem item = new BoardItem();
        item = boardService.updateBoardItem(boardItem);
        return item;
    }

    @RequestMapping(value = "/registry", method = RequestMethod.POST)
    public BoardItem registryBoardItem(@RequestBody BoardItem boardItem){
        BoardItem item = new BoardItem();
        item = boardService.registryBoardItem(boardItem);
        return item;
    }

    @RequestMapping(value = "/like", method = RequestMethod.POST)
    public int likeBoardItem(@RequestBody BoardLikeItem likeItem){
        int result = 0;
        result = boardService.likeBoard(likeItem);
        return result;
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public int deleteBoardItem(@RequestBody BoardItem boardItem){
        int result = 0;
        result = boardService.deleteBoardItem(boardItem);
        return result;
    }
}
