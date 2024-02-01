// About
import React from 'react';
import Banner from '../../components/Banner';
import DropdownMenu from '../../components/DropdownMenu'; 
import banner2 from '../../assets/banner_apropos.jpg'

function About() {
  const text1 = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes";
  const text2 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme";
  const text3 = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme";
  const text4 = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.";

  return (
    <div>
      <Banner image={banner2} />
      <DropdownMenu title="Fiabilité" >{text1}</DropdownMenu> 
      <DropdownMenu title="Respect" >{text2}</DropdownMenu> 
      <DropdownMenu title="Service" >{text3}</DropdownMenu>
      <DropdownMenu title="Sécurité" >{text4}</DropdownMenu>
    </div>
  );
};

export default About;
