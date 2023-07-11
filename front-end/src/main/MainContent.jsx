import React from 'react'
import ContentItem from './ContentItem'
import './main.css'
const MainContent = ({mainItems}) => {
  return (
    <div className='div-main-content-wrapper'>
        <div style={{width : "70vw"}}>
        <div className='div-main-content div-main-content-virtical'>
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'>
                    <h3 style={{fontWeight : "bold"}}>Q&A</h3>
                </div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "QUESTION"){
                                return (
                                    <ContentItem key={`board_id_${idx}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'> <h3 style={{fontWeight : "bold"}}>커뮤니티</h3></div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "COMMUNITY"){
                                return (
                                    <ContentItem key={`board_id_${idx}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
        <div className='div-main-content div-main-content-virtical' >
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'><h3 style={{fontWeight : "bold"}}>주간베스트</h3></div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType.startsWith("W")){
                                return (
                                    <ContentItem key={`board_id_${idx}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <div  style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'><h3 style={{fontWeight : "bold"}}>지식공유</h3></div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "KNOWLEDGE"){
                                return (
                                    <ContentItem key={`board_id_${idx}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
        <div className='div-main-content div-main-content-virtical'>
            <div style={{width:"45%", minWidth : "450px"}}>
                <div className='div-main-category'><h3 style={{fontWeight : "bold"}}>공지사항</h3></div>
                <div style={{padding : "10px"}}>
                    {
                        mainItems.map((data, idx) => {
                            if(data.boardType === "NOTICE"){
                                return (
                                    <ContentItem key={`board_id_${data.boardNo}`} contentItem={data}/>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default MainContent