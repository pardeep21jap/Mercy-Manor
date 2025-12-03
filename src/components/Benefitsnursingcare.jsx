import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";  
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faBedPulse } from "@fortawesome/free-solid-svg-icons";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalking } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import "./Benefitsdementia.css"


function Benefitsnursingcare() {
  return (
    <div>
      <section id='benefits-section'>
        <div className="container">
          <div className="benefits-outer">
            <div className="benefits-inner">
              <h2 className='all-heading cen-heading'>Benefits of Nursing Care Services</h2>

              <div className="benefits-cards">
                <ul>
                  <li>
                 
                    <FontAwesomeIcon icon={faUserNurse} className='benefits-icon' />
                    <span>Professional Medical Support</span>
                  </li>
                  <li>
                   <FontAwesomeIcon icon={faHeartPulse} className='benefits-icon' />
                    <span>
                      Chronic Disease Management
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faBedPulse} className='benefits-icon' />
                    <span>
                     Post-Surgery and Recovery Support
                    </span>

                  </li>
                  <li>
                 <FontAwesomeIcon icon={faStethoscope} className='benefits-icon' />
                    <span>
                     Continuous Health Monitoring
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPersonWalking} className='benefits-icon' />
                    <span>
                     Promotes Independence
                    </span>

                  </li>
                  <li>
                   <FontAwesomeIcon icon={faBed} className='benefits-icon' />
                    <span>
                     End-of-Life and Palliative Support
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

export default Benefitsnursingcare
