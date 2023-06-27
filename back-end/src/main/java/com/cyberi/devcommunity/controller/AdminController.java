package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.BoardItem;
import com.cyberi.devcommunity.dto.UserItem;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/admin", method = RequestMethod.POST)
public class AdminController {
    @RequestMapping(value = "/user/select", method = RequestMethod.GET)
    public List<UserItem> selectUser(){
        List<UserItem> items = new ArrayList();
        return items;
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public UserItem updateUser(@RequestBody UserItem userItem){
        UserItem item = new UserItem();
        return item;
    }

    @RequestMapping(value = "/user/delete", method = RequestMethod.POST)
    public int deleteUser(@RequestBody UserItem userItem){
        int result = 0;
        return result;
    }

    @RequestMapping(value = "/notice/update", method = RequestMethod.POST)
    public BoardItem updateNotice(@RequestBody BoardItem boardItem){
        BoardItem item = new BoardItem();
        return item;
    }
}
