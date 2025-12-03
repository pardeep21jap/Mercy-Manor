import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faBox } from "@fortawesome/free-solid-svg-icons";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import "./Benefitsdementia.css"




function Benefitshomemaking() {
  return (
    <div>
        <section id='benefits-section'>
                    <div className="container">
                      <div className="benefits-outer">
                        <div className="benefits-inner">
                          <h2 className='all-heading cen-heading'>Benefits of Home Making Services</h2>
            
                          <div className="benefits-cards">
                            <ul>
                              <li>
                                <FontAwesomeIcon icon={faHouse} className='benefits-icon' />
                                <span>Maintains a Clean and Safe Home</span>
                              </li>
                              <li>
                              <FontAwesomeIcon icon={faStar} className='benefits-icon' />
                                <span>
                                  Enhances Quality of Life
                                </span>
            
                              </li>
                              <li>
                               <FontAwesomeIcon icon={faLeaf} className='benefits-icon' />
                                <span>
                                 Encourages a Healthier Living Environment
                                </span>
            
                              </li>
                              <li>
                               <FontAwesomeIcon icon={faBox} className='benefits-icon' />
                                <span>
                                 Reduces Clutter and Improves Organization
                                </span>
            
                              </li>
                              <li>
                               <FontAwesomeIcon icon={faPerson} className='benefits-icon' />
                                <span>
                                  Provides Peace of Mind
                                </span>
            
                              </li>
                              <li>
                               <FontAwesomeIcon icon={faClock} className='benefits-icon' />
                                <span>
                                 Saves Time and Physical Energy
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

export default Benefitshomemaking
