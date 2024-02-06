import React, { useEffect, useState } from 'react';
import { getLogements } from '../../utils/api/api';
import { useParams } from 'react-router-dom';
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Carousel from '../../components/Carousel'; 
import './locpage.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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

  const totalStars = 5;
  const filledStars = Math.min(rating, totalStars); 

  return (
    <div>
      <Carousel images={pictures} />
      <div className='locpage-container'>
        <section className='main-locpage'>
          <section className='locpage_text'>
            <h2>{title}</h2>
            <p>{location}</p>
            <Tags tags={tags} id={id} />
          </section>
          <section className='rating_host-container'>
            <div className="rating-star">
              {[...Array(totalStars)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={index < filledStars ? 'star' : 'empty-star'}
                />
              ))}
            </div>  
            <div className="host">    
              <p>{host.name}</p>
              <img src={host.picture} alt='host' />
            </div>
          </section>
        </section>
        <section className='collapse-container'>
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
        </section>
      </div>
    </div>
  );
};

export default LocPage;
