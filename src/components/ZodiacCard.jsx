import React from 'react';
import '../assets/styles/zodiacCard.scss'
import { Link } from 'react-router-dom';


const ZodiacCard = ({zodiac}) => {

  return (
    <div className="zodiac-card">
      <h3>{zodiac.zodiacName} <span>{zodiac.zodiacSymbol}</span></h3>
      <p><strong>Element:</strong> {zodiac.element}</p>
      <p><strong>Tarih Aralığı:</strong> {zodiac.dateRange}</p>
      <Link to={`/zodiac/${zodiac?.zodiacName}`}>Detayları Gör</Link>

    </div>
  )
}
export default ZodiacCard;
