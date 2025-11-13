
import Banner from "../Banner";
import Ourstory from "../Ourstory";
import Mvv from "../MVV";
import Process from "../Process";
import Cta from "../Cta";
import bannerImg from "../../assets/Images/banner.png";


function AboutUs() {
  return (
    <>
      <Banner title="Caring for You, Every Step of the Way"
        subtitleba="our mission is to provide compassionate personalized healthcare <br></br> using modern medicine and a human touch."
        bannerImage={bannerImg} />
      <Ourstory />
      <Mvv />
      <Process />
      <Cta />
    </>
  )
}
export default AboutUs;