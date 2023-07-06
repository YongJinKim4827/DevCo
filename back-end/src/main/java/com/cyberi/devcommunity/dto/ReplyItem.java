package com.cyberi.devcommunity.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Clob;
import java.util.Date;

@Getter
@Setter
@ToString
public class ReplyItem {
    private String replyNo; //댓글 ID
    private String replyContent; //댓글 내용
    private String writer; //댓글 작성자
    private String boardNo; //게시글 번호
    @DateTimeFormat(pattern = "yyyy-mm-dd HH:MM:SS")
    private Date replyDate;
    private String boardTitle;
    private String boardType;
}
