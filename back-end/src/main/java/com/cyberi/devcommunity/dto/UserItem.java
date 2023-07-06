package com.cyberi.devcommunity.dto;


import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Setter
@Getter
@ToString
public class UserItem {
    private String userId;
    private String userPassword;
    private String userName;
    private String gender;
    private String email;
    private String userRole;
    private String useChatting;
    private Date signupDate;
}
