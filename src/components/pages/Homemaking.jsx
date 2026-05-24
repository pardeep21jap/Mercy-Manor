import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/dementiabanner.webp";
import Cta from '../Cta.jsx';
import Homemakingcare from '../Homemakingcare.jsx';
import Homemakingincluded from '../Homemakingincluded.jsx';
import Benefitshomemaking from '../Benefitshomemaking.jsx';
import Faqhomemaking from '../Faqhomemaking.jsx';
import Dailychores from '../Dailychores.jsx';
import Whyhomecare from '../Whyhomecare.jsx';
import Explore from '../Explore.jsx';

function Homemaking() {
  return (
    <>

      <Helmet>
        <title>Home Making Services in Surrey, BC | Mercy Manor</title>

        <meta
          name="description"
          content="Mercy Manor offers professional home making services in Surrey, BC. Help with household chores, cleaning, and daily tasks for your loved ones."
        />


        <link rel="canonical" href="https://www.mercymanor.ca/homemaking" />

      </Helmet>

      <Banner title="Home Making Services"
        subtitleba="Creating a clean, comfortable, and stress-free home environment for your loved ones."
        bannerImage={bannerImg} alt="Senior homemaking and housekeeping services in Surrey Abbotsford Chilliwack BC" />
      <Homemakingcare />
      <Homemakingincluded />
      <Dailychores />
      <Whyhomecare />
      <Benefitshomemaking />
      <Faqhomemaking />
      <Explore />
      <Cta />
    </>
  )
}

export default Homemaking
