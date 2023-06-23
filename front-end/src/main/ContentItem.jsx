import React from 'react'

const ContentItem = ({contentItem}) => {
    let time = "";
    
  return (
    <div style={{width:"95%", height : "70px", marginTop: "15px", borderBottom : "1px solid gray"}}>
        <div style={{display : "flex", justifyContent : "space-between"}}>
            <div style={{display: "flex"}}>
                <a href="#" style={{fontSize:"small"}}>{contentItem.writer}</a>
                <div style={{margin : "-2px 5px 1px 5px"}}>
                    <img src="src\assets\img\view.png"
                        style={{width : "18px", height : "18px", marginBottom : "3px"}}
                    />
                </div>
                <span style={{fontSize:"smaller"}}>{contentItem.views}</span>
                <span style={{fontSize:"smaller"}}>{time}</span>
            </div>
            <div style={{display: "flex", fontSize:"smaller"}}>
                <div style={{display : "flex", alignSelf : "self-end"}}>
                    <div>
                        <img src="src\assets\img\free-icon-like-2107854.png"
                            style={{width : "18px", height : "18px", marginBottom : "3px"}}
                        />
                    </div>
                    <span style={{marginLeft : "5px"}}>{contentItem.recommendation}</span>
                </div>
                <div style={{display : "flex", alignSelf : "self-end", marginLeft : "10px"}}>
                    <div>
                        <img src="src\assets\img\comment.png"
                            style={{width : "18px", height : "18px", marginBottom : "3px"}}
                        />
                    </div>
                    <span style={{marginLeft : "5px"}}>{contentItem.replyCount}</span>
                </div>
            </div>
        </div>
        <div style={{marginTop : "2px"}}>
            <a href="#" style={{fontSize : "15px", fontWeight : "bolder"}}>{contentItem.boardTitle}</a>
        </div>
    </div>
  )
}

export default ContentItem