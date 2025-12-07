import React from 'react'
import Banner from '../Banner'
import bannerImg from "../../assets/dementiabanner.png";
import Escortingcare from '../Escortingcare';
import Cta from '../Cta';
import Escortingincluded from '../Escortingincluded';
import Benefitsescorting from '../Benefitsescorting';
import Faqescorting from '../Faqescorting';

function Escorting() {
  return (
     <>
      <Banner title="Escorting Care Services"
        subtitleba="Helping your loved ones get to appointments, social events, and daily errands with confidence and care."
        bannerImage={bannerImg} />
        <Escortingcare />
        <Escortingincluded/>
        <Benefitsescorting />
        <Faqescorting />
      <Cta />
    </>
  )
}

export default Escorting
