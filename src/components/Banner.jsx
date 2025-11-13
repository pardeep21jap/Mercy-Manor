import React from 'react'
import "./Banner.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
function Banner() {
  return (
    <div>
      <section id='banner-section'>
        <div className="container-fluid">
          <div className="banner-inner">
            <img src="./src/assets/Images/banner.png" alt="" />
            <div className="banner-text">
              <h3>Caring for You, Every Step of the Way</h3>
              <h4>our mission is to provide compassionate personalized healthcare <br></br> using modern medicine and a human touch.</h4>
              <button className='all-button'>booking <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' /></button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner

