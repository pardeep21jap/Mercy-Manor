import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faBookMedical } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import "./Homecareservices.css"


function Homecareservices() {
  return (
    <div>
      <section id='hc-services'>
        <div className='container'>


          <div className='hc-services-outer'>
            <div className='hc-services-inner'>

              <h2 className='all-heading cen-heading'>Personalized Home Care Services in Surrey</h2>
              <h3 className='subtitle'>Helping Seniors Live Comfortably at Home</h3>

              <div className='hc-services-cards-outer'>
                <div className='hc-card'>
                  <FontAwesomeIcon icon={faBrain} className='hc-icons' />
                  <h4>Dementia Care</h4>
                  <span>Compassionate support for seniors living with memory loss and cognitive challenges related to Dementia.</span>
                  <Link to="/dementia-care">
                    <button className='all-button servbtn'>Read More...</button>
                  </Link>
                </div>
                <div className='hc-card'>
                  <FontAwesomeIcon icon={faUsers} className='hc-icons' />
                  <h4>Companion Care</h4>
                  <span>Friendly companionship and emotional support to reduce loneliness and isolation.</span>
                  <Link to="/companion-care">
                    <button className='all-button servbtn'>Read More...</button>
                  </Link>
                </div>
                <div className='hc-card'>
                  <FontAwesomeIcon icon={faBookMedical} className='hc-icons' />
                  <h4>Escorting Client</h4>
                  <span>Helping seniors travel safely to medical appointments, social events, and errands.</span>
                  <Link to="/escorting-care">
                    <button className='all-button servbtn'>Read More...</button>
                  </Link>
                </div>
                <div className='hc-card'>
                  <FontAwesomeIcon icon={faHouse} className='hc-icons' />
                  <h4>Home Making</h4>
                  <span>Light housekeeping to maintain a clean, safe, and comfortable home environment.</span>
                  <Link to="/homemaking">
                    <button className='all-button servbtn'>Read More...</button>
                  </Link>
                </div>
                <div className='hc-card'>
                  <FontAwesomeIcon icon={faBowlFood} className='hc-icons' />
                  <h4>meal prepration</h4>
                  <span>Nutritious meal planning and preparation to support healthy daily living.</span>
                  <Link to="/mealprep">
                    <button className='all-button servbtn'>Read More...</button>
                  </Link>
                </div>
                <div className='hc-card'>
                  <FontAwesomeIcon icon={faUserNurse} className='hc-icons' />
                  <h4>Nursing care</h4>
                  <span>Professional nursing support for health monitoring and medical care needs.</span>
                  <Link to="/nursing-care">
                    <button className='all-button servbtn'>Read More...</button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homecareservices
