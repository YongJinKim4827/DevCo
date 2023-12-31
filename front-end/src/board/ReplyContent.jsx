import React, { useEffect, useRef, useState } from 'react'
import { Editor, Viewer } from '@toast-ui/react-editor';
import './board.css'
import axios from 'axios';
import { getCookie, getJwtRole, getJwtUser } from '../login/Cookies';
import { useNavigate } from 'react-router-dom';

const ReplyContent = ({replyItem, onRefresh, update}) => {
  const navigation = useNavigate();
  const [replyContent, setReplyContent] = useState({
    replyNo : '', 
    replyContent : '',
    writer : '',
    replyDate : ''
  });
  
  useEffect(() => {
    setReplyContent(replyItem);
  },[])

  const deleteReply = () => {
    axios.post(`${REQUEST_ORIGIN}/reply/delete`, replyItem)
    .then((res) => {
      onRefresh();
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const a = (reply) => {
    setReplyContent(reply);
  }
  const updateReply = () => {
    axios.post(`${REQUEST_ORIGIN}/reply/update`, replyContent)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <div className='div-reply-content-wrapper'>
      <div style={{flex : "0.8", marginTop : "20px"}}>
        <div style={{display : "flex", marginBottom : "25px"}}>{/* 작성자 영역 */}
              <div className='div-writer' onClick={() => navigation(`/user/activity/${replyContent.writer}`)}>
                {replyContent.writer}
                </div>
              <span>{convertDate(replyContent.replyDate)}</span>
        </div>
          {/* 작성 내용 영역 */}
          {
                replyContent.replyContent !== '' ?
                <Viewer
                    height="900px" // 에디터 창 높이
                    initialValue={replyContent.replyContent} //저장한 컨텐츠 입력
                /> :
                ''
          }
      </div>
      
      <div style={{flex : "0.2", marginTop : "20px", disply : "flex"}}>
      {
          getJwtUser() === replyItem.writer ? <button onClick={() => update(replyItem)}>수정</button>: ''
        }
        {
          getJwtRole() === ADMIN_USER || getJwtUser() === replyItem.writer ? <button onClick={deleteReply}>삭제</button>: ''
        }
        
      </div>
    </div>
  )
}

export default ReplyContent