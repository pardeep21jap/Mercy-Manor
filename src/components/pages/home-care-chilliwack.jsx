import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/locbanner1.png";
import Chilliarea from '../Chilliarea';
import Chilliwackservices from '../Chilliwackservices';
import Whychilliwack from '../Whychilliwack';
import Chilliwackmap from '../Chilliwackmap';
import Chillicta from '../Chillicta';
import Schema from '../Schema';





function Homecarechilliwack() {
  return (

    <>

      <Helmet>
        <title>Home Care Services in Chilliwack BC | Mercy Manor Home Care</title>
        <meta name="description" content="Mercy Manor Home Care provides compassionate home care services in Surrey including companionship, personal care, meal preparation, and senior support to help loved ones live safely and comfortably at home." />

        <link rel="canonical" href="https://www.mercymanor.ca/home-care-chilliwack" />
      </Helmet>

      <Banner title="Home Care Services in Chilliwack, BC "
        subtitleba="Trusted caregivers providing personalized senior care, dementia support, and companionship in Chilliwack."
        bannerImage={bannerImg} />
      <Chilliarea />
      <Chilliwackservices />
      <Whychilliwack />
      <Chilliwackmap />
      <Chillicta />
      <Schema />
    </>
  )
}

export default Homecarechilliwack
