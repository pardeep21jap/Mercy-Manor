import React from 'react'
import { Helmet } from "react-helmet";
import Banner from "../Banner";
import bannerImg from "../../assets/aboutbanner.webp";
import ThingsNeverToDoAsADementiaCaregiver from '../Things-never-to-do-as-a-dementia-caregiver.jsx';
import Cta from '../Cta';


// 10 Things to Never Do as a Dementia Caregiver

function BlogFirst() {
  return (
    <>
      <Helmet>
        <title>10 Things to Never Do as a Dementia Caregiver | Mercy Manor</title>
        <meta name="description" content="Avoid common mistakes while caring for a loved one with dementia. Learn 10 essential things not to do as a dementia caregiver." />
        <link rel="canonical" href="https://www.mercymanor.ca/ThingsNeverToDoAsADementiaCaregiver" />

      </Helmet>
      <Banner title="10 Things to Never Do as a Dementia Caregiver"

        bannerImage={bannerImg} alt="Dementia caregiver supporting a senior patient with compassionate home care" />
      <ThingsNeverToDoAsADementiaCaregiver />
      <Cta />
    </>
  )
}

export default BlogFirst
