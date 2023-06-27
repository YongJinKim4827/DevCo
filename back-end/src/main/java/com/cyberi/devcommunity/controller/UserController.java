package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void signUp(@RequestBody UserItem data){
        System.out.println("허허허");
    }

    @RequestMapping(value = "/user/select", method = RequestMethod.GET)
    public List<UserItem> selectUserItem(){
        List<UserItem> items = new ArrayList();
        return items;
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public UserItem updateUserItem(@RequestBody UserItem data) {
        UserItem item = new UserItem();
        return item;
    }

    @RequestMapping(value = "/user/delete", method = RequestMethod.POST)
    public int deleteUserItem(@RequestBody UserItem data){
        int result = 0;
        return result;
    }
    @RequestMapping(value = "/user/test", method = RequestMethod.GET)
    public String test(){
        UserItem userItem = new UserItem();
        List<UserItem> items = new ArrayList();
        items = userService.selectUserItem(userItem);
        return items.get(0).toString();
    }
}
