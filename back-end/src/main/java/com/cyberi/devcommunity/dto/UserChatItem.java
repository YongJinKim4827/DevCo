package com.cyberi.devcommunity.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Getter
@Setter
@ToString
public class UserChatItem {
    private String chatRoomNo;
    @DateTimeFormat(pattern = "yyyy-mm-dd HH:MM:SS")
    private Date createRoomDate;
}
