import React from 'react'
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/Images/banner.png";
import Cta from '../Cta.jsx';
import Homemakingcare from '../Homemakingcare';
import Homemakingincluded from '../Homemakingincluded';
import Benefitshomemaking from '../Benefitshomemaking';
import Faqhomemaking from '../Faqhomemaking.jsx';

function Homemaking() {
  return (
    <>
      <Banner title="Home Making Services"
        subtitleba="Creating a clean, comfortable, and stress-free home environment for your loved ones."
        bannerImage={bannerImg} />
      <Homemakingcare />
      <Homemakingincluded />
      <Benefitshomemaking />
      <Faqhomemaking />
      <Cta />
    </>
  )
}

export default Homemaking
