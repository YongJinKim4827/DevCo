package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(value = "/")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    @RequestMapping(value = "/signup", method = RequestMethod.POST)
    public void signUp(@RequestBody UserItem data) throws Exception{
        userService.signUp(data);
    }

    @RequestMapping(value = "/user/select", method = RequestMethod.GET)
    public List<UserItem> selectUserItem() throws Exception{
        List<UserItem> items = new ArrayList();
        UserItem param = new UserItem();
        items = userService.selectUserItem(param);
        return items;
    }

    @RequestMapping(value = "/user/update", method = RequestMethod.POST)
    public UserItem updateUserItem(@RequestBody UserItem data) throws Exception{
        UserItem item = new UserItem();
        userService.updateUserItem(data);
        return item;
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
}
