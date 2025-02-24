import React, {useContext, useEffect, useState } from 'react'
import '../assets/styles/form.scss'
import DataContext from '../context/DataContext'

const Form = () => {
  const {state, dispatch, profilSubmit,} = useContext(DataContext)
  const{name,birthDate,birthCity,birthCountry,birthTime }=state

// const{
//   //profilSubmit,
//   name,
//   birthDate,
//   birthCity,
//   birthCountry,
//   birthTime,
//   setName,
//   setBirthDate,
//   setBirthTime,
//   setBirthCountry,
//   setBirthCity
// } = useContext(DataContext)

  return (
    <form onSubmit={profilSubmit}>
      <h3>Yeni Kişi Ekle</h3>
      <input value={name} onChange={e=>dispatch({type:"name",payload:e.target.value})} type='text' placeholder='isim'/>
      <label>doğum gününüzü giriniz</label>
      <input value={birthDate} onChange={e=>dispatch({type:"birthDate",payload:e.target.value})} type='date' placeholder='doğum gününüzü giriniz'/>
      <label>Doğum Gününüzü Giriniz</label>

      <input value={birthDate} onChange={e=>dispatch({type:"birthDate",payload:e.target.value})} type='time' placeholder='doğum saatiniz'/>
      <label>Doğduğunuz Ülkeyi Giriniz</label>

      <input value={birthCountry} onChange={e=>dispatch({type:"birthCountry",payload:e.target.value})} type='text'placeholder='ülke'/>
      <label>Doğduğunuz Şehiri Giriniz</label>

      <input value={birthCity} onChange={e=>dispatch({type:"birthCity",payload:e.target.value})} type='text' placeholder='şehir'/>
      <input value="Kaydet" type='submit' disabled={name===""||birthDate===""||birthCity===""||birthCountry===""||birthTime==""}/>
      
    </form>
  )
}

export default Form


