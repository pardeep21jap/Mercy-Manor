import React from 'react'
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/Images/dementiabanner.png";
import Blogcon from '../Blogcon.jsx';
import Cta from '../Cta.jsx';
function Blog() {
  return (

    <>
      <Banner title="Blog"
        subtitleba="Providing compassionate, skilled, and personalized nursing support for your loved ones."
        bannerImage={bannerImg} />

      <Blogcon />
      <Cta />
    </>

  )
}

export default Blog
