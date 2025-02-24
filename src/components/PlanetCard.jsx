import React from 'react';
import '../assets/styles/planetCard.scss'
import { Link } from 'react-router-dom';

const PlanetCard = ({planet}) => {

  return (
    <div className="planet-card">
      <h3>{planet.planetName} <span>{planet.symbol}</span></h3>
      <p><strong>Anlamı:</strong> {planet.meaning}</p>
      <p><strong>Yönettiği Burçlar:</strong> {planet.rulingSign}</p>
      <Link to={`/planet/${planet.planetName}`}>Detay</Link>
    </div>
  );
};

export default PlanetCard;
