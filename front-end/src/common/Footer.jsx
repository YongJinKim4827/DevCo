import React from 'react'
import logoImg from '../assets/img/uncle-sam.png';

const Footer = () => {
  return (
    <div style={{height : "100px", borderTop : '1px solid black', display : "flex", justifyContent:"center", flex : "0.1"}}>
      <div style={{display : "flex", justifyContent:"space-around", width : "80vw", maxWidth : "1500px", marginTop : "10px"}}>
        <div>
          <div className='div-header-logo'>
            <img src={logoImg}
                            style={{width : "80px", height : "80px", marginBottom : "3px"}}
            />
            <div style={{display : "inline", alignSelf : "center", marginLeft : "10px"}}>
              <h1 style={{fontWeight : "bold"}}>DEVCO</h1>
            </div>
          </div>
        </div>
        <div> 
          <span>김용진</span>
        </div>
        <div>
          회사
        </div>
      </div>
    </div>
  )
}

export default Footer