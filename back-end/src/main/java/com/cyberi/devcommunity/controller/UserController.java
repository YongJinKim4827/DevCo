package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.UserHistoryItem;
import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.service.EmailService;
import com.cyberi.devcommunity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/")
public class UserController {

    private final UserService userService;
    private final EmailService emailService;

    @Autowired
    public UserController(UserService userService, EmailService emailService){
        this.userService = userService;
        this.emailService = emailService;
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void signUp(@RequestBody UserItem data) throws Exception{
        userService.signUp(data);
    }

    @RequestMapping(value = "/user/select", method = RequestMethod.GET)
    public List<UserItem> selectUserItem(@RequestParam("id") String userId) throws Exception{
        List<UserItem> items = new ArrayList();
        UserItem param = new UserItem();
        param.setUserId(userId);
        items = userService.selectUserItem(param);
        return items;
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public UserItem updateUserItem(@RequestBody UserItem data) throws Exception{
        UserItem item = new UserItem();
        userService.updateUserItem(data);
        return item;
    }

    @RequestMapping(value = "/user/chatting", method = RequestMethod.POST)
    public int changUseChatting(@RequestBody UserItem userItem){
        int result = 0;
        result = userService.changeUseChatting(userItem);
        return result;
    }

    @RequestMapping(value = "/user/delete", method = RequestMethod.POST)
    public int deleteUserItem(@RequestBody UserItem data) throws Exception{
        int result = 0;
        userService.deleteUserItem(data);
        return result;
    }

    @RequestMapping(value = "/user/test", method = RequestMethod.GET)
    public String test() throws Exception{
        UserItem userItem = new UserItem();
        List<UserItem> items = new ArrayList();
        items = userService.selectUserItem(userItem);
        return items.get(0).toString();
    }

    @RequestMapping(value = "/user/mail", method = RequestMethod.POST)
    public String mailCheck(@RequestBody UserItem userItem) throws Exception{
        String result = "";
        result = emailService.sendSimpleMessage(userItem.getEmail());
        return result;
    }

    @RequestMapping(value = "/user/history", method = RequestMethod.GET)
    public List<UserHistoryItem> selectUserHistroy(@RequestParam("id") String userId){
        List<UserHistoryItem> result = new ArrayList();
        result = userService.selectUserHistory(userId);
        return result;
    }
}
