import Banner from "../Banner";
import bannerImg from "../../assets/Images/banner.png";
import Slotpara from "../Slotpara";
import Slotform from "../Slotform";
import Cta from "../Cta";

function Booking() {
  return (
    <>
      <Banner title="Book Your Appointment"
        subtitleba="Get the care you need at a time that works best for you."
        bannerImage={bannerImg} />
      <Slotpara />
      <Slotform />
      <Cta />
    </>

  )
}
export default Booking;
