import React from 'react'
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/Images/banner.png";
import Cta from '../Cta';
import Nursingcarep from '../Nursingcarep';
import Benefitsnursingcare from '../Benefitsnursingcare';
import Nursingcareincluded from '../Nursingcareincluded.jsx';
import Faqnursing from '../Faqnursing.jsx';
function Nursingcare() {
  return (
    
       <>
      <Banner title="Nursing Care Services"
        subtitleba="Providing compassionate, skilled, and personalized nursing support for your loved ones."
        bannerImage={bannerImg} />
        <Nursingcarep />
        <Nursingcareincluded />
        <Benefitsnursingcare />
        <Faqnursing />
         <Cta />
    </>
    
  )
}

export default Nursingcare
