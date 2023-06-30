package com.cyberi.devcommunity.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChatMessageItem {
    private Integer roomSeq;
    private String message;
    private String user;
}
