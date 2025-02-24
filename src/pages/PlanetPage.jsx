import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

const PlanetPage = () => {
  const{planetDetail}=useContext(DataContext)

  return (
    <div className='gezegen-sayfasi'>
      <h2>Gezegenler</h2>
      <ul>
        {planetDetail.map((planetDetail)=>(
          <li key={planetDetail.planetName}>
            <Link to={`/planet/${planetDetail.planetName.toLowerCase()}`}>{planetDetail.planetName}</Link></li>))}
      </ul>
    </div>
  )
}

export default PlanetPage

