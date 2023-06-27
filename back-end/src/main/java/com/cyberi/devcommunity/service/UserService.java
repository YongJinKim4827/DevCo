package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.repository.UserRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public int signUp(UserItem userItem) {
        try{
            userRepository.signup(userItem);
            return 1;
        }catch (Exception e){
            return -1;
        }
    }

    public List<UserItem> selectUserItem(UserItem userItem){
        List<UserItem> items = new ArrayList<>();
        items = userRepository.selectUserItem(userItem);
        return items;
    }

    public UserItem updateUserItem(UserItem userItem){
        UserItem updateItem = new UserItem();
        updateItem = userRepository.updateUserItem(userItem);
        return updateItem;
    }

    public int deleteUserItem(UserItem userItem){
        int result = 0;
        userRepository.deleteUserItem(userItem);
        return result;
    }
}
