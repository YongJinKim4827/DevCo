import React from 'react'
import { useNavigate } from 'react-router-dom'


const MyBoardInfo = ({myBoardItem}) => {
    const navigation = useNavigate();
    const onClickTitle = () => {
        navigation(`/view/${myBoardItem.boardType.toLowerCase()}/${myBoardItem.boardNo}`)
    }

    const onChangeShare = () => {

    }
  return (
    <div style={{padding : "10px", borderBottom : "1px solid #DCDEE1"}}>
        <div style={{marginLeft : '15px', display : "flex", justifyContent : "space-between"}}>
            <div style={{display : "flex"}}>
                <div className='div-hcontent-header' style={{height : "24px", marginTop:"2px"}}>
                    <span>{convertBoardType(myBoardItem.boardType)}</span>
                </div>
                <span>
                    <a className='a-history-content-link' style={{fontWeight : "bold", marginLeft : "10px"}}
                        onClick =  {onClickTitle}
                    >{myBoardItem.boardTitle}</a>
                </span>
            </div>
            <div style={{display : "flex"}}>
                <span style={{fontWeight : "bold", marginTop : "3px", marginRight : "5px"}}>공유</span>
                <div className="form-check form-switch ">
                    <input className="form-check-input" style={{width:"50px", height :"25px"}}
                        type="checkbox" id="flexSwitchCheckChecked" 
                        checked={
                            myBoardItem.share === "Y" ? true : false
                        }
                        onChange={onChangeShare}
                        />
                </div>
            </div>
        </div>
        <div style={{marginLeft : '15px'}}>
            <span style={{fontSize : "small"}}>
                작성일자 : {convertDate(myBoardItem.writeDate)}
            </span>
        </div>
    </div>
  )
}

export default MyBoardInfo