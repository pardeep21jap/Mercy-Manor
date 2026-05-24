import React from 'react'
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/blogbanner.webp";
import Blogcon from '../Blogcon.jsx'
import Cta from '../Cta.jsx';
import { Helmet } from "react-helmet";

function Blogs() {
  return (

    <>

      <Helmet>
        <title>Home Care Blog | Tips, Guides & News | Mercy Manor</title>

        <meta
          name="description"
          content="Explore Mercy Manor’s home care blog for expert tips, guides, and news on dementia care, companion care, nursing, and more."
        />

        <link rel="canonical" href="https://www.mercymanor.ca/blogs" />

      </Helmet>
      <Banner title="Senior Care Blog – Expert Tips for Caring for Loved Ones"
        subtitleba="Helpful advice, caregiving guides, and practical tips to support seniors and families with compassionate home care."
        bannerImage={bannerImg} alt="10 things to never do as a dementia caregiver – guide to better dementia care" />
      <Blogcon />

      <Cta />
    </>

  )
}

export default Blogs

