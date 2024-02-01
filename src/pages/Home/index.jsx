import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { getLogements } from '../../utils/api/api';
import banner1 from '../../assets/banner_accueil.jpg'
import './home.scss'

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
        <Banner image={banner1}>
          <div className="banner_text">Chez vous, partout et ailleurs</div>
        </Banner>        
        <div className="card_container">
          {logements.map(logement => (
            <Card className="card" key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
          ))}
        </div>
    </div>
  );
};

export default Home;
