import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import Services from "./components/pages/Services.jsx";
import Booking from "./components/pages/Booking.jsx";
import Contact from "./components/pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Slider from "./components/Slider.jsx";
import Cards from "./components/Cards.jsx";
import Who from "./components/Who.jsx";
import Service from "./components/Service.jsx";
import Whyus from "./components/Whyus.jsx";
import Review from "./components/Review.jsx";
import Cta from "./components/Cta.jsx";
import Footer from "./components/Footer.jsx";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
