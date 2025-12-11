import Banner from "../Banner";
import bannerImg from "../../assets/contactbanner.png";
import Contactpara from "../Contactpara";
import Cta from "../Cta";
import Faq from "../Faq";
import Contactinfo from "../Contactinfo";
import Gmap from "../Gmap";

function Contact() {
  return (
    <>
      <Banner title="We’re Here to Help"
        subtitleba="Connect with our team for guidance, questions, or medical assistance."
        bannerImage={bannerImg} />
      <Contactpara />
      <Contactinfo />
      <Gmap />
      <Cta />
    </>

  )
}
export default Contact