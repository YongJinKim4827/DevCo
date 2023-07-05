import React from 'react'
import './board.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

import viewImg from '../assets/img/view.png';
import likeImg from '../assets/img/free-icon-like-2107854.png';

const BoardContent = ({category, content}) => {
    const navigation = useNavigate();

    const moveViewPage = (event) => {
        let no = content.boardNo;
        navigation(`/view/${category}/${content.boardNo}`);
    }
  return (
    <div className='div-board-content-wrapper'>
        {
            category === QUESTION ? (
            <div>
                <div className='div-reply'>
                    <span>답변</span>
                    <span>{content.replyCount}</span>
                </div>
            </div>
            ) : ""
        }
        <div style={{marginLeft : "10px"}}>
            <div className='div-write-info'>
                <div className='div-writer'>{content.writer}</div>
                <div style={{marginLeft : "10px"}}>{convertDate(content.writeDate)}</div>
            </div>
            <div style={{display : "flex", flexDirection : "column", width : "59vw", maxWidth:"700px", minWidth : "350px"}}>
                <a className = "a-board-content" style={{fontWeight : "bold"}} onClick={moveViewPage}>{content.boardTitle}</a>
                <a className = "a-board-content" onClick={moveViewPage}>
                    {content.boardContent}
                </a>
                <div style={{display : "flex", width : "100%", justifyContent : "space-between"}}>
                    <div><span></span></div>
                    <div style={{display : "flex", justifyContent : "space-between"}}>
                        <div>
                            <img src={viewImg}
                                style={{width : "18px", height : "18px", marginBottom : "3px"}}
                            />
                            <span style={{marginLeft : "5px"}}>{content.views}</span>
                        </div>
                        <div style={{marginLeft : "15px"}}>
                            <img src={likeImg}
                                style={{width : "18px", height : "18px", marginBottom : "3px"}}
                            />
                            <span style={{marginLeft : "5px"}}>{content.like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoardContent