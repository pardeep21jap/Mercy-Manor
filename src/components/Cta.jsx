import React from 'react'
import "./Cta.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faPhone } from "@fortawesome/free-solid-svg-icons";




function Cta() {
  return (
    <div>
      <section id='cta-section'>
        <div className="container">
          <div className="cta-inner">
            {/* Card 1: Book an Appointment */}
            <div className="cta-text">
              <h2>Book an Appointment</h2>
              <p className="allp">Schedule a care visit or consultation with our team.</p>
              <Link to="/booking">
                <button className='cta-button'>Book Now <FontAwesomeIcon icon={faCalendarDays} className='' /></button>
              </Link>
            </div>
            {/* Card 2: Contact Us */}
            <div className="cta-text">
              <h2>Get in Touch</h2>
              <p className="allp">Have questions? Reach out to our compassionate team for any inquiries.</p>
              <Link to="/contact">
                <button className='cta-button'>Contact Us <FontAwesomeIcon icon={faPhone} className='' /></button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Cta;
