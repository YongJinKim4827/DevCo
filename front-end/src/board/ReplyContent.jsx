import React from 'react'
import { Editor, Viewer } from '@toast-ui/react-editor';
import './board.css'
const ReplyContent = () => {
  return (
    <div className='div-reply-content-wrapper'>
        <div style={{display : "flex"}}>{/* 작성자 영역 */}
            <a href='#'>작성자ID</a>
            <span>작성 시간</span>
        </div>
        {/* 작성 내용 영역 */}
            <Viewer
                height="150px"
                initialValue="and I'm Iron man" //저장한 컨텐츠 입력
            />
        
    </div>
  )
}

export default ReplyContent