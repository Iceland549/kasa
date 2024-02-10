import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { getLogements } from '../../utils/api/api';
import banner1 from '../../assets/banner_accueil.jpg'
import './home.scss'
import '../../utils/styles/sass/_base.scss'

function Home() {
  const [logements, setLogements] = useState([])

  useEffect(()=>{
    const fetchLogements = async () => {
      const datas = await getLogements()
      setLogements(datas)
    }
    fetchLogements()
  }, [])

  return (
    <div>
        <Banner className='banner-container' image={banner1} alt="Paysage côtier rocheux">
          <h1 className="banner-text">Chez vous, <br/> partout et ailleurs</h1>
        </Banner>        
        <div className="card-container">
          {logements.map(logement => (
            <Card className="card" key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
          ))}
        </div>
    </div>
  );
};

export default Home;
