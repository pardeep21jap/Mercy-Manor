
import Banner from '../Banner'
import Cards from '../Cards'
import Services from '../Service'
import Cta from '../Cta'
import bannerImg from "../../assets/Images/banner.png";

function services() {
  return (
    <>
      <Banner title="Our Services"
        subtitleba="our mission is to provide compassionate personalized healthcare <br></br> using modern medicine and a human touch."
        bannerImage={bannerImg} />
      <Cards />
      <Services />
      <Cta />
    </>
  )
}

export default services;
