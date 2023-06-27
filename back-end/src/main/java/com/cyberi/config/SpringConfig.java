package com.cyberi.config;

import com.cyberi.devcommunity.repository.*;
import com.cyberi.devcommunity.service.BoardService;
import com.cyberi.devcommunity.service.ReplyService;
import com.cyberi.devcommunity.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SpringConfig {
    @Bean
    public UserService userService(){
        return new UserService(userRepository());
    }

    @Bean
    public UserRepository userRepository(){
        return new UserRepositoryImpl();
    }

    @Bean
    public BoardService boardService(){
        return new BoardService(boardRepository());
    }

    @Bean
    public BoardRepository boardRepository(){
        return new BoardRepositoryImpl();
    }

    @Bean
    public ReplyService replyService(){
        return new ReplyService(replyRepository());
    }

    @Bean
    public ReplyRepository replyRepository(){
        return new ReplyRepositoryImpl();
    }


}
