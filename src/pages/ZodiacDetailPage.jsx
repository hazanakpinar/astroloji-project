import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext'
import '../assets/styles/zodiacDetail.scss'

const ZodiacDetailPage = () => {
  const { zodiacName } = useParams()

  const{state}=useContext(DataContext)

  if (!state.zodiacDetail) {
    return <div>Burç bilgisi bulunamadı.</div>
  } 
    const zodiacDetay = state.zodiacDetail.find(item => item.ad === zodiacName)
    if (!zodiacDetay) {
      return <div>Haber bulunamadı</div>
    }
  
console.log("state", state);
console.log("adı", zodiacName);
console.log("gelmesi gereken", state.zodiacDetail);


return (
  <div className='zodiac-detail-div'>
    <h1 className='zh1'>{zodiacName} Burcu</h1>
    <p className='zp'><strong>Tarih Aralığı:</strong> {zodiacDetay.tarih_araligi}</p>
    {/* <p><strong>Element:</strong> {zodiacBasics.element}</p> */}
    <p className='zp'><strong>Genel Bilgi:</strong> {zodiacDetay?.genel_bilgi?.tanim}</p>
    <p className='zp'><strong>Karakteristik:</strong> {zodiacDetay?.genel_bilgi?.karakteristik}</p>
    <p className='zp'><strong>Yönetici Gezegen:</strong> {zodiacDetay?.genel_bilgi?.gezegeni}</p>
    <p className='zp'><strong>Bağımsızlık:</strong> {zodiacDetay?.genel_bilgi?.bagimsizlik}</p>
    <p className='zp'><strong>Hayat Felsefesi:</strong> {zodiacDetay?.genel_bilgi?.hayat_felsefesi}</p>

    <h3  className='zh3'>Kişilik Özellikleri</h3>
    {/* <p><strong>Güçlü Yönler:</strong> {zodiacDetailData?.kisilik?.guclu_yonler}</p> */}
    <p className='zp'><strong>Güçlü Yönler:</strong> {zodiacDetay?.kisilik?.guclu_yonler.join(", ")}</p>
    <p className='zp'><strong>Zayıf Yönler:</strong> {zodiacDetay?.kisilik?.zayif_yonler.join(", ")}</p>

    <h3 className='zh3'>İlişkiler</h3>
    <p className='zp'><strong>Genel:</strong> {zodiacDetay?.iliskiler?.genel}</p>
    <p className='zp'><strong>Uyumlu Burçlar:</strong> {zodiacDetay?.iliskiler?.uyumlu_burclar.join(", ")}</p>
    <p className='zp'><strong>Uyumsuz Burçlar:</strong> {zodiacDetay?.iliskiler?.uyumsuz_burclar.join(", ")}</p>

    <h3 className='zh3'>Kariyer</h3>
    <p className='zp'><strong>Güçlü Yönler:</strong> {zodiacDetay?.kariyer?.guclu_yonler}</p>
    <p className='zp'><strong>Zayıf Yönler:</strong> {zodiacDetay?.kariyer?.zayif_yonler}</p>
  </div>
)
}

export default ZodiacDetailPage
