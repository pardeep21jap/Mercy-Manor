import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShieldHeart } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Benefitsdementia.css"


function Benefitsmealprep() {
  return (
    <div>
        <section id='benefits-section'>
                          <div className="container">
                            <div className="benefits-outer">
                              <div className="benefits-inner">
                                <h2 className='all-heading cen-heading'>Benefits of Meal Prepare Services</h2>
                  
                                <div className="benefits-cards">
                                  <ul>
                                    <li>
                                      <FontAwesomeIcon icon={faUtensils} className='benefits-icon' />
                                      <span>Promotes Healthy Eating</span>
                                    </li>
                                    <li>
                                    <FontAwesomeIcon icon={faHeart} className='benefits-icon' />
                                      <span>
                                       Supports Special Dietary Needs
                                      </span>
                  
                                    </li>
                                    <li>
                                    <FontAwesomeIcon icon={faShieldHeart} className='benefits-icon' />
                                      <span>
                                        Ensures Food Safety
                                      </span>
                  
                                    </li>
                                    <li>
                                     <FontAwesomeIcon icon={faFaceSmile} className='benefits-icon' />
                                      <span>
                                        Reduces Stress for Families
                                      </span>
                  
                                    </li>
                                    <li>
                                   <FontAwesomeIcon icon={faBurger} className='benefits-icon' />
                                      <span>
                                        Provides Enjoyable and Delicious Meals
                                      </span>
                  
                                    </li>
                                    <li>
                                     <FontAwesomeIcon icon={faClock} className='benefits-icon' />
                                      <span>
                                       Saves Time and Effort
                                      </span>
                  
                                    </li>
                                  </ul>
                                </div>
                  
                  
                              </div>
                            </div>
                          </div>
                  
                        </section>
    </div>
  )
}

export default Benefitsmealprep
