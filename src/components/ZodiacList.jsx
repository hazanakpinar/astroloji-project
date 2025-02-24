import React, { useContext } from 'react';
import ZodiacCard from './ZodiacCard';
import DataContext from '../context/DataContext';

const ZodiacList = () => {
  const {state} = useContext(DataContext)
  console.log("zodiaclist",state.zodiacList);

  const filteredZodiacs = state.zodiacList.filter(zodiac =>
    (zodiac.selectedTopic === state.selectedTopic || state.selectedTopic === "konu") &&
    zodiac.zodiacName.toLowerCase().startsWith(state.search.toLowerCase()) 
  ) 

  return (
    <div id='zodiac-list' className="zodiac-list">

    {filteredZodiacs.length > 0 ? (
        filteredZodiacs.map(zodiac => (
          <ZodiacCard key={zodiac.id} zodiac={zodiac} />
        ))
      ) : (
        <p>Aramanıza uygun burç bulunamadı!!</p>  
      )}
    </div>
  );
};
export default ZodiacList;

