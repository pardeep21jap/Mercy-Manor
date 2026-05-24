import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import './Dailychores.css';

function Dailychores() {
  return (
    <div>
      <section id='slotpara-section'>
        <div className='container'>
          <div className='outer-slotpara'>
            <h2 className='all-heading cen-heading'>Support for Everyday Living</h2>
            <h3 className='subtitle'>We’re here to help with daily routines</h3>
            <div className="main-dailylist">
              <div className='daily-list'>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Companionship</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Medication Reminders</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Grocery Shopping</span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Meal Prep and Nutrition</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Transportation and Errands</span>
                  </li>

                </ul>

              </div>
              <div className='daily-list'>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Personal Care and Hygiene</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Staying Active</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Light Housekeeping</span>

                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Hobbies and Passions</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCircleCheck} className='acti-icon' />
                    <span>Cognitive Engagement</span>
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

export default Dailychores
