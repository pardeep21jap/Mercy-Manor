
import { Helmet } from "react-helmet";
import Cards from "../Cards";
import Hero from "../Hero";
import Who from "../Who";
import Service from "../Service";
import Gmap from "../Gmap";
import Whyus from "../Whyus";
import Blogpost from "../Blogpost";
import Cta from "../Cta";
import Schema from "../Schema";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Care Services in Surrey BC | Mercy Manor</title>
        <meta name="description" content="Mercy Manor provides compassionate home care services in Surrey, Abbotsford, Chilliwack, and Agassiz. Personalized senior care, dementia support, and companionship." />

        <link rel="canonical" href="https://www.mercymanor.ca/" />
      </Helmet>

      <Hero />
      <Cards />
      <Who />
      <Service />
      <Gmap />
      <Whyus />
      <Blogpost />
      <Cta />
      <Schema />
    </>
  )
}
export default Home;