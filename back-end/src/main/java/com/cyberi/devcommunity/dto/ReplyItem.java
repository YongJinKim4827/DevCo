package com.cyberi.devcommunity.dto;

import lombok.Getter;
import lombok.Setter;

import java.sql.Clob;

@Getter
@Setter
public class ReplyItem {
    private String replyNo; //댓글 ID
    private Clob replyContent; //댓글 내용
    private String writer; //댓글 작성자
    private String boardNo; //게시글 번호
}
