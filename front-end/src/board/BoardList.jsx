import React from 'react'
import BoardContent from './BoardContent'
import sampleMainItem from '../sample/data/board.json'

const BoardList = ({category}) => {
  return (
    <div>
        <div>
            <h2 style={{fontWeight : "bold"}}>{category}</h2>
        </div>
        <div style={{display : "flex", justifyContent : "center"}}>
            <div>
            <img src="src\assets\img\free-icon-reload-6066742.png"
                    style={{width : "18px", height : "18px", marginBottom : "3px"}}
                />
            </div>
            <div className="input-group mb-3" style={{width : "40vw"}}>
                <span className="input-group-text" id="basic-addon1">
                    <img src="src\assets\img\free-icon-magnifier-39014.png"
                        style={{width : "18px", height : "18px", marginBottom : "3px"}}
                    />
                </span>
                <input type="text" className="form-control" placeholder="검색" aria-label="Username" aria-describedby="basic-addon1"/>
                <button>검색</button>
            </div>
            <button style={{height : "45px", marginLeft : "20px"}}>
                    <img src="src\assets\img\free-icon-writing-6679504.png" style={{width : "25px", height : "25px"}}/>
                    <span style={{marginLeft : "5px"}}>작성하기</span>
            </button>
        </div>
        <div className='div-board-list'> {/* 게시물 리스트 */}
            {
                sampleMainItem.map((data, idx) => {
                    return <BoardContent key={`boardcontent_${idx}`} category={category} content = {data}/>
                })
            }
            
        </div>
        <div>
            <a href='#'>◀ Previous</a>
            <div></div>
            <a href='#'>Next ▶</a>
        </div>
    </div>
  )
}

export default BoardList