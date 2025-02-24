import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import DataContext from '../context/DataContext'; 
import '../assets/styles/haberPage.scss'

const HaberPage = () => {
    const{baslik}=useParams()
    const{state}=useContext(DataContext)

    const selectedHaber = state.haberList.find(item => item.baslik === baslik)
    console.log("state",state)
    console.log("selectedHaber",selectedHaber)
    console.log("stateselectedHaber",state.getHaberData)
  if (!selectedHaber) {
    return <div>Haber bulunamadı</div>
  }

  return (
    <div className="haber-container">
    <div className="haber-page">
      <h1 className='hh1'>{selectedHaber.baslik}</h1>
      <p className='hp'>{selectedHaber.detaylar}</p> 
      <Link className='btn-geri' to="/main" > Geri </Link>
        
    </div>
    </div>
  );
};

export default HaberPage;
