
import { Helmet } from "react-helmet";
import bannerImg from "../../assets/contactbanner.webp";
import Banner from '../Banner.jsx'
import Contactpara from "../Contactpara";
import Cta from "../Cta";
import Contactinfo from "../Contactinfo";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Mercy Manor – We’re Here to Help</title>

        <meta
          name="description"
          content="Get in touch with Mercy Manor for questions, guidance, or to schedule home care services in Surrey, BC."
        />

        <link rel="canonical" href="https://www.mercymanor.ca/contact" />

      </Helmet>
      <Banner title="Contact Mercy Manor – We’re Here to Help"
        subtitleba="Connect with our team for guidance, questions, or medical assistance."
        bannerImage={bannerImg} alt="Contact our home care team for professional senior care support" />
      <Contactpara />
      <Contactinfo />
      <Cta />
    </>

  )
}
export default Contact