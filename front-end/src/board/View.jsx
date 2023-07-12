import React, { useRef } from 'react'
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import ReplyContent from './ReplyContent';
import './board.css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import likeImg from '../assets/img/free-icon-like-2107854.png';
import nolikeImg from '../assets/img/like.png';
import viewImg from '../assets/img/view.png';
import { getCookie, getJwtUser, getJwtRole  } from '../login/Cookies';

const View = () => {
    const param = useParams();
    const replyRef = useRef();
    const navigation = useNavigate();
    const [boardContent, setBoardContent] = useState({
        boardNo : '',
        boardTitle : '',
        boardType : '',
        boardContent : '',
        like : '',
        replyCount : '',
        views : '',
        writeDate : '',
        writer : '',
        loginUser : getJwtUser() //현재 로그인한 사용자 정보. 게시물에 좋아요를 했는지 않했는지 판단
    });

    const [isLike, setIsLike] = useState(false);

    const [inputReplyItem, setInputReplyItem] = useState({
        replyNo: '',
        replyContent : '',
        writer : '',
        writeDate : '',
        boardNo : ''
    });

    const [replyItems, setReplyItems] = useState([]);

    useEffect(()=> {
        selectBoard();
    },[])

    const selectBoard = async () => {
        try{
            const boardResponse = await axios.get(`${REQUEST_ORIGIN}/board/select`,{
                params : {
                    category : param.category,
                    boardNo : param.boardNo,
                    user : getJwtUser()
                }
            });
            setBoardContent(boardResponse.data);
            if(boardResponse.data.boardLikeUser === getJwtUser()){
                setIsLike(true);
            }else{
                setIsLike(false);
            }
            setInputReplyItem({...inputReplyItem, boardNo : boardResponse.data.boardNo, writer : getJwtUser()});
            refreshReply();
        }catch(err){
            console.log(err);
        }
    }

    const refreshReply = () => {
        setReplyItems([]);
        axios.get(`${REQUEST_ORIGIN}/reply/select`,{
            params : {
                boardNo : param.boardNo
            }
        })
        .then((res)=>{
            setReplyItems(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const updateBoard = () => {
        navigation(`/writing/${boardContent.boardType.toLowerCase()}/${boardContent.boardNo}`)
    }

    const deleteBoard = () => {
        axios.post(`${REQUEST_ORIGIN}/board/delete`, boardContent,{
            headers : {
                Authorization : `Bearer ${getCookie("token").accessToken}`
            }
        })
        .then((res) => {
            navigation(`/${boardContent.boardType.toLowerCase()}`)
        })
        .catch((err) => {
            console.log(err);
            alert("삭제가 불가능합니다.")
        })
    }

    const inputReply = (event) => {
        replyRef.current;
        setInputReplyItem({...inputReplyItem, replyContent : replyRef.current.getInstance().getMarkdown()});
    }

    const createChatting = () => {
        if(getCookie(TOKEN)){
            axios.post(`${REQUEST_ORIGIN}/chat/create`,{
                users : [boardContent.writer, getJwtUser()]
            }, {
                headers : {
                    Authorization : `Bearer ${getCookie("token").accessToken}`
                }
            })
            .then((res) => {
                navigation("/chat")
            })
            .catch((err) => {
    
            })
            return;
        }
        alert(PLEASE_LOGIN_MSG)
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        if(getCookie(TOKEN)){
            if(inputReplyItem.replyContent.length > 0){
                if(inputReplyItem.replyNo){
                    axios.post(`${REQUEST_ORIGIN}/reply/update`, inputReplyItem)
                    .then((res) => {
                        setInputReplyItem({// 입력 댓글 state 초기화
                            replyNo: '',
                            replyContent : '',
                            writer : '',
                            writeDate : '',
                            boardNo : ''
                        });
                        setReplyItems([]);
                        replyRef.current?.getInstance().setHTML(" ");
                        refreshReply();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                }else{
                    axios.post(`${REQUEST_ORIGIN}/reply/registry`, inputReplyItem)
                    .then((res) => {
                        setInputReplyItem({// 입력 댓글 state 초기화
                            replyNo: '',
                            replyContent : '',
                            writer : '',
                            writeDate : '',
                            boardNo : ''
                        });
                        setReplyItems([]);
                        replyRef.current?.getInstance().setHTML(" ");
                        refreshReply();
                    })
                    .catch((err) => {
                        console.log(err);
                    })
                }
            }
            
            
        }else{
            alert(PLEASE_LOGIN_MSG);
        }

    }

    const onClickLike = () => {
        if(getCookie(TOKEN)){
            if(isLike){
                setIsLike(false);
            }else{
                setIsLike(true);
            }
            axios.post(`${REQUEST_ORIGIN}/board/like`,{
                boardNo : boardContent.boardNo,
                isLike : !isLike ? 'Y' : 'N',
                likeUser : getJwtUser(),
            },{
                headers : {
                    Authorization : `Bearer ${getCookie("token").accessToken}`
                }
            })
            .then((res) => {
    
            })
            .catch((err) => {
                console.log(err);
            })
            return;
        }
        alert(PLEASE_LOGIN_MSG);
    }

    const updateReply = (reply) => {
        // setInputReplyItem({});
        replyRef.current?.getInstance().setHTML(reply.replyContent);
        setInputReplyItem({...inputReplyItem, replyNo : reply.replyNo});
    }
    return (
    <div style={{display : "flex", flexDirection : "column", flex : "0.8", alignItems : "center"}}>
        <div style={{marginTop : '25px'}}>
            <div className='div-writer-area-wrapper'>{/* 작성자 정보 영역 */}
                <div style={{display : "flex"}}>
                    <span style={{fontWeight : "bold"}} className='div-writer' onClick={() => navigation(`/user/activity/${boardContent.writer}`)}>{boardContent.writer}</span>
                    {
                        boardContent.writer === getJwtUser() ?
                        ''
                        : 
                        <button style={{fontSize : "small", marginLeft : "5px"}} onClick={createChatting} disabled={boardContent.useChat === 'Y'? false: true}> 1:1문의하기 </button>
                    }
                    {
                        (getJwtUser() === boardContent.writer || getJwtRole() === ADMIN_USER)?
                        <div>
                            {
                                 (getJwtUser() === boardContent.writer)?
                                 <button style={{fontSize : "small", marginLeft : "5px"}} onClick={updateBoard}> 수정하기 </button>
                                 : ''
                            }
                            {
                                (getJwtUser() === boardContent.writer || getJwtRole() === ADMIN_USER)?
                                 <button style={{fontSize : "small", marginLeft : "5px"}} onClick={deleteBoard}> 삭제하기 </button>
                                 : ''
                            }
                        </div>
                        :
                        ''
                    }

                    <div className='div-view-like' onClick={onClickLike}>
                        {
                            isLike ?
                            <img src={likeImg}
                            style={{width : "25px", height : "25px", marginBottom : "3px"}}
                        />
                        : 
                        <img src={nolikeImg}
                        style={{width : "25px", height : "25px"}}
                    />
                        }
                    </div>
                </div>
                <div style={{display : "flex"}}>
                    <span style={{fontSize : "small", marginTop : "4px"}}>{convertDate(boardContent.writeDate)}</span>
                    <div style={{marginLeft : "5px"}}>
                        <img src={viewImg}
                            style={{width : "18px", height : "18px"}}
                        />
                        <span style={{fontSize : "small", marginLeft : "3px"}}>{boardContent.views}</span>
                    </div>
                </div>
            </div>
            <div style={{marginTop:"30px", width : "70vw"}}>{/* 작성글 영역 */}
                <h3>{boardContent.boardTitle}</h3>
                {
                    boardContent.boardContent !== '' ?
                    <Viewer
                        height="900px" // 에디터 창 높이
                        initialValue={boardContent.boardContent} //저장한 컨텐츠 입력
                    /> :
                    '' 
                }
            </div>
            <div className='div-view-area-wrapper'>{/* 댓글 영역 */}
                <div style={{padding : "30px", border : '1px solid #DCDEE1', borderRadius : '10px'}}>
                    <form method='POST' onSubmit={onSubmit}>
                        <Editor
                            name = "content"
                            ref={replyRef}
                            previewStyle="vertical" // 미리보기 스타일 지정
                            height="150px" // 에디터 창 높이
                            initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
                            hideModeSwitch = {true} //하단의 markdown, wysiwyg 전환 버튼 지우기
                            toolbarItems={[
                            // 툴바 옵션 설정
                            ['heading', 'bold', 'italic', 'strike'],
                            ['hr', 'quote'],
                            ['ul', 'ol', 'task', 'indent', 'outdent'],
                            ['table', 'image', 'link'],
                            ['code', 'codeblock']
                            ]}
                            onChange={inputReply}
                            initialValue={" "}
                        ></Editor>
                        <div style={{display:"flex", justifyContent : "end", marginTop : '15px'}}>
                            <button type='submit'>댓글 작성</button>
                        </div>
                    </form>
                </div>
                <div style={{marginTop : "30px", marginBottom : "30px"}}>
                    {
                        replyItems.length > 0 ? 
                        replyItems.map((item, idx) => {
                            return (<ReplyContent key={`replyContent_${idx}`} replyItem={item} onRefresh = {refreshReply} update = {updateReply}/>)
                        })
                        : '' 
                    }
                </div>
        </div>
        </div>
    </div>

  )
}

export default View