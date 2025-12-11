import React from 'react'
import "./Banner.css"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import defaultBannerImage from "../assets/banner.png";

// function Banner() {
function Banner({ title, subtitleba, bannerImage }) {
  const imgSrc = bannerImage || defaultBannerImage;

  return (
    <div>
      <section id='banner-section'>
        <div className="container-fluid">
          <div className="banner-inner">
            <img src={imgSrc} alt="banner" />
            <div className="banner-text">
              <h3>{title}</h3>
              <h4>{subtitleba}</h4>
              <Link to="/Contact">
                <button className='all-button'>contact us<FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /></button>
              </Link>
            </div>
          </div>
        </div>
      </section >
    </div >
  )
}

export default Banner

