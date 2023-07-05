package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
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
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            userItem.setUserPassword(passwordEncoder.encode(userItem.getUserPassword()));
            userRepository.signup(userItem);
            return 1;
        }catch (Exception e){
            System.out.println(e);
            throw new Exception();
        }
    }

    public List<UserItem> selectUserItem(UserItem userItem) throws Exception{
        List<UserItem> items = new ArrayList<>();
        items = userRepository.selectUserItem(userItem);
        return items;
    }

    public UserItem updateUserItem(UserItem userItem) throws Exception{
        UserItem updateItem = new UserItem();
        try{
            updateItem = userRepository.updateUserItem(userItem);
        }catch(Exception e){
            throw new Exception();
        }
        return updateItem;
    }

    public int changeUseChatting(UserItem userItem){
        int result = 0;
        result = userRepository.changeUseChatting(userItem);
        return result;
    }

    public int deleteUserItem(UserItem userItem){
        int result = 0;
        userRepository.deleteUserItem(userItem);
        return result;
    }
}
