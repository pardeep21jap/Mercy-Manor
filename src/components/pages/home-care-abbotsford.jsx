import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import Abbotsfordarea from '../Abbotsfordarea'
import bannerImg from "../../assets/locbanner1.png";
import Abbotsfordservices from '../Abbotsfordservices';
import Whyabbotsford from '../Whyabbotsford';
import Abbotsfordcta from '../Abbotsfordcta';
import Abbotsfordmap from '../Abbotsfordmap';

function homecareabbotsford() {
  return (
    <div>
      <Helmet>
        <title>Home Care Services in Abbotsford | Mercy Manor Home Care BC</title>
        <meta name="description" content="Mercy Manor Home Care BC provides professional home care services in Abbotsford. Personalized senior care, dementia support, and home assistance." />

        <link rel="canonical" href="https://www.mercymanor.ca/home-care-abbotsford" />
      </Helmet>

      <Banner title="Home Care Services in Abbotsford, BC – Mercy Manor Home Care "
        subtitleba="Compassionate and reliable in-home care services for seniors and families in Abbotsford."
        bannerImage={bannerImg} alt="Professional home care services by Mercy Manor in Abbotsford, BC" />
      <Abbotsfordarea />
      <Abbotsfordservices />
      <Whyabbotsford />
      <Abbotsfordmap />
      <Abbotsfordcta />
    </div>
  )
}

export default homecareabbotsford
