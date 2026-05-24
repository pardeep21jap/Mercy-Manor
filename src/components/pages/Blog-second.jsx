import React from 'react'
import { Helmet } from "react-helmet";
import Banner from "../Banner";
import bannerImg from "../../assets/aboutbanner.webp";
import Cta from '../Cta';
import HowToDeEscalateDementiaAnger from '../How-To-De-Escalate-Dementia-Anger';

function BlogSecond() {
  return (
    <>

      <Helmet>
        <title>De-Escalate Dementia Anger Quickly | Mercy Manor Blog</title>
        <meta name="description" content="Learn effective strategies to calm dementia-related anger in the first critical minutes. Expert tips for caregivers to ensure safety and compassion." />
        <link rel="canonical" href="https://www.mercymanor.ca/HowToDeEscalateDementiaAnger" />

      </Helmet>

      <Banner title="How to De-Escalate Dementia Anger in the First 10 Seconds"

        bannerImage={bannerImg} alt="Caregiver helping a senior with dementia manage anger and agitation" />
      <HowToDeEscalateDementiaAnger />
      <Cta />
    </>
  )
}

export default BlogSecond
