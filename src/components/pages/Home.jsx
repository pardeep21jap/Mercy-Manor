
import { Helmet } from "react-helmet";
import Cards from "../Cards";
import { useEffect } from "react";
import Hero from "../Hero";
import LocationStrip from "../LocationStrip";
import Who from "../Who";
import Service from "../Service";
import Gmap from "../Gmap";
import Whyus from "../Whyus";
import Blogpost from "../Blogpost";
import Cta from "../Cta";
import Schema from "../Schema";
import WhatsAppWidget from "../WhatsAppWidget";
import { useLocation } from "react-router-dom";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Care Services in Surrey BC | Mercy Manor</title>
        <meta name="description" content="Mercy Manor provides compassionate home care services in Surrey, Abbotsford, Chilliwack, and Agassiz. Personalized senior care, dementia support, and companionship." />

        <link rel="canonical" href="https://www.mercymanor.ca/" />
      </Helmet>
      <div id="slider-section"> {/* Added ID for Home link to scroll to */}
        <Hero />
      </div>
      <div id="location-section"> {/* Added ID for Home link to scroll to */}
        <LocationStrip />
      </div>
      <div id="who-section">
        <Who />
      </div>
      <div id="services">
        <Service />
      </div>
      <Gmap />
      <div id="why-us-section">
        <Whyus />
      </div>
      <div id="blog-section">
        <Blogpost />
      </div>

      <div id="cta">
        <Cta />
      </div>
      <Schema />
      <WhatsAppWidget />
      {/* Component to handle scrolling to a section based on URL hash */}
      <HandleScrollOnLoad />
    </>
  )
}

function HandleScrollOnLoad() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return null; // This component doesn't render anything
}
export default Home;