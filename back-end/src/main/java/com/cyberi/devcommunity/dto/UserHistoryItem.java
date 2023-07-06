package com.cyberi.devcommunity.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserHistoryItem {
    private String userId;
    private String history;
    private String type;
    private String historyDate;
    private String title;
    private String keyword;
    private String link;
}
