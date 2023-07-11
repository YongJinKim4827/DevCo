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
public class BoardItem {
    private String boardNo; //게시글 번호
    private String boardContent; //게시글 내용
    private char share; // 공유여부 : Y/N
    private int views; //조회수
    private String boardType; // 게시글 분류(category)
    private String boardTitle; //게시글 제목
    @DateTimeFormat(pattern = "yyyy-mm-dd HH:MM:SS")
    private Date writeDate; //작성시간
    private String writer; // 작성자
    private int like;//좋아요 숫자
    private int replyCount; //댓글 갯수
    private String loginUser;
    private String boardLikeUser;
    private String searchCondition;
}
