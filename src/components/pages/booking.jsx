import Banner from "../Banner";
import bannerImg from "../../assets/bookingbanner.webp";
import Slotpara from "../Slotpara";
import Slotform from "../Slotform";
import Cta from "../Cta";
import { Helmet } from "react-helmet";

function Booking() {
  return (
    <>

      <Helmet>
        <title>Book Home Care Services in Surrey, BC | Mercy Manor</title>

        <meta
          name="description"
          content="Schedule professional home care services with Mercy Manor in Surrey, BC. Easy online booking for nursing, companion, meal prep, and dementia care."
        />

        <link rel="canonical" href="https://www.mercymanor.ca/booking" />


      </Helmet>

      <Banner title="Book Your Home Care Appointment"
        subtitleba="Arrange professional in-home caregiving services designed to help seniors live comfortably and independently."
        bannerImage={bannerImg} alt="Book professional in-home senior care services with Mercy Manor" />
      <Slotpara />
      <Slotform />
    </>

  )
}
export default Booking;
