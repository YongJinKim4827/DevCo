package com.cyberi.devcommunity.config;

import com.cyberi.devcommunity.repository.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    @Bean
    public UserRepository userRepository(){
        return new UserRepositoryImpl();
    }

    @Bean
    public BoardRepository boardRepository(){
        return new BoardRepositoryImpl();
    }

    @Bean
    public ReplyRepository replyRepository(){
        return new ReplyRepositoryImpl();
    }

    @Bean
    ChatRepository chatRepository(){
        return new ChatRepositryImpl();
    }
}
