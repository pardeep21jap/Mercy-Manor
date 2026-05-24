import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Home from "./components/pages/Home.jsx";
import AboutUs from "./components/pages/aboutUs.jsx";
import Services from "./components/pages/Services.jsx";
import Booking from "./components/pages/booking.jsx";
import Contact from "./components/pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import DementiaCare from "./components/pages/dementia-care.jsx";
import CompanionCare from "./components/pages/companion-care.jsx"; // Already updated in previous step
import EscortingCare from "./components/pages/escorting-care.jsx";
import Homemaking from "./components/pages/homemaking.jsx"; // Already updated in previous step
import Mealprep from "./components/pages/mealprep.jsx"; // Already updated in previous step
import NursingCare from "./components/pages/nursing-care.jsx";
import Blogs from "./components/pages/Blogs.jsx"
import Navbar from "./components/Navbar.jsx";
import BlogFirst from "./components/pages/Blog-first.jsx";
import BlogSecond from "./components/pages/Blog-second.jsx";
import BlogThird from "./components/pages/Blog-third.jsx";
import HomeCareSurrey from "./components/pages/home-care-surrey.jsx";
import Homecareabbotsford from "./components/pages/home-care-abbotsford.jsx";
import Homecarechilliwack from "./components/pages/home-care-chilliwack.jsx";
import Homecareagassiz from "./components/pages/home-care-agassiz.jsx";

import "./responsive.css";


function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <ScrollToTopButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dementia-care" element={<DementiaCare />} />
        <Route path="/companion-care" element={<CompanionCare />} /> {/* Already updated in previous step */}
        <Route path="/escorting-care" element={<EscortingCare />} />
        <Route path="/Escorting" element={<EscortingCare />} />
        <Route path="/homemaking" element={<Homemaking />} />
        <Route path="/mealprep" element={<Mealprep />} />
        <Route path="/nursing-care" element={<NursingCare />} />
        <Route path="/home-care-surrey" element={<HomeCareSurrey />} />
        <Route path="/home-care-chilliwack" element={<Homecarechilliwack />} />
        <Route path="/home-care-abbotsford" element={<Homecareabbotsford />} />
        <Route path="/Home-care-agassiz" element={<Homecareagassiz />} />
        <Route path="/Abbotsford" element={<Homecareabbotsford />} />
        <Route path="/Blog-first" element={<BlogFirst />} />
        <Route path="/ThingsNeverToDoAsADementiaCaregiver" element={<BlogFirst />} />
        <Route path="/Blog-second" element={<BlogSecond />} />
        <Route path="/HowToDeEscalateDementiaAnger" element={<BlogSecond />} />
        <Route path="/Blog-third" element={<BlogThird />} />
        <Route path="/SundowningInDementia" element={<BlogThird />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
