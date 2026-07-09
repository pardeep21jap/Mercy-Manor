import { Helmet } from "react-helmet";
import "../confirm.css";
import { useEffect } from "react";
import WhatsAppWidget from "../WhatsAppWidget";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

function Thanks() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("event", "booking_confirmation", {
      event_category: "conversion",
      event_label: "Booking Confirmation",
    });
  }, [location]);

  return (
    <div>
      <Helmet>
        <title>Thank You for Your Booking</title>
      </Helmet>
      <section id='thanks-section'>
        <div className="container">
          <div className="thanks-inner">
            <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
            <h1>Thank You for Contacting Mercy Manor Health Care</h1>
            <h2>We appreciate your interest in our home care services. Our team will carefully review your inquiry and respond as soon as possible.</h2>

            <div className="thanks-social">
              <h3>Follow Us</h3>
              <a href="https://www.facebook.com/profile.php?id=61589532728856" target="_blank" rel="noreferrer" className="facebook" aria-label="Facebook">
                <FontAwesomeIcon icon={faSquareFacebook} className="" />
              </a>
              <a href="https://www.instagram.com/mercymanorhomecarebc/" target="_blank" rel="noreferrer" className="instagram" aria-label="Instagram">
                <FontAwesomeIcon icon={faSquareInstagram} className="" />
              </a>
            </div>

            <div className="visit-button-wrap">
              <a href="/" className="all-button visit-button">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Thanks;