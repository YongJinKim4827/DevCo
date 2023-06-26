import React from 'react'
import { Editor, Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import ReplyContent from './ReplyContent';
import './board.css';

const View = () => {
    const contents = `<p>Write</p><p><strong>Preview</strong></p><p><strong>내용을 입력해주세요.</strong></p><p><strong>내용을 입력해주세요</strong>.</p><h3>Markdown</h3><p><del>WYSIWYG</del></p>`
  return (
    <div style={{marginTop : "20px"}}>
        <div className='div-writer-area-wrapper'>{/* 작성자 정보 영역 */}
            <div><span style={{fontWeight : "bold"}}>사용자</span></div>
            <div style={{display : "flex"}}>
                <span style={{fontSize : "small", marginTop : "4px"}}>4분전</span>
                <div style={{marginLeft : "5px"}}>
                    <img src="src\assets\img\view.png"
                        style={{width : "18px", height : "18px"}}
                    />
                    <span style={{fontSize : "small", marginLeft : "3px"}}>23</span>
                </div>
            </div>
        </div>
        <div style={{marginTop:"30px"}}>{/* 작성글 영역 */}
            <h3>제목</h3>
            <Viewer 
            initialValue={contents} //저장한 컨텐츠 입력
            />
        </div>
        <div className='div-view-area-wrapper'>{/* 댓글 영역 */}
            <div>
                <Editor
                    name = "content"
                    // ref={editorRef}
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
                    // onChange={writeContent}
                    initialValue=' '
                ></Editor>
                <div style={{display:"flex", justifyContent : "end"}}>
                    <button>댓글 작성</button>
                </div>
            </div>
            <ReplyContent/>
        </div>
    </div>

  )
}

export default View