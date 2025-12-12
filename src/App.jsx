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
import Dementia from "./components/pages/Dementia.jsx";
import Companion from "./components/pages/Companion.jsx";
import Escorting from "./components/pages/Escorting.jsx";
import Homemaking from "./components/pages/Homemaking.jsx";
import Mealprep from "./components/pages/Mealprep.jsx";
import Nursingcare from "./components/pages/Nursingcare.jsx";
import Blog from "./components/pages/Blog.jsx"
import Navbar from "./components/navbar.jsx";
import "./responsive.css";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dementia" element={<Dementia />} />
        <Route path="/Companion" element={<Companion />} />
        <Route path="/Escorting" element={<Escorting />} />
        <Route path="/Homemaking" element={<Homemaking />} />
        <Route path="/Mealprep" element={<Mealprep />} />
        <Route path="/Nursingcare" element={<Nursingcare />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
