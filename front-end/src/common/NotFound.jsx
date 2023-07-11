import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigation = useNavigate();
    useEffect(() => {
        navigation("/");
    },[])
  return (
    <div></div>
  )
}

export default NotFound