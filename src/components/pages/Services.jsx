
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import Cta from '../Cta'
import bannerImg from "../../assets/aboutbanner.webp";
import Innerservices from '../Innerservices';
import Service from '../Service';

function Services() {
  return (
    <>
      <Helmet>
        <title>Senior Care Services in Surrey, BC | Mercy Manor Home Care</title>

        <meta name="description" content="Mercy Manor offers trusted senior care services in Surrey, BC including dementia care, companion care, nursing care, and homemaking care tailored to your loved ones." />

        <link rel="canonical" href="https://www.mercymanor.ca/Services" />

      </Helmet>
      <Banner title="Expert Services Designed for You"
        subtitleba="From start to finish, Mercy Manor provides professional solutions that meet your unique needs with care and precision."
        bannerImage={bannerImg} />
      <Innerservices />
      <Service />
      <Cta />
    </>
  )
}

export default Services;
