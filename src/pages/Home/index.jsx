import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import { getLogements } from '../../utils/api/api';


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
        <Banner />
        <div className="card_container">
          {logements.map(logement => (
            <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
          ))}
        </div>
    </div>
  );
};

export default Home;
