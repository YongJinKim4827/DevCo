import React, { useState } from 'react'
import BoardContent from './BoardContent'
import sampleMainItem from '../sample/data/board.json'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

import refreshImg from '../assets/img/free-icon-reload-6066742.png';
import searchImg from '../assets/img/free-icon-magnifier-39014.png';
import writingImg from '../assets/img/free-icon-writing-6679504.png';

const BoardList = ({category}) => {
    const navgaite = useNavigate();
    const [env, setEnv] = useState(DB_DATA_TEST);
    const pages = [1,2,3,4,5];
    const [boardContentItem, setBoardContentItem] = useState([{
        boardNo : "",
        boardTitle : "",
        writer : "",
        views : "",
        boardContent : "",
        writeDate : ""
    }]);

    useEffect(()=> {
        axios.get(`${REQUEST_ORIGIN}/board/`,{
            params : {
                category : category
            }
        })
        .then((res) => {
            setBoardContentItem(res.data);
        })
        .catch((err) => {
            console.dir(err);
        })
    },[])

    const moveWritingPage = () => {
        navgaite(`/writing/${category}`);
    }

    const onSearch = () => {
        axios.get("/question")
    }

  return (
    <div style={{flex : "0.8"}}>
        <div style={{display : "flex", alignItems : "center", flexDirection : "column"}}>
            <div style={{width : "70vw", maxWidth : "800px", minWidth : "450px"}}>
                <div style={{width : "50vw"}}>
                    <h2 style={{fontWeight : "bold"}}>{category.toUpperCase()}</h2>
                </div>
                <div style={{display: "flex"}}>
                    <div>
                        <img src={refreshImg}
                                style={{width : "18px", height : "18px", marginBottom : "3px"}}
                            />
                    </div>
                    <div className="input-group mb-3" style={{width : "40vw"}}>
                        <span className="input-group-text" id="basic-addon1">
                            <img src={searchImg}
                                style={{width : "18px", height : "18px", marginBottom : "3px"}}
                            />
                        </span>
                        <input type="text" className="form-control"
                            placeholder="검색" aria-label="search" aria-describedby="basic-addon1"/>
                        <button>검색</button>
                    </div>
                    <button style={{height : "45px", marginLeft : "20px", width : "150px"}} onClick={moveWritingPage}>
                        <img src={writingImg} style={{width : "25px", height : "25px"}}/>
                        {/* <span style={{marginLeft : "5px", maxWidth : "45px"}}>작성하기</span> */}
                        작성하기
                    </button>
                </div>
            </div>
            

            
        </div>
        <div className='div-board-list' onLoad={onload}> {/* 게시물 리스트 */}
            {/* {
                env === DB_DATA_TEST ? 
                boardContentItem.map((data, idx) => {
                    return <BoardContent key={`boardcontent_${idx}`} category={category} content = {data}/>
                })
                : sampleMainItem.map((data, idx) => {
                    return <BoardContent key={`boardcontent_${idx}`} category={category} content = {data}/>
                })
            } */}
            
            {
                boardContentItem.length === 0 ? 
                <div className='div-board-content-wrapper' style={{justifyContent : 'center'}}>
                    <span>해당 글이 존재하지 않습니다.</span>
                </div>
                : boardContentItem.map((data, idx) => {
                    return <BoardContent key={`boardcontent_${idx}`} category={category} content = {data}/>
                })
            }

        </div>
        <div style={{display : 'flex', justifyContent:"space-around", marginTop : "10px", marginBottom : "10px"}}>
            <a href='#'>◀ Previous</a>
            <div>
                {
                    pages.map((no, idx) => {
                        return (<a key={`pageNo_${idx+1}`} href='#'> {no}</a>)
                    })
                }
            </div>
            <a href='#'>Next ▶</a>
        </div>
    </div>
  )
}

export default BoardList