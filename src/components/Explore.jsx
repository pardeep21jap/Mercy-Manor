import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import dementia from '../assets/dementia.png';
import companion from '../assets/companion.png';
import nurse from '../assets/nurse.png';
import food from '../assets/food.png';
import appoint from '../assets/appoint.png';
import house from '../assets/house.png';
import './Explore.css';
function Explore() {
  return (
    <div>
      <section id='explore-section'>
        <div className='container'>
          <div className='explore-outer'>
            <div className='explore-inner'>
              <h2 className='all-heading cen-heading'>Explore Other Home Care Services We Offer</h2>

              <div className='all-services-cards'>
                <div className='explore-card'>
                  <img src={dementia} alt="" />
                  <h3>Dementia Care</h3>
                  <Link to="/dementia-care">
                    <button className='explore-btn'>Learn More... <FontAwesomeIcon icon={faArrowRight} className='expo-icon' /></button>
                  </Link>
                </div>
                <div className='explore-card'>
                  <img src={companion} alt="" />
                  <h3>Companion Care</h3>
                  <Link to="/companion-care">
                    <button className='explore-btn'>Learn More... <FontAwesomeIcon icon={faArrowRight} className='expo-icon' /></button>
                  </Link>
                </div>
                <div className='explore-card'>
                  <img src={appoint} alt="" />
                  <h3>Escorting Services</h3>
                  <Link to="/escorting-care">
                    <button className='explore-btn'>Learn More... <FontAwesomeIcon icon={faArrowRight} className='expo-icon' /></button>
                  </Link>
                </div>
                <div className='explore-card'>
                  <img src={nurse} alt="" />
                  <h3>Nursing Care</h3>
                  <Link to="/nursing-care">
                    <button className='explore-btn'>Learn More... <FontAwesomeIcon icon={faArrowRight} className='expo-icon' /></button>
                  </Link>
                </div>
                <div className='explore-card'>
                  <img src={food} alt="" />
                  <h3>Meal Preparation</h3>
                  <Link to="/mealprep">
                    <button className='explore-btn'>Learn More... <FontAwesomeIcon icon={faArrowRight} className='expo-icon' /></button>
                  </Link>
                </div>
                <div className='explore-card'>
                  <img src={house} alt="" />
                  <h3>Home Making</h3>
                  <Link to="/homemaking">
                    <button className='explore-btn'>Learn More... <FontAwesomeIcon icon={faArrowRight} className='expo-icon' /></button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section >
    </div >
  )
}

export default Explore
