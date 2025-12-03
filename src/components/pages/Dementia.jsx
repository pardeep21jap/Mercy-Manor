
import Banner from '../Banner'
import bannerImg from "../../assets/Images/banner.png";
import Dementiacare from '../Dementiacare';
import Dementiaincluded from '../Dementiaincluded';
import Benefitsdementia from '../Benefitsdementia';
import Faqdementia from '../Faqdementia';
import Cta from '../Cta';


function Dementia() {
  return (

    <>
      <Banner title="Dementia Care Services"
        subtitleba="Compassionate Support for a Safe, Comfortable, and Meaningful Life."
        bannerImage={bannerImg} />
      <Dementiacare />
      <Dementiaincluded />
      <Benefitsdementia />
      <Faqdementia />
      <Cta />
    </>

  )
}

export default Dementia
