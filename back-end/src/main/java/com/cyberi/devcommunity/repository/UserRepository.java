package com.cyberi.devcommunity.repository;

import com.cyberi.devcommunity.dto.UserItem;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface UserRepository {
    public int signup(UserItem userItem); //회원가입
    public UserItem updateUserItem(UserItem userItem); // 사용자 수정
    public int changeUseChatting(UserItem userItem);//채팅 여부 수정
    public int updateUserByAdmin(UserItem userItem);
    public int deleteUserItem(UserItem userItem); //사용자 삭제
    public List<UserItem> selectUserItem(UserItem userItem);//사용자 조회
    public UserItem validUserCheck(String username);// 스프링 시큐리티 유저 확인
}
