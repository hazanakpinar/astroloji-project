import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import '../assets/styles/planetDetail.scss'

const PlanetDetailPage = () => {
  const{ planetName} = useParams()
  const{state}=useContext(DataContext)

  if (!state.planetDetail) {
    return <div>Burç bilgisi bulunamadı.</div>
  }
console.log(state.planetDetail);

  const planetDetay = state.planetDetail.find(item => item.planetName === planetName)
    if (!planetDetay) {
      return <div>Haber bulunamadı</div>
    }

  return (
    <div className='planet-detail-div'>
      <h1 className='ph1'>{planetName} {planetDetay?.symbol} </h1>
      <p className='pp'><strong>Gezegenin Anlamı:</strong> {planetDetay?.meaning}</p>
      <p className='pp'><strong>Yönetici Burçlar:</strong> {planetDetay?.rulingSign}</p>
      <h3 className='ph3'>Detaylı Anlam</h3>
      <p className='pp'>{planetDetay?.detailedMeaning}</p>
      <h3 className='ph3'>İlişkili Alanlar</h3>
      <p className='pp'>{planetDetay?.associatedAreas}</p>
      <h3 className='ph3'>Gezegenin Simgeleri:</h3>
      <p className='pp'>{planetDetay?.symbol}</p>
    </div>
  );
};

export default PlanetDetailPage;
