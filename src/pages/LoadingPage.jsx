import React, { useEffect } from 'react'
import '../assets/styles/loading.scss'
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
    const navigate = useNavigate();
   useEffect(()=>{

    setTimeout(() => {
      navigate("/main");
    }, 2000);
  })
  
  return (
    <div className="loader"></div>
  )
}

export default LoadingPage
