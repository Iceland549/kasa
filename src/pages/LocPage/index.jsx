import React, { useEffect, useState } from 'react';
import { getLogements } from '../../utils/api/api';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Carousel from '../../components/Carousel'; 
import './locpage.scss'

function LocPage() {
  const [logement, setLogement] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchLogement = async () => {
      const logements = await getLogements();
      const logement = logements.find(logement => logement.id === id);
      setLogement(logement);
    };
    fetchLogement();
  }, [id]); 

  if (!logement) {
    return <div>Loading...</div>
  }

  const { title, pictures, host, rating, location, description, equipments, tags } = logement;

  return (
    <div>
      <Carousel images={pictures} />
      <h1>{title}</h1>
      <p>{location}</p>
      <Tags tags={tags} id={id} />
      <p>Rating: {rating}</p>
      <p>{host.name}</p>
      <img src={host.picture} alt='host' />
      <div className='collapse-container'>
        <Collapse title="Description">
          <p>{description}</p>
        </Collapse>
        <Collapse title="Equipements">
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
};

export default LocPage;
