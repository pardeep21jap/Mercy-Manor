import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/dementiabanner.webp";
import Escortingcare from '../Escortingcare';
import Cta from '../Cta';
import Escortingincluded from '../Escortingincluded';
import Benefitsescorting from '../Benefitsescorting';
import Faqescorting from '../Faqescorting';
import Whyescortingcare from '../Whyescortingcare';
import Explore from '../Explore';

function EscortingCare() {
  return (
    <>

      <Helmet>
        <title>Professional Escorting Care in Surrey, BC | Mercy Manor</title>

        <meta
          name="description"
          content="Mercy Manor provides safe and reliable escorting care in Surrey, BC. Assistance with appointments, outings, and daily errands for your loved ones."
        />


        <link rel="canonical" href="https://www.mercymanor.ca/escorting-care" />

      </Helmet>

      <Banner title="Escorting Care Services"
        subtitleba="Helping your loved ones get to appointments, social events, and daily errands with confidence and care."
        bannerImage={bannerImg} alt="Mercy Manor Home Care escorting and transportation service for seniors in British Columbia" />
      <Escortingcare />
      <Escortingincluded />
      <Whyescortingcare />
      <Benefitsescorting />
      <Faqescorting />
      <Explore />
      <Cta />
    </>
  )
}

export default EscortingCare
