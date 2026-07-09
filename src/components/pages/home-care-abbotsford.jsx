import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import Abbotsfordarea from '../Abbotsfordarea'
import bannerImg from "../../assets/locbanner1.png";
import Abbotsfordservices from '../Abbotsfordservices';
import Whyabbotsford from '../Whyabbotsford';
import Cta from '../Cta';
import Abbotsfordmap from '../Abbotsfordmap';

function Homecareabbotsford() {
  return (
    <div>
      <Helmet>
        <title>24 Hour Elder Care Services in Abbotsford BC</title>
        <meta name="description" content="Mercy Manor Home Care BC provides professional elder care services in Abbotsford. Personalized senior care, dementia support, and home assistance." />

        <link rel="canonical" href="https://www.mercymanor.ca/home-care-abbotsford" />
      </Helmet>

      <Banner title="24 Hour Elder Care Services in Abbotsford BC"
        subtitleba="Compassionate and reliable in-home care services for seniors and families in Abbotsford."
        bannerImage={bannerImg} alt="Professional elder care services by Mercy Manor in Abbotsford, BC" />
      <Abbotsfordarea />
      <Abbotsfordservices />
      <Whyabbotsford />
      <Abbotsfordmap />
      <Cta />
    </div>
  )
}

export default Homecareabbotsford
