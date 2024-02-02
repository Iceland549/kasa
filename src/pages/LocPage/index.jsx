import React, { useEffect, useState } from 'react';
import { getLogements } from '../../utils/api/api';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Carousel from '../../components/Carousel'; 

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
      <Collapse>
        <p>Description</p>
        <p>{description}</p>
      </Collapse>
      <Collapse>
        <p>Equipements</p>
        <ul>
          {equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
};

export default LocPage;
