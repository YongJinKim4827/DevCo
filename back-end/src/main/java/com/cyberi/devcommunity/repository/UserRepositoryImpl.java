package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.UserItem;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository{

    @Autowired
    @Qualifier("sqlSessionTemplate")
    private SqlSession sqlSession;

    @Override
    public int signup(UserItem userItem){
        int result = 0;
        System.out.println("####### REPOSITORY INSERT ######");
        System.out.println(userItem.toString());
        result = sqlSession.insert("userRepository.registryUser", userItem);
        System.out.println("###### Result : " + result);
        System.out.println("#####################################");
        return result;
    }

    @Override
    public UserItem updateUserItem(UserItem userItem) {
        System.out.println("####### REPOSITORY UPDATE ######");
        System.out.println(userItem.toString());
        sqlSession.insert("userRepository.updateUser", userItem);
        System.out.println("#####################################");
        return null;
    }

    @Override
    public int deleteUserItem(UserItem userItem) {
        System.out.println("####### REPOSITORY DELETE ######");
        System.out.println(userItem.toString());
        sqlSession.insert("userRepository.deleteUser", userItem);
        System.out.println("#####################################");
        return 0;
    }

    @Override
    public List<UserItem> selectUserItem(UserItem userItem) {
        List<UserItem> result = new ArrayList();
        System.out.println("####### REPOSITORY SELECT ######");
        result = sqlSession.selectList("userRepository.selectUserItem", userItem);
        System.out.println("#####################################");
        return result;
    }
}
