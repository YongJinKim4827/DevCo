package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.Util.TokenProvider;
import com.cyberi.devcommunity.dto.JwtToken;
import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.repository.UserRepository;
import com.cyberi.devcommunity.repository.UserRepositoryImpl;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final AuthenticationManagerBuilder managerBuilder;
    private final TokenProvider jwtTokenProvider;
    private final UserRepositoryImpl userRepository;

    public JwtToken login(UserItem item) throws Exception{
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        try{
            System.out.println("Password : " + passwordEncoder.encode(item.getUserPassword()));
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(item.getUserId(), item.getUserPassword());
            Authentication authentication = managerBuilder.getObject().authenticate(authenticationToken);
            return jwtTokenProvider.generateToken(authentication);
        }catch(Exception e){
            throw new RuntimeException(e);
        }
    }
//    private UserItem checkUser(UserItem userItem){
//        UserItem result = new UserItem();
//        result = userRepository.validUserCheck(userItem);
//        return result;
//    }
}
