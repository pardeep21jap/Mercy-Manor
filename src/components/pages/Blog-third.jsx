import React from 'react'
import { Helmet } from "react-helmet";
import Banner from "../Banner";
import bannerImg from "../../assets/aboutbanner.webp";
import SundowningIndementia from '../Sundowning-In-Dementia.jsx';
import Cta from '../Cta';

function SundowningInDementia() {
  return (
    <>

      <Helmet>
        <title>Sundowning in Dementia: Causes & Care Tips | Mercy Manor</title>
        <meta name="description" content="Learn what sundowning in dementia is and how to respond effectively. Expert tips for caregivers to reduce agitation and improve evening care." />
        <link rel="canonical" href="https://www.mercymanor.ca/SundowningInDementia" />

      </Helmet>
      <Banner title="Sundowning in Dementia: What It Is and How to Respond"

        bannerImage={bannerImg} alt="Caregiver supporting a senior experiencing sundowning symptoms in dementia" />
      <SundowningIndementia />
      <Cta />
    </>
  )
}

export default SundowningInDementia
