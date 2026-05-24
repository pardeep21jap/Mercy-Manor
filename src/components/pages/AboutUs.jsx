
import { Helmet } from "react-helmet";
import Banner from "../Banner";
import Ourstory from "../Ourstory";
import Mvv from "../MVV";
import Process from "../Process";
import Faq from "../Faq";
import Cta from "../Cta";
import bannerImg from "../../assets/aboutbanner.webp";


function AboutUs() {
  return (
    <>

      <Helmet>
        <title>About Mercy Manor Home Care | Trusted Senior Care in Surrey BC</title>

        <meta
          name="description"
          content="Learn about Mercy Manor Home Care, a trusted provider of compassionate senior home care services in Surrey, Abbotsford, Chilliwack, and Agassiz."
        />


        <link rel="canonical" href="https://www.mercymanor.ca/about-us" />

      </Helmet>


      <Banner title="About Us – Trusted Senior Care and Home Support Services"
        subtitleba="We provide compassionate caregiving and daily living assistance to help older adults maintain independence at home."
        bannerImage={bannerImg} alt="Professional home care services by Mercy Manor in Surrey, BC" />
      <Ourstory />
      <Mvv />
      <Process />
      <Faq />
      <Cta />
    </>
  )
}
export default AboutUs;