package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/admin")
public class AdminController {

    private final UserService userService;

    @Autowired
    public AdminController(UserService userService){
        this.userService = userService;
    }

    @RequestMapping(value = "/user/select", method = RequestMethod.GET)
    public List<UserItem> selectUser() throws Exception{
        List<UserItem> items = new ArrayList();
        UserItem param = new UserItem();
        items = userService.selectUserItem(param);
        return items;
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public UserItem updateUserByAdmin(@RequestBody UserItem userItem) throws Exception{
        UserItem item = new UserItem();
        userService.updateUserByAdmin(userItem);
        return item;
    }

    @RequestMapping(value = "/user/delete", method = RequestMethod.POST)
    public int deleteUser(@RequestBody UserItem userItem){
        int result = 0;
        userService.deleteUserItem(userItem);
        return result;
    }
}
