import React from 'react'
import { Outlet } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import ZodiacList from '../components/ZodiacList'
import PlanetList from '../components/PlanetList'
import HaberList from '../components/HaberList'

const HomePage = () => {

  return (
    <>
    {/* <Navbar/> */}
    <Outlet/>
    <SearchBar/>
    <ZodiacList/>
    <PlanetList/>
    <HaberList/>
    </>
  )
}

export default HomePage
