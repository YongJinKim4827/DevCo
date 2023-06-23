import React from 'react'
import './board.css'

const BoardContent = ({category, content}) => {
    const write = () => {
        
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
                <div>{content.writer}</div>
                <div>{content.writeDate}</div>
            </div>
            <div style={{display : "flex", flexDirection : "column", width : "59vw", maxWidth:"700px", minWidth : "350px"}}>
                <a href={"#"} style={{fontWeight : "bold"}}>{content.boardTitle}</a>
                <a href={"#"} style={{overflow : "hidden", textOverflow : "ellipsis", whiteSpace : "nowrap"}}>
                    [앵커]
                    오늘은 어제보다 기온이 더 오르겠고, 주말인 내일과 모레도 더위가 이어지겠습니다.
                    일요일 제주도와 남해안부터 올여름 장마가 시작될 것으로 보여 대비해야 합니다.
                    노은지 기상캐스터가 전합니다.
                    [리포트]
                    오늘은 어제보다 기온이 더 오르겠습니다.
                    경기 내륙과 강원 일부지역엔 폭염주의보도 내려졌는데요.
                    서울의 낮 기온 31도, 대전 32도, 광주 33도 등 내륙 대부분 지역은 30도를 웃돌겠습니다.
                    오후에 대기가 불안정해져 강원과 경북 지역엔 소나기가 예상됩니다.
                    국지적으로 천둥, 번개가 치고 우박이 떨어질 가능성도 있습니다.
                    현재 정체전선은 제주 남쪽 먼바다에 있습니다.
                    이 정체전선이 점차 북상해 일요일 제주와 남해안 지역에 장맛비가 내리기 시작해 다음 주 월요일엔 전국에 장맛비가 올 것으로 예상돼 대비해야 합니다.
                    비가 시작되기 전, 내일과 모레 서울의 낮 기온 32도 등 대부분 지방이 30도를 웃돌아 덥겠습니다.
                    기상정보였습니다.
                    노은지 기상캐스터/그래픽:이주혁
                </a>
                <div style={{display : "flex", width : "100%", justifyContent : "space-between"}}>
                    <div><span>태그태그</span></div>
                    <div style={{display : "flex", justifyContent : "space-between"}}>
                        <div>
                            <img src="src\assets\img\view.png"
                                style={{width : "18px", height : "18px", marginBottom : "3px"}}
                            />
                            <span style={{marginLeft : "5px"}}>{content.views}</span>
                        </div>
                        <div style={{marginLeft : "15px"}}>
                            <img src="src\assets\img\free-icon-like-2107854.png"
                                style={{width : "18px", height : "18px", marginBottom : "3px"}}
                            />
                            <span style={{marginLeft : "5px"}}>{content.recommendation}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BoardContent