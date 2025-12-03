import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faWheelchair } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faPersonBiking } from "@fortawesome/free-solid-svg-icons";
import { faHandshakeAngle } from "@fortawesome/free-solid-svg-icons";

import "./Benefitsdementia.css"


function Benefitsescorting() {
  return (
    <div>
      <section id='benefits-section'>
        <div className="container">
          <div className="benefits-outer">
            <div className="benefits-inner">
              <h2 className='all-heading cen-heading'>Benefits Escorting Client Services</h2>

              <div className="benefits-cards">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faShield} className='benefits-icon' />
                    <span>Ensures Safety and Security</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faClock} className='benefits-icon' />
                    <span>
                      Punctual and Reliable
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faWheelchair} className='benefits-icon' />
                    <span>
                      Assistance with Mobility
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCalendar} className='benefits-icon' />
                    <span>
                      Reduces Risk of Missed Appointments
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPersonBiking} className='benefits-icon' />
                    <span>
                      Encourages Active Lifestyle
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHandshakeAngle} className='benefits-icon' />
                    <span>
                      Builds Trust and Confidence
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

export default Benefitsescorting
