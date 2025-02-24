import React, { useContext, useEffect } from 'react'
import HaberCard from './HaberCard'
import DataContext from '../context/DataContext'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'
import '../assets/styles/haberList.scss'

const HaberList = () => {
    
    const{state, dispatch}=useContext(DataContext)
    const { isAuthenticated } = useContext(AuthContext)

    
    console.log("haberlist sayfası burda");
    console.log("State içindeki haberList:", state.haberList);

  return (
    <div id='haber-list' className='haber-list'>
      {isAuthenticated && (
              <div className="haber-ekle-container">
                <Link to="/haber-form" className="haber-ekle-link" onClick={() => dispatch({ type: "haberFormReset"})}>
                  📄 Haber Ekle
                </Link>
                
              </div>
            )}
        {
            state.haberList.map(haber=>
                <HaberCard key={haber.id} haber={haber}/>)
            }
    </div>
  )
}

export default HaberList
