package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public int signUp(UserItem userItem) throws Exception {
        try{
            System.out.println("####### SERVICE INSERT ######");
            userRepository.signup(userItem);
            return 1;
        }catch (Exception e){
            System.out.println("####### SERVICE ERROR ######");
            System.out.println(e);
            throw new Exception();
        }
    }

    public List<UserItem> selectUserItem(UserItem userItem) throws Exception{
        System.out.println("####### SERVICE SELECT ######");
        List<UserItem> items = new ArrayList<>();
        items = userRepository.selectUserItem(userItem);
        return items;
    }

    public UserItem updateUserItem(UserItem userItem) throws Exception{
        System.out.println("####### SERVICE UPDATE ######");
        UserItem updateItem = new UserItem();
        try{

        }catch(Exception e){
            throw new Exception();
        }
        updateItem = userRepository.updateUserItem(userItem);
        return updateItem;
    }

    public int deleteUserItem(UserItem userItem){
        System.out.println("####### SERVICE DELETE ######");
        int result = 0;
        userRepository.deleteUserItem(userItem);
        return result;
    }
}
