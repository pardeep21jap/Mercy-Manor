import React from 'react'
import "./Banner.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import defaultBannerImage from "../assets/aboutbanner.webp";

// function Banner() {
function Banner({ title, subtitleba, bannerImage }) {
  const imgSrc = bannerImage || defaultBannerImage;

  const scrollToCta = (e) => {
    const element = document.getElementById('cta-section');
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <section id='banner-section'>
        <div className="container-fluid">
          <div className="banner-inner">
            <img src={imgSrc} alt="banner" />
            <div className="banner-text">
              <h1>{title}</h1>
              <h2>{subtitleba}</h2>
              <Link to="/#cta-section" onClick={scrollToCta}>
                <button className='all-button hero-cta'><FontAwesomeIcon icon={faPhone} className='hero-icon' />Start Your Care Today </button>
              </Link>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Banner
