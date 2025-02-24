import React from 'react'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import HaberForm from './components/HaberForm';
import LoginPage from './pages/LoginPage';
import ZodiacDetailPage from './pages/ZodiacDetailPage';
import PlanetDetailPage from './pages/PlanetDetailPage';
import HaberPage from './pages/HaberPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './context/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import './assets/styles/app.scss'
import 'react-toastify/dist/ReactToastify.css';
import LoadingPage from './pages/LoadingPage';

function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Navbar/>
    <Routes>
    <Route path='/' element={<LoadingPage/>}/>
      <Route path='/main' element={<HomePage/>}/> 
      <Route path='/haber-form' element={<PrivateRoute item={<HaberForm/>}/>}/>
      <Route path='login' element={<LoginPage/>}/>
      <Route path="/zodiac/:zodiacName" element={<ZodiacDetailPage/>} />
      <Route path="/planet/:planetName" element={<PlanetDetailPage/>} />
      <Route path="/haberler/:baslik" element={<HaberPage/>} />
    </Routes>
    <ToastContainer />
    </BrowserRouter>
    </AuthProvider>
    </>
  )
}

export default App
