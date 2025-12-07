
import Banner from '../Banner'
import bannerImg from "../../assets/Images/dementiabanner.png";
import Companioncare from '../Companioncare';
import Benefitscompanion from '../Benefitscompanion';
import Companionincluded from '../Companionincluded';
import Cta from '../Cta';
import Faqcompanion from '../Faqcompanion';
function Companion() {
  return (
    <>
      <Banner title="Companion Care Services"
        subtitleba="Providing comfort, connection, and compassionate support for daily living."
        bannerImage={bannerImg} />
      <Companioncare />
      <Companionincluded />
      <Benefitscompanion />
      <Faqcompanion />
      <Cta />
    </>
  )
}

export default Companion
