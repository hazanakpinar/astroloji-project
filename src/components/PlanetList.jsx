import React, { useContext } from 'react';
import PlanetCard from './PlanetCard';
import DataContext from '../context/DataContext'

const PlanetList = () => {
  const{state} = useContext(DataContext)

  const filteredPlanets = state.planetList.filter(planet =>
    (planet.selectedTopic === state.selectedTopic || state.selectedTopic === "konu") &&
    planet.planetName.toLowerCase().startsWith(state.search.toLowerCase()) 
  )
  
  return (
    <div id='planet-list' className="planet-list">
    {filteredPlanets.length > 0 ? (
      filteredPlanets.map(planet => (
        <PlanetCard key={planet.id} planet={planet} />
      ))
    ) : (
      <p>Aramanıza uygun gezegen bulunamadı!</p>  
    )}
  </div>
);
};
export default PlanetList;

