package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.BoardItem;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BoardRepositoryImpl implements BoardRepository{

    @Override
    public List<BoardItem> selectBoardItems(BoardItem boardItem) {
        return null;
    }

    @Override
    public BoardItem updateBoardItem(BoardItem boardItem) {
        return null;
    }

    @Override
    public BoardItem registryBoardItem(BoardItem boardItem) {
        return null;
    }

    @Override
    public int deleteBoardItem(BoardItem boardItem) {
        return 0;
    }
}
