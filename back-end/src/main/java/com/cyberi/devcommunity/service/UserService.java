package com.cyberi.devcommunity.service;

import com.cyberi.devcommunity.dto.*;
import com.cyberi.devcommunity.repository.BoardRepository;
import com.cyberi.devcommunity.repository.ChatRepository;
import com.cyberi.devcommunity.repository.ReplyRepository;
import com.cyberi.devcommunity.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BoardRepository boradRepository;
    private final ChatRepository chatRepository;
    private final ReplyRepository replyRepository;

    public UserService(UserRepository userRepository,
                       BoardRepository boardRepository,
                       ChatRepository chatRepository,
                       ReplyRepository replyRepository){
        this.userRepository = userRepository;
        this.boradRepository = boardRepository;
        this.chatRepository = chatRepository;
        this.replyRepository = replyRepository;
    }

    public int signUp(UserItem userItem) throws Exception {
        try{
            BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
            userItem.setUserPassword(passwordEncoder.encode(userItem.getUserPassword()));
            userRepository.signup(userItem);
            return 1;
        }catch (Exception e){
            System.out.println(e);
            throw new Exception();
        }
    }

    public List<UserItem> selectUserItem(UserItem userItem) throws Exception{
        List<UserItem> items = new ArrayList<>();
        items = userRepository.selectUserItem(userItem);
        return items;
    }

    public List<UserHistoryItem> selectUserHistory(String userId){
        List<UserHistoryItem> result = new ArrayList();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyy-mm-dd HH:mm:ss");
        //게시글 이력 조회
        List<BoardItem> boardHistory = new ArrayList();
        BoardItem boardItem = new BoardItem();
        boardItem.setWriter(userId);
        boardHistory = boradRepository.selectBoardItems(boardItem);
        for(BoardItem boardHistoryItem : boardHistory){
            UserHistoryItem userHistory = new UserHistoryItem();
            userHistory.setUserId(userId);
            userHistory.setType(converCategory(boardHistoryItem.getBoardType()));
            userHistory.setTitle(boardHistoryItem.getBoardTitle());
            userHistory.setKeyword("게시물");
            userHistory.setLink("/view/"+boardHistoryItem.getBoardType().toLowerCase() + "/" + boardHistoryItem.getBoardNo());
            userHistory.setHistoryDate(dateFormat.format(boardHistoryItem.getWriteDate()));
            result.add(userHistory);
        }

        //댓글 이력 조회
        List<ReplyItem> replyHistory = new ArrayList();
        ReplyItem replyItem = new ReplyItem();
        replyItem.setWriter(userId);
        replyHistory = replyRepository.selectReplyHistory(replyItem);
        for(ReplyItem replyHistoryItem : replyHistory){
            UserHistoryItem userHistory = new UserHistoryItem();
            userHistory.setUserId(userId);
            userHistory.setType(converCategory(replyHistoryItem.getBoardType()));
            userHistory.setKeyword("댓글");
            userHistory.setTitle(replyHistoryItem.getBoardTitle());
            userHistory.setHistoryDate(dateFormat.format(replyHistoryItem.getReplyDate()));
            userHistory.setLink("/view/" + replyHistoryItem.getBoardType().toLowerCase() + "/" +replyHistoryItem.getBoardNo());
            result.add(userHistory);
        }

        //채팅 이력 조회
        List<ChatMessageItem> chatHistory = new ArrayList();
        List<ChatRoomItem> chatRoomHistory = new ArrayList();
        ChatMessageItem chatMessageItem = new ChatMessageItem();
        chatMessageItem.setUser(userId);

        for(ChatRoomItem chatRoomItem : chatRoomHistory){
            UserHistoryItem userHistory = new UserHistoryItem();
            userHistory.setUserId(userId);
            userHistory.setType("채팅");
            userHistory.setKeyword("채팅");
            userHistory.setHistory("" + "님과의 채팅을 시작했습니다.");
            userHistory.setHistoryDate(dateFormat.format(chatRoomItem.getCreateRoomDate()));
            userHistory.setLink("/chat");
            result.add(userHistory);
            if(chatRoomItem.getEndRoomtDate() != null && chatRoomItem.getEndRoomtDate().equals("")){
                userHistory.setType("채팅");
                userHistory.setHistoryDate(dateFormat.format(chatRoomItem.getEndRoomtDate()));
                result.add(userHistory);
            }
        }
        return result;
    }

    public String converCategory(String boardType){
        String category = "";
        if(boardType == null || boardType.equals("")){
            return category = "없음";
        }
        switch (boardType){
            case "KNOWLEDGE":
                category = "지식공유";
                break;
            case "QUESTION":
                category = "Q&A";
                break;
            case "COMMUNITY":
                category = "커뮤니티";
                break;
            case "NOTICE":
                category = "공지사항";
                break;

            default:
                category = "X";
        }
        return category;
    }

    public UserItem updateUserItem(UserItem userItem) throws Exception{
        UserItem updateItem = new UserItem();
        try{
            updateItem = userRepository.updateUserItem(userItem);
        }catch(Exception e){
            throw new Exception();
        }
        return updateItem;
    }

    public int changeUseChatting(UserItem userItem){
        int result = 0;
        result = userRepository.changeUseChatting(userItem);
        return result;
    }

    public int deleteUserItem(UserItem userItem){
        int result = 0;
        userRepository.deleteUserItem(userItem);
        return result;
    }
}
