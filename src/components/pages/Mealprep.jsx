import React from 'react'
import Banner from '../Banner'
import bannerImg from "../../assets/Images/dementiabanner.png";
import Mealprepcare from '../Mealprepcare';
import Mealprepinclude from '../Mealprepinclude';
import Benefitsmealprep from '../Benefitsmealprep';
import Cta from '../Cta';
import Faqmealprep from '../Faqmealprep';

function Mealprep() {
  return (
    <div>
      <Banner title="Meal Prepare Services"
        subtitleba="Delicious, healthy, and tailored meal preparation to support your loved one’s well-being."
        bannerImage={bannerImg} />
      <Mealprepcare />
      <Mealprepinclude />
      <Benefitsmealprep />
      <Faqmealprep />
      <Cta />
    </div>
  )
}

export default Mealprep