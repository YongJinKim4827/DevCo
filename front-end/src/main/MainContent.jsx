import React from 'react'
import ContentItem from './ContentItem'
import './main.css'
const MainContent = ({mainItems}) => {
  return (
    <div style={{width : "70vw"}}>
        <div>
            광고영역(추후 대체 캐러샐을 하든 뭐든....)
        </div>
        <div className='div-main-content div-main-content-virtical'>
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'>
                    <span>Q&A</span>
                </div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "QUST"){
                                return (
                                    <ContentItem key={`board_id_${data.boardNo}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'>커뮤니티</div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "COMM"){
                                return (
                                    <ContentItem key={`board_id_${data.boardNo}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
        <div className='div-main-content div-main-content-virtical' >
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'>주간베스트</div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "QUST"){
                                return (
                                    <ContentItem key={`board_id_${data.boardNo}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div  style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'>지식공유</div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "INTSH"){
                                return (
                                    <ContentItem key={`board_id_${data.boardNo}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
        <div className='div-main-content div-main-content-virtical'>
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'>공지사항</div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "QUST"){
                                return (
                                    <ContentItem key={`board_id_${data.boardNo}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div style={{width:"45%"}}>
                <div>뭐 암거나 그냥 이미지라던가 글을 넣어야지</div>
            </div>
        </div>
    </div>
  )
}

export default MainContent