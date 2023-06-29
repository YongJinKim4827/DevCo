package com.cyberi.devcommunity.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cyberi.devcommunity.repository.UserRepository;
import com.cyberi.devcommunity.repository.UserRepositoryImpl;

@Configuration
public class SpringConfig {
    @Bean
    public UserRepository userRepository(){
        return new UserRepositoryImpl();
    }
}
