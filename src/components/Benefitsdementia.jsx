import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faHome, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPeopleLine } from '@fortawesome/free-solid-svg-icons';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons';

import "./Benefitsdementia.css"


function Benefitsdementia() {
  return (
    <div>

      <section id='benefits-section'>
        <div className="container">
          <div className="benefits-outer">
            <div className="benefits-inner">
              <h2 className='all-heading cen-heading'>Benefits of Dementia Care Services</h2>

              <div className="benefits-cards">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faClock} className='benefits-icon' />
                    <span>Promotes independence with structured routines</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faLightbulb} className='benefits-icon' />
                    <span>
                      Reduces confusion and behavioral triggers
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHouse} className='benefits-icon' />
                    <span>
                      Ensures a safe environment at home
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHeart} className='benefits-icon' />
                    <span>
                      Enhances quality of life through meaningful activities
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPeopleLine} className='benefits-icon' />
                    <span>
                      Provides emotional comfort and companionship
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faHandshakeAngle} className='benefits-icon' />
                    <span>
                      Gives families peace of mind and support
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

export default Benefitsdementia
