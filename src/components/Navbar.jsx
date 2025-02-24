import React, { useContext, useEffect, useState } from 'react'
import '../assets/styles/navbar.scss'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import axios from 'axios'

const Navbar = () => {

  const{logout, isAuthenticated}= useContext(AuthContext)
  const navigate = useNavigate()
  const [currentUser, setCurrentUser] = useState("")

  const handleRedirect = () => {
    navigate('/main')
  };

  const handleLogin=()=>{
    navigate("login")
  }
  const handleLogout=()=>{
    logout()
    setCurrentUser("")
    navigate("login")
  }

  const getCurrentUser = async()=>{
    const url =" https://api.escuelajs.co/api/v1/auth/profile"
    const response = await axios.get(url,{
      headers:{
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("userToken")). access_token}`
      }
    })
    const user = response.data;
    console.log("currentUser:",user);
    setCurrentUser(user);
   }
    useEffect(()=>{
      if(JSON.parse(localStorage.getItem("userToken")))
    getCurrentUser();
  },[isAuthenticated])

  return (
    <nav className='top-navbar'>
        <ul className='menu'>
            <li><a href='#'  onClick={handleRedirect}>Anasayfa</a></li>
            <li><a href="#zodiac-list"  onClick={handleRedirect}>Burçlar</a></li>            
            <li><a href="#planet-list"  onClick={handleRedirect}>Gezegenler</a></li>
            <li><a href="#haber-list"  onClick={handleRedirect}>Haberler</a></li>
        </ul>
        <ul className='login'>
        {
        currentUser &&
        <div className='user-card'><span>{currentUser.name+"/"+currentUser.role}</span></div>
        }
        
         <li><button className='btn-login' onClick={isAuthenticated ? handleLogout : handleLogin}>
            {isAuthenticated ? "Logout" : "Login"}
          </button></li>
        </ul>
    </nav>
  )
}

export default Navbar
