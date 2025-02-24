import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import { Flip, toast } from "react-toastify";
import {initialState, reducer}from "../reducer/reducer"

const DataContext = createContext()

export const DataProvider = ({children})=>{

  const[state,dispatch]=useReducer(reducer,initialState)
  const{selectedHaber, haberList} = state
  
  
  const getPeopleData = async()=>{
    const url="http://localhost:3005/peopleData"
    const response = await axios.get(url)
    const peopleData = await response.data
    dispatch({type:"getPeopleData",payload:peopleData})
  }

  const getZodiacData = async()=>{
    const url="http://localhost:3005/zodiacs"
    const response = await axios.get(url)
    const zodiacData = await response.data
    dispatch({type:"getZodiacData",payload:zodiacData})
  }

  const getPlanetData = async()=>{
    const url="http://localhost:3005/planets"
    const response = await axios.get(url)
    const planetData = await response.data
    dispatch({type:"getPlanetData",payload:planetData})
  }

  const getZodiacDetails = async()=>{
    const url="http://localhost:3005/zodiacDetail"
    const response = await axios.get(url)
    const zodiacDetailData = await response.data
    dispatch({type:"getZodiacDetails",payload:zodiacDetailData})
  }

  const getPlanetDetails = async()=>{
    const url="http://localhost:3005/planetDetail"
    const response = await axios.get(url)
    const planetDetailData = await response.data
    dispatch({type:"getPlanetDetails",payload:planetDetailData})
  }
  
  const getHaberData = async()=>{
    const url="http://localhost:3005/haberler"
    const response = await axios.get(url)
    const haberler = await response.data
    console.log("getHaberData:", haberler);
    dispatch({type:"getHaberData",payload:haberler})
  }

  const AddNewHaber = async(newHaber)=>{
    let url="http://localhost:3005/haberler"
    if(!selectedHaber){
      newHaber.id=(Number(haberList[haberList.length-1].id)+1).toString()
      dispatch({type:"AddHaber",newHaber})
      const response = await axios.post(url,newHaber)
      console.log("Eklenen haber:",response.data)
      //toast gelicek
      toast.success('Yeni Haber Eklendi!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }
    else{
      newHaber.id=selectedHaber.id
      url+=`/${selectedHaber.id}`
      const response = await axios.put(url,newHaber)
      console.log("düzenlenmiş haber:",response.data);
      dispatch({type:"editHaber",newHaber})
      toast.warn('Haber Düzenlendi!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
    }
    dispatch({ type: "haberFormReset" });
   }
  
   const DeleteHaber = async(id)=>{
    dispatch({type:"deleteHaber",id})

    const url=`http://localhost:3005/haberler/${id}`
    const response = await axios.patch(url,{isDeleted:true})
    console.log("silinen haber:", response.data)
    //toast gelicek
    toast.error('Haber Silindi!',{
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Flip,
      });
   }

   useEffect(()=>{
    getPeopleData()
    getZodiacData()
    getPlanetData()
    getZodiacDetails()
    getPlanetDetails()
    getHaberData()
   },[])

  const haberSubmit=(e)=>{
    e.preventDefault()
    AddNewHaber({
      tarih : state.tarih,
      baslik : state.baslik,
      ozet : state.ozet,
      detaylar : state.detaylar
    })
    
    dispatch({type:"haberFormReset"})
  }

    return <DataContext.Provider value={{   
      haberSubmit,      
      DeleteHaber,
      dispatch,
      state
      }}>

    {children}
   </DataContext.Provider>
  }
  export default DataContext