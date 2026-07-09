import React from "react";
import "./WhatsApp-animated.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/16046131246?text=Hello%20I%20need%20help"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-animated"
      aria-label="Chat on WhatsApp"
      onClick={() => {
        window.gtag?.("event", "whatsapp_click", {
          event_category: "lead",
          event_label: "WhatsApp Chat",
        });
      }}
    >
      <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppWidget;