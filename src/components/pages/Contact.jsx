import Banner from "../Banner";
import bannerImg from "../../assets/contactbanner.png";
import Contactpara from "../Contactpara";
import Cta from "../Cta";
import Faq from "../Faq";
import Contactinfo from "../Contactinfo";

function Contact() {
  return (
    <>
      <Banner title="We’re Here to Help"
        subtitleba="Connect with our team for guidance, questions, or medical assistance."
        bannerImage={bannerImg} />
      <Contactpara />
      <Contactinfo />
      <Cta />
    </>

  )
}
export default Contact;