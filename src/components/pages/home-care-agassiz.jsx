import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/locbanner1.png";
import Agassizarea from '../Agassizarea';
import Agassizservices from '../Agassizservices';
import Whyagassiz from '../Whyagassiz';
import Agassizmap from '../Agassizmap';
import Agassizcta from '../Agassizcta';


function Homecareagassiz() {
  return (
    <div>
      <Helmet>
        <title>Home Care Services in Agassiz BC | Mercy Manor Home Care</title>
        <meta name="description" content="Mercy Manor Home Care provides compassionate home care services in Agassiz including companionship, personal care, meal preparation, and senior support to help loved ones live safely and comfortably at home." />

        <link rel="canonical" href="https://www.mercymanor.ca/home-care-agassiz" />
      </Helmet>

      <Banner title="Home Care Services in Agassiz, BC "
        subtitleba="Trusted caregivers providing personalized senior care, dementia support, and companionship in Agassiz."
        bannerImage={bannerImg} />
      <Agassizarea />
      <Agassizservices />
      <Whyagassiz />
      <Agassizmap />
      <Agassizcta />
    </div>
  )
}

export default Homecareagassiz
