import React from 'react'
import "./user.css"
import { useNavigate } from 'react-router-dom'

const UserHistoryContent = ({item}) => {
    const navigation = useNavigate();
    const moveLink = (item) => {
        console.log(item.boardNo)
        let link = "/";
        navigation(link);
    }
  return (
    <div className='div-hcontent-wrapper'>
        <div className='div-hcontent-header-wrapper'>
            <div style={{display : "flex"}}>
                <div className='div-hcontent-header'>{item.type}</div>
                <span style={{ marginLeft : "5px"}}>
                    {
                        item.keyword === "채팅" ? " 님과의 ": "카테고리에" 
                    }
                </span>
                <div style={{marginLeft : "5px", color : "#0090F9", fontWeight : "bold"}}>{item.keyword}</div>
                <div>
                    {
                        item.keyword === "게시물" ? '을 작성하였습니다.'
                        :(
                            item.keyword === "채팅"? ' 을 시작하였습니다.'
                            : '을 달았습니다.'
                        )
                    }
                </div>
            </div>
            <div style={{color : "#859CAD", fontWeight : "bold", fontSize : "small"}}>{item.historyDate}</div>
        </div>
        <div style={{margin : "15px 0 15px 0", padding : "5px"}}>
            <div>
                <a className='a-history-content-link' onClick={() => navigation(item.link)} style={{fontWeight : "bold"}}>{item.title}</a>
            </div>
        </div>
    </div>
  )
}

export default UserHistoryContent