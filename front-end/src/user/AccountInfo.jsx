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
    <div style={{width : "50vw", marginTop : '25px'}}>
        <div className='div-accountinfo-wrapper'>
            <h5 style={{fontWeight : 'bold'}}>이메일</h5>
            <input type='text' />
        </div>
        <div style={{padding : '25px'}}>
            <h5 style={{fontWeight : 'bold'}}>계정삭제</h5>
            <div className='div-accountdelete-discription'>
                이제는 되돌릴수 없슴다
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