package com.cyberi.devcommunity.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurationSupport;

@RequiredArgsConstructor
@Component
@EnableWebSocketMessageBroker
public class WebSocketHandler extends WebSocketMessageBrokerConfigurationSupport{

    @Override
    protected void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws-stomp").setAllowedOrigins("http://localhost:3000").withSockJS();
    }
}
