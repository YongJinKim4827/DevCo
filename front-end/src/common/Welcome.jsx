import React from 'react'
import logoImg from '../assets/img/uncle-sam.png';

const Welcome = () => {
  return (
    <div className='div-welcome-wrapper'>
        <img className='img-welcome-logo' src={logoImg}/>
        <h4 style={{fontWeight : "bold"}}>
            {PROJECT_NAME} 에 오신것을 환영합니다.
        </h4>
        <span style={{color : "#59626F"}}>
            {PROJECT_NAME} 은 개발자들을 위한 커뮤니티입니다.
        </span>
    </div>
  )
}

export default Welcome