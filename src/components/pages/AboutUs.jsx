
import Banner from "../Banner";
import Ourstory from "../Ourstory";
import Mvv from "../MVV";
import Process from "../Process";
import Faq from "../Faq";
import Cta from "../Cta";
import bannerImg from "../../assets/Images/aboutbanner.png";


function AboutUs() {
  return (
    <>
      <Banner title="Caring for You, Every Step of the Way"
        subtitleba="Our mission is to provide compassionate personalized healthcare using modern medicine and a human touch."
        bannerImage={bannerImg} />
      <Ourstory />
      <Mvv />
      <Process />
      <Faq />
      <Cta />
    </>
  )
}
export default AboutUs;