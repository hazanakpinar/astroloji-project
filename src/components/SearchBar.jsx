import React, { useContext, useEffect } from 'react';
import '../assets/styles/searchBar.scss';
//import { FcSearch } from 'react-icons/fc';
import DataContext from '../context/DataContext'
//import { FcSearch } from 'react-icons/fc';

const SearchBar = () => {
  const { state, dispatch } = useContext(DataContext)  
  useEffect(() => {
    console.log('SearchBar render edildi');
  }, [])


  const handleSearchChange = (e) => {
    console.log('Search değişti:', e.target.value);
    dispatch({ type: 'search', payload: e.target.value })
    console.log("SearchBar burda render edildi")
  }
  return (
    <div className="search-bar">
      <div className="search-bar-input">
        {/* <input onChange={e => setSearch(e.target.value)} type="search" placeholder="ara"/> */}

        <input type="search" placeholder="Ara" value={state.search} // input değerini, search state'ine bağla
          onChange={handleSearchChange} // arama değiştiğinde handleSearchChange fonksiyonu çağrılır
        />
      </div>   
    </div>
  )
}

export default SearchBar;
