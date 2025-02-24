import React, { useContext, useState } from 'react'
import '../assets/styles/loginPage.scss'
import AuthContext from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const LoginPage = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const {login} = useContext(AuthContext)
const navigate = useNavigate()
const [ setErrorMessage] = useState("")

const handleLogin = async(e)=>{
  e.preventDefault();
  try{
    await login(username,password)
    navigate("/main")
  }
  catch(error){
    alert("Giriş Başarısız! ")
    setErrorMessage("Giriş Başarısız! Kullanıcı adı veya şifre hatalı.")
    setUsername("")
    setPassword("")
  }
}
  return (
    <div className='login-page'>
        <div className='login-page-head'>
            <h3>Üyelik Bilgilerinizi Giriniz</h3>
        </div>
        <form onSubmit={handleLogin}>
            <h3>LOGIN</h3>
            <input value={username} onChange={e=>setUsername(e.target.value)} type='text' placeholder='UserName'></input>
            <input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password'></input>
            <input type='submit' value="Giriş Yap"/>
            <Link to="/main" className='link'>Üye Olmadan Devam Et</Link>
        </form>
    </div>
  )
}

export default LoginPage
