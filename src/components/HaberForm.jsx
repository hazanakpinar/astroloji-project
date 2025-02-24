import React, { useContext } from 'react'
import DataContext from '../context/DataContext'
import '../assets/styles/haberForm.scss'
import { Link } from 'react-router-dom'

const HaberForm = () => {
    const{state, dispatch, haberSubmit} = useContext(DataContext)
    const{selectedHaber, baslik, tarih, ozet, detaylar}=state
    console.log("HaberForm Render Edildi")


  return (
   
    <form onSubmit={haberSubmit}>
        <h3>{selectedHaber?"Haberi Düzenle":"Haber Ekle"}</h3>
        <input value={baslik} onChange={e=>dispatch({type:"baslik", payload:e.target.value})} type='text' placeholder='Haber Başlığı Giriniz'/>

        <input value={tarih} onChange={e=>dispatch({type:"tarih", payload:e.target.value})} type='date' placeholder='Haber Tarihi Giriniz'/>

        <input value={ozet} onChange={e=>dispatch({type:"ozet", payload:e.target.value})} type='text' placeholder='Haber Özeti Giriniz'/>

        <textarea value={detaylar} onChange={e=>dispatch({type:"detaylar", payload:e.target.value})} type='text' placeholder='Haber Detayı Giriniz'/>

        <input className='btn-ekle' disabled={baslik===""||ozet===""||tarih===""||detaylar===""} type='submit' value={selectedHaber?"Düzenle":"Ekle"}/>
        <Link className='btn-btn-geri' to="/main" onClick={() => dispatch({ type: "haberFormReset"})}> Geri </Link>
        
    </form>
  )
}

export default HaberForm
