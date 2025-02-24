import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const ZodiacListPage = () => {
  const { zodiacDetail } = useContext(DataContext);

  return (
    <div className='burc-sayfasi'>
      <h2>Burçlar</h2>
      <ul>
        {zodiacDetail.map((zodiacDetail) => (
          <li key={zodiacDetail.zodiacName}>
            <Link to={`/zodiac/${zodiacDetail?.zodiacName.toLowerCase()}`}>{zodiacDetail.zodiacName}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ZodiacListPage;

