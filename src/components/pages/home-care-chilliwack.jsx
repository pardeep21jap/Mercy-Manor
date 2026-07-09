import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/locbanner1.png";
import Chilliarea from '../Chilliarea';
import Chilliwackservices from '../Chilliwackservices';
import Whychilliwack from '../Whychilliwack';
import Chilliwackmap from '../Chilliwackmap';
import Cta from '../Cta';
import Schema from '../Schema';





function Homecarechilliwack() {
  return (

    <>

      <Helmet>
        <title>24 Hour In-Home Care Services in Chilliwack BC | Mercy Manor Home Care</title>
        <meta name="description" content="Mercy Manor Home Care provides compassionate In-Home care services in Chilliwack including companionship, personal care, meal preparation, and senior support to help loved ones live safely and comfortably at home." />

        <link rel="canonical" href="https://www.mercymanor.ca/home-care-chilliwack" />
      </Helmet>

      <Banner title="24 Hour In-Home Care Services in Chilliwack, BC "
        subtitleba="Trusted caregivers providing personalized 24-hour senior care, dementia support, and companionship in Chilliwack."
        bannerImage={bannerImg} />
      <Chilliarea />
      <Chilliwackservices />
      <Whychilliwack />
      <Chilliwackmap />
      <Cta />
      <Schema />
    </>
  )
}

export default Homecarechilliwack
