import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Writing = () => {
  const [isWriting, setIsWriting] = useState(true);
  const editorRef = useRef();
  const param = useParams();
  const navigation = useNavigate();
  const [contentItem, setContentItem] = useState({
    boardTitle : "",
    boardType : "",
    boardContent : window.location.pathname.split("/")[1].toUpperCase(),
    share : "N",
  });
  useEffect(()=> {
    let category = param.category.toUpperCase();
    let checkCategory = CATEGORY.findIndex((e) => e === category);
    if(checkCategory < 0){
      return;
    }
    setContentItem({...contentItem, boardType : category});
  },[]);

  const inputWriting = (event) => {
    if(event.target.name === "title"){
      setContentItem({...contentItem, boardTitle : event.target.value});
    }
  }

  const writeContent = (event) => {
    editorRef.current;
    //HTML 형식으로 값 가져오기
    // editorRef.current.getInstance().getHTML();
    //Mark Down 형식으로 값 가져오기
    // editorRef.current.getInstance().getMarkdown();
    setContentItem({...contentItem, boardContent : editorRef.current.getInstance().getMarkdown()});
  }

  const onSubmit = (event) => {
    event.preventDefault();
    axios.post(`${REQUEST_ORIGIN}/board/registry`, contentItem)
      .then((res) => {
        console.log(res);
        navigation(`/${contentItem.boardType.toLowerCase()}`)
      }).catch((err)=>{
        console.log(err);
      })
  }

  const onShare = (event) => {
    if(event.target.checked){
      setContentItem({...contentItem, share : 'Y'});
    }else{
      setContentItem({...contentItem, share : 'N'});
    }
  }


  return (
    <div className='div-writing-wrapper'>
      <div style={{width : "70vw"}}>
        <h3>글 작성하기</h3>
        <span>당신의 궁금증을 말해주세요</span>
      </div>
      <form onSubmit={onSubmit} style={{width : "70vw"}}>
        <div style={{display : "flex", justifyContent : "end"}}>
          <div className="form-check form-switch ">
            <label>공유</label>
            {/* <labels className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label> */}
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onChange={onShare}/>
          </div>
        </div>
        <div className='div-writing-content-wrapper'>
          <span>제목</span>
          <input name = "title" type='text' placeholder='제목을 입력해주세요.' style={{height : "40px"}} onChange={inputWriting}/>
        </div>
        <div style={{display: "none"}}>
          <span>태그</span>
          <select name = "tag" className="form-select form-select-sm" aria-label=".form-select-sm example">
            {/* <option selected="true">Open this select menu</option> */}
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </select>
        </div>
        <div style={{display: "none"}}>
          <span>토픽</span>
          <select name = "topic" className="form-select form-select-sm" aria-label=".form-select-sm example">
            {/* <option selected>Open this select menu</option> */}
            <option defaultValue="1">One</option>
            <option defaultValue="2">Two</option>
            <option defaultValue="3">Three</option>
          </select>
        </div>
        <div className='div-writing-content-wrapper'>
          <span>내용</span>
          <Editor
            name = "content"
            ref={editorRef}
            previewStyle="vertical" // 미리보기 스타일 지정
            height="300px" // 에디터 창 높이
            initialEditType="wysiwyg" // 초기 입력모드 설정(디폴트 markdown)
            hideModeSwitch = {true}
            toolbarItems={[
              // 툴바 옵션 설정
              ['heading', 'bold', 'italic', 'strike'],
              ['hr', 'quote'],
              ['ul', 'ol', 'task', 'indent', 'outdent'],
              ['table', 'image', 'link'],
              ['code', 'codeblock']
            ]}
            onChange={writeContent}
          ></Editor>
        </div>
        <div style={{display : "flex", justifyContent:"end"}}>
          <button style={{margin : "0px 5px 5px 5px"}}>취소</button>
          <button type="submit" style={{margin : "0px 5px 5px 5px"}}
            disabled={!isWriting}
          >등록</button>
        </div>
      </form>
      
    </div>
  );
}

export default Writing