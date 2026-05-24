import React from 'react'
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/dementiabanner.webp";
import Mealprepcare from '../Mealprepcare';
import Mealprepinclude from '../Mealprepinclude';
import Benefitsmealprep from '../Benefitsmealprep';
import Cta from '../Cta';
import Faqmealprep from '../Faqmealprep';
import Whymeal from '../Whymeal';
import Explore from '../Explore';

function Mealprep() {
  return (
    <div>

      <Helmet>
        <title>Meal Preparation Services in Surrey, BC | Mercy Manor</title>

        <meta
          name="description"
          content="Mercy Manor provides nutritious meal preparation services in Surrey, BC. Fresh, balanced meals and support for your loved ones at home."
        />


        <link rel="canonical" href="https://www.mercymanor.ca/mealprep" />

      </Helmet>

      <Banner title="Meal Prepare Services"
        subtitleba="Delicious, healthy, and tailored meal preparation to support your loved one’s well-being."
        bannerImage={bannerImg} alt="Senior meal preparation and nutrition support service in Surrey Abbotsford Chilliwack BC" />
      <Mealprepcare />
      <Mealprepinclude />
      <Whymeal />
      <Benefitsmealprep />
      <Faqmealprep />
      <Explore />
      <Cta />
    </div>
  )
}
export default Mealprep