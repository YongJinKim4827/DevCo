package com.cyberi.devcommunity.dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class ChatRoomItem {
    private String chattingRoomNo; //채팅룸 ID
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM:SS")
    private Date createRoomDate; //채팅방 생성 시간
    private List<String> users;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:MM:SS")
    private Date endRoomtDate;//채팅 종료 시간
    private String recentMessage;
}
