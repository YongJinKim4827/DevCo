import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AccountInfo = () => {
    const [deleteAgree, setDeleteAgree] = useState(false);
    const navigation = useNavigate();
    const onChangeDeleteAgree = (event) => {
        setDeleteAgree(event.target.checked);
    }
    const deleteAccount = () => {
        // axios.post("/user/delete")
        // .then((res) => {
        //     navigation("/");
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }
  return (
    <div style={{flex : '0.7', marginTop : '25px'}}>
        <h4 style={{fontWeight : 'bold'}}>계정</h4>
        <div className='div-user-info-input' style={{borderBottom : '1px solid black', height : '100px', padding : '25px'}}>
            <span>이메일 정보</span>
            <input type='text' />
        </div>
        <div style={{padding : '25px'}}>
            <h5 style={{fontWeight : 'bold'}}>계정삭제</h5>
            <div className='div-accountdelete-discription'>
                솰라 솰라
            </div>
            <div style={{marginTop : '15px'}}>
                <div>
                    <input className="form-check-input" type="checkbox" 
                        value={deleteAgree} id="flexCheckDefault" 
                        style={{marginRight : '5px'}}
                        onChange={onChangeDeleteAgree}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        계정 삭제에 관한 정책을 읽고 이에 동의합니다.
                    </label>
                </div>
                <div style={{display : 'flex', justifyContent : 'end', marginTop : '10px'}}>
                    <button className='btn btn-danger' disabled = {!deleteAgree}>계정삭제</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountInfo