package com.cyberi.devcommunity.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Getter
@Setter
public class ChatRoomItem {
    private String chatRoomNo; //채팅룸 ID
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM:SS")
    private Date createRoomDate; //채팅방 생성 시간
}
