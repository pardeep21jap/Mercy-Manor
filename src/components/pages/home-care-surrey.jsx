import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import Surreyarea from '../Surreyarea'
import Surreymap from '../Surreymap'
import bannerImg from "../../assets/locbanner1.png";
import Homecareservices from '../Homecareservices';
import Whysurrey from '../Whysurrey';
import Surreycta from '../Surreycta';

function homeCareSurrey() {
  return (
    <>
      <Helmet>
        <title>Home Care Services in Surrey BC | Mercy Manor Home Care</title>
        <meta name="description" content="Mercy Manor Home Care provides compassionate home care services in Surrey including companionship, personal care, meal preparation, and senior support to help loved ones live safely and comfortably at home." />

        <link rel="canonical" href="https://www.mercymanor.ca/home-care-surrey" />
      </Helmet>

      <Banner title="Home Care Services in Surrey, BC "
        subtitleba="Trusted caregivers providing personalized senior care, dementia support, and companionship in Surrey."
        bannerImage={bannerImg} alt="Professional home care services by Mercy Manor in Surrey, BC" />
      <Surreyarea />
      <Homecareservices />
      <Whysurrey />
      <Surreymap />
      <Surreycta />
    </>
  )
}

export default homeCareSurrey
