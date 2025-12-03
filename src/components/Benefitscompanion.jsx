import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup} from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import "./Benefitsdementia.css"



function Benefitscompanion() {
  return (
    <div>
      <section id='benefits-section'>
        <div className="container">
          <div className="benefits-outer">
            <div className="benefits-inner">
              <h2 className='all-heading cen-heading'>Benefits of Companion Care Services</h2>

              <div className="benefits-cards">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUserGroup} className='benefits-icon' />
                    <span>Reduces Loneliness & Social Isolation</span>
                  </li>
                  <li>
                   <FontAwesomeIcon icon={faPersonHiking} className='benefits-icon'  />
                    <span>
                      Promotes Independence
                    </span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFaceSmile} className='benefits-icon' />
                    <span>
                      Enhances Emotional Well-Being
                    </span>

                  </li>
                  <li>
                  <FontAwesomeIcon icon={faBrain} className='benefits-icon' />
                    <span>
                      Encourages Mental & Physical Activity
                    </span>

                  </li>
                  <li>
                   <FontAwesomeIcon icon={faLock} className='benefits-icon'  />
                    <span>
                      Improves Safety at Home
                    </span>

                  </li>
                  <li>
                   <FontAwesomeIcon icon={faCar} className='benefits-icon' />
                    <span>
                      Provides Reliable Transportation
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

export default Benefitscompanion
