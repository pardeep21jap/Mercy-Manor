
import Banner from '../Banner'
import Cards from '../Cards'
import Services from '../Service'
import Cta from '../Cta'
import bannerImg from "../../assets/aboutbanner.png";
import Innerservices from '../Innerservices';
import Allservices from '../Allservices';

function services() {
  return (
    <>
      <Banner title="Your Health, Our Priority"
        subtitleba="Experience cutting-edge healthcare powered by innovation, delivered with compassion."
        bannerImage={bannerImg} />
      <Innerservices />
      <Allservices />
      <Cta />
    </>
  )
}

export default services;
