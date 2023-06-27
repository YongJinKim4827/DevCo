package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.UserItem;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserRepositoryImpl implements UserRepository{
    @Override
    public int signup(UserItem userItem) {
        return 0;
    }

    @Override
    public UserItem updateUserItem(UserItem userItem) {
        return null;
    }

    @Override
    public int deleteUserItem(UserItem userItem) {
        return 0;
    }

    @Override
    public List<UserItem> selectUserItem(UserItem userItem) {
        return null;
    }
}
