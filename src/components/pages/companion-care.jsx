import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/dementiabanner.webp";
import Companioncare from '../Companioncare';
import Benefitscompanion from '../Benefitscompanion';
import Companionincluded from '../Companionincluded';
import Cta from '../Cta';
import Faqcompanion from '../Faqcompanion';
import Gmap from '../Gmap';
import Whycompanion from '../Whycompanion';
import Explore from '../Explore';

function CompanionCare() {
  return (
    <>

      <Helmet>
        <title>Companion Care Services in Surrey, BC | Mercy Manor</title>

        <meta
          name="description"
          content="Mercy Manor provides compassionate companion care in Surrey, BC. Friendly support, social engagement, and assistance for your loved ones at home."
        />


        <link rel="canonical" href="https://www.mercymanor.ca/companion-care" />

      </Helmet>

      <Banner title="Companion Care Services"
        subtitleba="Providing comfort, connection, and compassionate support for daily living."
        bannerImage={bannerImg} alt="Mercy Manor caregivers offering personalized companion support at home" />
      <Companioncare />
      <Companionincluded />
      <Whycompanion />
      <Benefitscompanion />
      <Gmap />
      <Faqcompanion />
      <Explore />
      <Cta />
    </>
  )
}

export default CompanionCare
