import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/dementiabanner.webp";
import Cta from '../Cta.jsx';
import Nursingcarep from '../Nursingcarep.jsx';
import Benefitsnursingcare from '../Benefitsnursingcare.jsx';
import Nursingcareincluded from '../Nursingcareincluded.jsx';
import Faqnursing from '../Faqnursing.jsx';
import Whynurse from '../Whynurse.jsx';
import Explore from '../Explore.jsx';

function NursingCare() {
  return (

    <>

      <Helmet>
        <title>Professional Nursing Care in Surrey, BC | Mercy Manor Home Care</title>

        <meta
          name="description"
          content="Mercy Manor provides skilled nursing care in Surrey, BC. Compassionate, professional support for medical needs, medication, and daily care at home."
        />

        <link rel="canonical" href="https://www.mercymanor.ca/nursing-care" />

      </Helmet>

      <Banner title="Nursing Care Services"
        subtitleba="Providing compassionate, skilled, and personalized nursing support for your loved ones."
        bannerImage={bannerImg} alt="Senior nursing care services at home in Surrey Abbotsford Chilliwack British Columbia" />
      <Nursingcarep />
      <Nursingcareincluded />
      <Whynurse />
      <Benefitsnursingcare />
      <Faqnursing />
      <Explore />
      <Cta />
    </>

  )
}

export default NursingCare
