package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.BoardItem;

import java.util.List;

public interface BoardRepository {
    public List<BoardItem> selectBoardItems(BoardItem boardItem);
    public BoardItem updateBoardItem(BoardItem boardItem);
    public BoardItem registryBoardItem(BoardItem boardItem);
    public int deleteBoardItem(BoardItem boardItem);
}
