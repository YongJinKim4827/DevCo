package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.UserItem;
import com.cyberi.devcommunity.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        System.out.print("");
        UserItem userItem = userRepository.validUserCheck(username);
        if(userItem == null){
            return null;
        }
        return createUserDetails(userItem);
    }

    private UserDetails createUserDetails(UserItem userItem){
        return User.builder()
                .username(userItem.getUserId())
                .password(userItem.getUserPassword())
//                .password(passwordEncoder.encode(userItem.getUserPassword()))
                //.password(passwordEncoder.encode("1234"))
                .roles(userItem.getUserRole())
                .build();
    }
}
