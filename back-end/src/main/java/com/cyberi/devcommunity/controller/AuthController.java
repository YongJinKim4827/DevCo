package com.cyberi.devcommunity.controller;

import com.cyberi.devcommunity.dto.JwtToken;
import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class AuthController {

    private final AuthService authService;

    @Autowired
    public AuthController(AuthService authService){
        this.authService = authService;
    }
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public JwtToken login(@RequestBody UserItem userItem){
        try {
            JwtToken loginItem =  authService.login(userItem);
            return loginItem;
        }catch (Exception e){
            System.out.println(e);
        }
        return null;
    }
}
