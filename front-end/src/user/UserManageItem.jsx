import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const UserManageItem = ({item, save}) => {
    const [userItem, setUserItem] = useState(item)
    const onChangeUserValid = (event) => {
        if(event.target.checked){
            setUserItem({...userItem, userValid : "Y"})
        }else{
            setUserItem({...userItem, userValid : "N"})
        }
    }

    const onChangeRole = (event) => {
        setUserItem({...userItem, userRole : event.target.value})
    }

    // useEffect(()=>{
    //     console.log(userItem);

    // },[userItem.userValid])
    return(
        <div style={{display : "flex", padding : "10px", justifyContent : "space-between", borderBottom : "1px solid #DCDEE1"}}>
            <div style={{width : "20%"}}>
                <span>{userItem.userId}</span>
            </div>
            <div style={{width : "20%"}}>
            <select className="form-select" aria-label="Default select example" value={userItem.userRole} onChange={onChangeRole}>
                <option value={`ADMIN`}>ADMIN</option>
                <option value="USER">USER</option>
            </select>
            </div>
            <div style={{width : "20%"}}>
                <div className="form-check form-switch ">
                    <input className="form-check-input" style={{width:"50px", height :"25px"}}
                        type="checkbox" id="flexSwitchCheckChecked"
                        defaultValue={false}
                        checked={
                            userItem.userValid === "Y" ? true : false
                        }
                        onChange={onChangeUserValid}
                        />
                </div>
            </div>
            <button style={{width : "20%"}} onClick={() => save(userItem)}>저장</button>
        </div>
    )
}

export default UserManageItem