package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.UserItem;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Repository
public class UserRepositoryImpl implements UserRepository{

    @Autowired
    @Qualifier("sqlSessionTemplate")
    private SqlSession sqlSession;

    @Override
    public int signup(UserItem userItem){
        int result = 0;
        System.out.println(userItem.toString());
        result = sqlSession.insert("userRepository.registryUser", userItem);
        return result;
    }

    @Override
    public UserItem updateUserItem(UserItem userItem) {
        sqlSession.insert("userRepository.updateUser", userItem);
        return null;
    }

    @Override
    public int changeUseChatting(UserItem userItem) {
        int result = sqlSession.update("userRepository.changUseChatting", userItem);
        return result;
    }
    
    @Override
    public int updateUserByAdmin(UserItem userItem) {
        int result = sqlSession.update("userRepository.updateUserByAdmin", userItem);
        return result;
    }

    @Override
    public int deleteUserItem(UserItem userItem) {
        int result = 0;
        result= sqlSession.insert("userRepository.deleteUser", userItem);
        return result;
    }

    @Override
    public List<UserItem> selectUserItem(UserItem userItem) {
        List<UserItem> result = new ArrayList();
        result = sqlSession.selectList("userRepository.selectUserItem", userItem);
        return result;
    }

    @Override
    public UserItem validUserCheck(String username) {
        UserItem result = new UserItem();
        UserItem param = new UserItem();
        param.setUserId(username);
        result = sqlSession.selectOne("validUserCheck", param);
        return result;
    }


    
}
