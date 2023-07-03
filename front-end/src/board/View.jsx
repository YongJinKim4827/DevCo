import React, { useRef } from 'react'
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import ReplyContent from './ReplyContent';
import './board.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

import viewImg from '../assets/img/view.png';
const View = () => {
    const param = useParams();
    const replyRef = useRef();
    const [boardContent, setBoardContent] = useState({
        boardNo : '',
        boardTitle : '',
        boardType : '',
        boardContent : '',
        like : '',
        replyCount : '',
        views : '',
        writeDate : '',
        writer : ''
    });

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
                    boardNo : param.boardNo
                }
            });
            setBoardContent(boardResponse.data);
            setInputReplyItem({...inputReplyItem, boardNo : boardResponse.data.boardNo, writer : 'ADMIN'});
            // setInputReplyItem({...inputReplyItem, writer : 'ADMIN'});
            refreshReply();
        }catch(err){
            console.log(err);
        }
    }

    const refreshReply = async() => {
        const replyResponse = await axios.get(`${REQUEST_ORIGIN}/reply/select`,{
            params : {
                boardNo : param.boardNo
            }
        });
        setReplyItems(replyResponse.data);
    }


    const registryReply = () => {
        console.log("댓글 작성......");
    }

    const inputReply = (event) => {
        replyRef.current;
        setInputReplyItem({...inputReplyItem, replyContent : replyRef.current.getInstance().getMarkdown()});
    }
    
    const onSubmit = (event) => {
        event.preventDefault();
        axios.post(`${REQUEST_ORIGIN}/reply/registry`, inputReplyItem)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        })
    }
    return (
    <div style={{display : "flex", flexDirection : "column", flex : "0.8", alignItems : "center"}}>
        <div>
            <div className='div-writer-area-wrapper'>{/* 작성자 정보 영역 */}
                <div><span style={{fontWeight : "bold"}}>{boardContent.writer}</span></div>
                <div style={{display : "flex"}}>
                    <span style={{fontSize : "small", marginTop : "4px"}}>{''}</span>
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
                <div>
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
                            initialValue={' '}
                        ></Editor>
                        <div style={{display:"flex", justifyContent : "end"}}>
                            <button type='submit'>댓글 작성</button>
                        </div>
                    </form>
                </div>
                <div>
                    {
                        replyItems.length > 0 ? 
                        replyItems.map((item, idx) => {
                            return (<ReplyContent key={`replyContent_${idx}`} replyItem={item} onRefresh = {refreshReply}/>)
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