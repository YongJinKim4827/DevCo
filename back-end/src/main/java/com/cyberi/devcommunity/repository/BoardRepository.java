package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.dto.BoardLikeItem;

import java.util.List;

public interface BoardRepository {
    public List<BoardItem> selectBoardItems(BoardItem boardItem);
    public List<BoardItem> selectMyboard(BoardItem boardItem);
    public BoardItem selectBoardItem(BoardItem boardItem);
    public int updateBoardItem(BoardItem boardItem);
    public int increaseViews(BoardItem boardItem);
    public int registryBoardItem(BoardItem boardItem);
    public int deleteBoardItem(BoardItem boardItem);
    public List<BoardLikeItem> selectLikeBoard(BoardLikeItem boardLikeItem);
    public int insertLike(BoardLikeItem boardLikeItem);
    public int updateLike(BoardLikeItem boardLikeItem);
}
