import { Helmet } from "react-helmet";
import Banner from "../Banner";
import Gmap from "../Gmap";
import Cta from "../Cta";
import bannerImg from "../../assets/aboutbanner.webp";
import WhatsAppWidget from "../WhatsAppWidget";
import Services from "./Services";

function Areas() {
  return (
    <>
      <Helmet>
        <title>In Home Care Services in Surrey, Abbotsford, Chilliwack & Agassiz</title>
        <meta
          name="description"
          content="Mercy Manor provides professional home care services across Surrey, Abbotsford, Chilliwack, and Agassiz. View our service areas."
        />
        <link rel="canonical" href="https://www.mercymanor.ca/areas" />
      </Helmet>

      <Banner
        title="We provide In Home Care Services "
        subtitleba="In Surrey, Abbotsford, Chilliwack & Agassiz BC"
        bannerImage={bannerImg}
        alt="Map of service areas for Mercy Manor Home Care in BC"
      />

      <Gmap />

      <Cta />
      <WhatsAppWidget />
    </>
  )
}
export default Areas;