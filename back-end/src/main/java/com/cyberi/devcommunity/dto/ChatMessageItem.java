package com.cyberi.devcommunity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChatMessageItem {
    private String chatContent;
    private String chattingRoomNo;
    private int chatContentNo;
    private String readed;
    private Date chattingDate;
    private String userId;
}
