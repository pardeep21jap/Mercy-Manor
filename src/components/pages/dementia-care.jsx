
import { Helmet } from "react-helmet";
import Banner from '../Banner'
import bannerImg from "../../assets/dementiabanner.webp";
import Dementiacare from '../Dementiacare';
import Dementiaincluded from '../Dementiaincluded';
import Benefitsdementia from '../Benefitsdementia';
import Whydementiacare from "../Whydementiacare";
import Faqdementia from '../Faqdementia';
import Gmap from '../Gmap';
import Explore from '../Explore';
import Cta from '../Cta';


function DementiaCare() {
  return (

    <>

      <Helmet>
        <title>Compassionate Dementia Care Services in Surrey, BC | Mercy Manor</title>

        <meta
          name="description"
          content="Mercy Manor provides personalized dementia care in Surrey, BC. Supportive, safe, and professional home care tailored to your loved one’s needs."
        />


        <link rel="canonical" href="https://www.mercymanor.ca/dementia-care" />

      </Helmet>

      <Banner title="Dementia Care Services"
        subtitleba="Compassionate Support for a Safe, Comfortable, and Meaningful Life."
        bannerImage={bannerImg} alt="Mercy Manor caregivers offering personalized dementia support at home" />
      <Dementiacare />
      <Dementiaincluded />

      <Whydementiacare />
      <Benefitsdementia />
      <Gmap />
      <Faqdementia />
      <Explore />
      <Cta />
    </>

  )
}

export default DementiaCare
