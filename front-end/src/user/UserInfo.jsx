import React from 'react'

const UserInfo = () => {
  return (
        <div className='div-user-info-wrapper'>
            <h4 style={{fontWeight : 'bold'}}>회원 정보</h4>
            <div className='div-user-info-input'>
                <label>아이디</label>
                <input type='text' />
            </div>
            <div className='div-user-info-input'>
                <label>이름</label>
                <input type='text' />
            </div>
            <div className='div-user-info-input'>
                <label>패스워드</label>
                <input type='text' />
            </div>
            <div className='div-user-info-input'>
                <label>생일</label>
                <input type='text'/>
            </div>
            <div className='div-user-info-input'>
                <label>이메일</label>
                <input type='text'/>
            </div>
            <div className='div-user-info-input'>
                <label>성별</label>
                <input type='text'/>
            </div>
            <div style={{display : 'flex', justifyContent : 'end', marginTop : '10px'}}>
                <button style={{color : '#0d6efd', fontWeight : 'bold'}}>저장</button>
            </div>
            
        </div>
  )
}

export default UserInfo