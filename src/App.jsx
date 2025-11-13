import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AboutUs from "./components/pages/AboutUs.jsx";
import Services from "./components/pages/Services.jsx";
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
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
export default App;
