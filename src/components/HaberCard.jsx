import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/DataContext';
import AuthContext from '../context/AuthContext';
import { Link } from 'react-router-dom';
import '../assets/styles/haberCard.scss'

const HaberCard = ({haber}) => {

  const {DeleteHaber,state,dispatch} = useContext(DataContext);
  const {isAuthenticated}=useContext(AuthContext)
  
  const [isLoading, setIsLoading] = useState(true)

   useEffect(() => {
    if (state.haberList && state.haberList.length > 0) {
      setIsLoading(false)
    }
  }, [state.haberList])

  if (isLoading) {
    return <div>Yükleniyor...</div>;
  }
  else{
  
  return (
     !haber.isDeleted&&(
       (haber.baslik.toLowerCase().startsWith(state.search.toLowerCase()))
       && 
      <div className='card-container'>
        <div className='card'>
            <div className='card-body'>
                <h4>{haber?.baslik}</h4>
                <p><i>{haber?.tarih}</i></p>
                <p>{haber?.ozet}</p>
                <Link to={`/haberler/${haber?.baslik}`} className='devamke'>Devamını Oku..</Link>
            </div>
        </div>
        {
            isAuthenticated&&
            <>
            <div className='btn-btn'>
            <button onClick={()=>DeleteHaber(haber.id)} className='delete'>Sil</button>

            <Link to="/haber-form" className="haber-duzenle-link" onClick={() => dispatch({ type: "selectedHaber", payload: haber })}>📄 Düzenle </Link>
            </div>
            </>
        }
      </div>
    )
   )
}
}
export default HaberCard



