import React from 'react'
import { Link } from "react-router-dom";
import hero from '../assets/hero2.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import './Hero.css'


function Hero() {
  return (
    <>
      <section id='hero-section'>
        <div className='container-fluid'>
          <div className='hero-outer'>
            <div className='hero-inner'>
              <div className='hero-image'>
                <img src={hero} alt="Compassionate caregiver providing in-home senior care services in Surrey, Abbotsford, Chilliwack and Agassiz" />
              </div>
              <div className='hero-text'>
                <h1>Mercy Manor <br></br> Trusted Home Care Services in Surrey, Abbotsford, Chilliwack & Agassiz</h1>
                <h2>
                  Trusted home care in BC—supporting seniors with personalized care, companionship, and daily living assistance.
                </h2>
                <div className='hero-cta'>
                  <Link to="/booking">
                    <button className='all-button hero-cta'><FontAwesomeIcon icon={faPhone} className='hero-icon' />Start Your Care Today </button>
                  </Link>

                  <Link to="/Services">
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
