import React from 'react'
import Banner from '../Banner.jsx'
import bannerImg from "../../assets/dementiabanner.png";
import Cta from '../Cta.jsx';
function Blog() {
  return (

    <>
      <Banner title="Blog"
        subtitleba="Providing compassionate, skilled, and personalized nursing support for your loved ones."
        bannerImage={bannerImg} />


      <Cta />
    </>

  )
}

export default Blog
