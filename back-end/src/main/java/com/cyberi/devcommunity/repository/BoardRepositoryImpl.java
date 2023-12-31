package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.dto.BoardLikeItem;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class BoardRepositoryImpl implements BoardRepository{

    @Autowired
    @Qualifier("sqlSessionTemplate")
    private SqlSession sqlSession;

    @Override
    public List<BoardItem> selectBoardItems(BoardItem boardItem) {
        List<BoardItem> result = sqlSession.selectList("selectBoardList", boardItem);
        return result;
    }

    @Override
    public List<BoardItem> selectMyboard(BoardItem boardItem) {
        List<BoardItem> result = sqlSession.selectList("selectMyBoard", boardItem);
        return result;
    }

    @Override
    public BoardItem selectBoardItem(BoardItem boardItem) {
        BoardItem result = new BoardItem();
        List<BoardItem> items = new ArrayList();
        items = sqlSession.selectList("selectBoardItem", boardItem);
        result = items.get(0);
        return result;
    }

    @Override
    public int updateBoardItem(BoardItem boardItem) {
        int result = sqlSession.update("updateBoard", boardItem);
        return result;
    }

    @Override
    public int increaseViews(BoardItem boardItem) {
        int result = sqlSession.update("increaseViews", boardItem);
        return 0;
    }

    @Override
    public int registryBoardItem(BoardItem boardItem) {
        int result = sqlSession.insert("registryBoard", boardItem);
        return result;
    }

    @Override
    public int deleteBoardItem(BoardItem boardItem) {
        int result = sqlSession.delete("deleteBoard", boardItem);
        return result;
    }

    @Override
    public int insertLike(BoardLikeItem boardLikeItem) {
        int result = sqlSession.insert("insertLike", boardLikeItem);
        return result;
    }

    @Override
    public List<BoardLikeItem> selectLikeBoard(BoardLikeItem boardLikeItem) {
        List<BoardLikeItem> result = sqlSession.selectList("selectLikeBoard", boardLikeItem);
        return result;
    }

    @Override
    public int updateLike(BoardLikeItem boardLikeItem) {
        int result = sqlSession.update("updateLike", boardLikeItem);
        return result;
    }

    @Override
    public List<BoardItem> selectMainBoardList(BoardItem boardItem) {
        List<BoardItem> result = sqlSession.selectList("mainBoardList", boardItem);
        return result;
    }

    @Override
    public List<BoardItem> weeklyBoardList(BoardItem boardItem) {
        List<BoardItem> result = sqlSession.selectList("weeklyBest", boardItem);
        return result;
    }
    
    
}
