import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import hsb from '../assets/hsb.webp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHandHoldingHeart, } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import './Hero.css'



function Hero() {

  const scrollToCta = (e) => {
    const element = document.getElementById('cta-section');
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id='hero-section'>
        <div className='container-fluid'>
          <div className='hero-outer'>
            <div className='hero-inner'>
              <div className='hero-image'>
                <img src={hsb} className="img-fluid hero-main-img" alt="Compassionate caregiver providing in-home senior care services in Surrey, Abbotsford, Chilliwack and Agassiz" />
              </div>
              <div className='hero-text'>
                <h1><span>Welcome To Mercy Manor </span>
                  <br></br>Compassionate in-home care helping your loved ones live safely,
                  comfortably, and independently every day. <br></br></h1>
                <h2>Serving Surrey, Abbotsford, Chilliwack & Agassiz BC.</h2>
                <div className="list-of-hero">
                  <ul>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="hero-icon" />24/7 Support</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="hero-icon" />Licensed and Personalized Caregivers for happier and safer home healthcare</li>
                    <li><FontAwesomeIcon icon={faCircleCheck} className="hero-icon" />Less expensive and no long-term contracts</li>
                  </ul>
                </div>

                <div className='hero-cta'>
                  <Link to="/#cta-section" onClick={scrollToCta}>
                    <button className='all-button hero-cta'><FontAwesomeIcon icon={faPhone} className='hero-icon' />Start Your Care Today </button>
                  </Link>

                  <Link to="/services">
                    <button className='all-button hero-cta'><FontAwesomeIcon icon={faHandHoldingHeart} className='hero-icon' />Explore Care Options</button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
