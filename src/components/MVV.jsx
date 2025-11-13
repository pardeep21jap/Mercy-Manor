import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospital } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import "./MVV.css"

function MVV() {
  return (
    <div>

      <section id='mission-section'>
        <div className="container">
          <div className="mission-inner">

            <div className='row mission-outer'>

              <div className="col-4 missioncard one">
                <h3>Our Mission</h3>
                <p>our mission is to provide exceptional, patient-centered healthcare that combines medical excellence with compassion and respect. We are dedicated to improving the health and well-being of every individual and family we serve by delivering accessible, affordable, and personalized care in a safe and supportive environment.</p>
                <div className="cardicon">
                  <FontAwesomeIcon icon={faHospital} className='' />
                </div>

              </div>

              <div className="col-4 missioncard two">
                <h3>Our Vision</h3>
                <p>our mission is to provide exceptional, patient-centered healthcare that combines medical excellence with compassion and respect. We are dedicated to improving the health and well-being of every individual and family we serve by delivering accessible, affordable, and personalized care in a safe and supportive environment.</p>
                <div className="cardicon">
                  <FontAwesomeIcon icon={faEye} className='' />
                </div>
              </div>
              <div className="col-4 missioncard three">
                <h3>Our Value</h3>
                <p>our mission is to provide exceptional, patient-centered healthcare that combines medical excellence with compassion and respect. We are dedicated to improving the health and well-being of every individual and family we serve by delivering accessible, affordable, and personalized care in a safe and supportive environment.</p>
                <div className="cardicon">
                  <FontAwesomeIcon icon={faGem} className='' />
                </div>
              </div>

            </div>


          </div>
        </div>

      </section>

    </div>
  )
}

export default MVV
