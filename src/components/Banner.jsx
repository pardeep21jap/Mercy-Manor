import React from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import bannerImage from "../assets/Images/banner.png";

// function Banner() {
function Banner({ title, subtitleba, bannerImage }) {

  return (
    <div>
      <section id='banner-section'>
        <div className="container-fluid">
          <div className="banner-inner">
            <img src={bannerImage} alt="banner" />
            <div className="banner-text">
              <h3>{title}</h3>
              <h4>{subtitleba}</h4>
              <button className='all-button'>booking <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner

