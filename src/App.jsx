import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import { initializeGA } from "./components/analytics.jsx"; // Import the initializeGA function

// Initialize Google Analytics
initializeGA();
import { initializeClarity } from "./clarity";
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Home from "./components/pages/Home.jsx";
import AboutUs from "./components/pages/aboutus.jsx";
import Services from "./components/pages/Services.jsx";
import Booking from "./components/pages/booking.jsx";
import Contact from "./components/pages/Contact.jsx";
import Thanks from "./components/pages/Thanks.jsx";
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
import TheBenefitsOfMealPreparationServicesForSeniors from "./components/pages/TheBenefitsOfMealPreparationServicesForSeniors.jsx";
import Areas from "./components/pages/areas.jsx";
import Homecareabbotsford from "./components/pages/home-care-abbotsford.jsx";
import Homecarechilliwack from "./components/pages/home-care-chilliwack.jsx";
import Homecareagassiz from "./components/pages/home-care-agassiz.jsx";
import HomeCareSurrey from "./components/pages/home-care-surrey.jsx";

import WhatsAppWidget from "./components/WhatsAppWidget.jsx";
import TopBar from "./components/TopBar.jsx";
import "./responsive.css";
import Blogfourth from "./components/pages/Blog-fourth.jsx";
import RecoveringAtHomeAfterSurgeryHowMercyManorHomeCareCanHelp from "./components/pages/RecoveringAtHomeAfterSurgeryHowMercyManorHomeCareCanHelp.jsx";
import SeniorSafetyTipsForLivingIndependentlyAtHome from "./components/pages/SeniorSafetyTipsForLivingIndependentlyAtHome.jsx";



function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

// 2-min engaged session

function EngagedSession2Min() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.gtag?.("event", "engaged_session_2min", {
        event_category: "Engagement",
        event_label: "User stayed 2 minutes",
        value: 120,
      });
    }, 120000); // 120000ms = 2 minutes

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Your Website */}
    </>
  );
}





function App() {
  return (
    <BrowserRouter>

      <CookieConsent
        enableDeclineButton
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="mercy_cookie_consent"
        onAccept={() => {
          initializeGA();
          initializeClarity();
        }}
        onDecline={() => {
          console.log("User declined cookies");
        }}
      >
        We use cookies to improve your experience and measure website traffic.
      </CookieConsent>

      <TopBar />
      <Navbar />
      <ScrollToTop />
      <WhatsAppWidget />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thanks" element={<Thanks />} />
        <Route path="/dementia-care" element={<DementiaCare />} />
        <Route path="/services" element={<Services />} />
        <Route path="/companion-care" element={<CompanionCare />} /> {/* Already updated in previous step */}
        <Route path="/escorting-care" element={<EscortingCare />} />
        <Route path="/Escorting" element={<EscortingCare />} />
        <Route path="/homemaking" element={<Homemaking />} />
        <Route path="/mealprep" element={<Mealprep />} />
        <Route path="/nursing-care" element={<NursingCare />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/home-care-surrey" element={<HomeCareSurrey />} />
        <Route path="/home-care-chilliwack" element={<Homecarechilliwack />} />
        <Route path="/home-care-agassiz" element={<Homecareagassiz />} />
        <Route path="/home-care-abbotsford" element={<Homecareabbotsford />} />
        <Route path="/Blog-first" element={<BlogFirst />} />
        <Route path="/ThingsNeverToDoAsADementiaCaregiver" element={
          <Navigate to="/things-never-to-do-as-a-dementia-caregiver" replace />
        } />
        <Route path="/things-never-to-do-as-a-dementia-caregiver" element={<BlogFirst />} />
        <Route path="/Blog-second" element={<BlogSecond />} />
        <Route path="/HowToDeEscalateDementiaAnger" element={
          <Navigate to="/how-to-de-escalate-dementia-anger" replace />
        } />
        <Route path="/how-to-de-escalate-dementia-anger" element={<BlogSecond />} />
        <Route path="/Blog-third" element={<BlogThird />} />
        <Route path="/TheBenefitsOfMealPreparationServicesForSeniors" element={
          <Navigate to="/the-benefits-of-meal-preparation-services-for-seniors" replace />
        } />
        <Route path="/the-benefits-of-meal-preparation-services-for-seniors" element={<TheBenefitsOfMealPreparationServicesForSeniors />} />
        <Route path="/SundowningInDementia" element={
          <Navigate to="/sun-downing-in-dementia" replace />
        } />
        <Route path="/sun-downing-in-dementia" element={<BlogThird />} />
        <Route path="/recovering-at-home-after-surgery-how-mercy-manor-home-care-can-help" element={<RecoveringAtHomeAfterSurgeryHowMercyManorHomeCareCanHelp />} />
        <Route path="/senior-safety-tips-for-living-independently-at-home" element={<SeniorSafetyTipsForLivingIndependentlyAtHome />} />



      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
