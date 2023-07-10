package com.cyberi.devcommunity.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardLikeItem {
    private String boardNo;
    private String isLike;
    private String likeUser;
    private Date likeDate;
}
