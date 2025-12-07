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
                <p>Our mission is to provide compassionate, patient-centered healthcare that prioritizes safety, quality, and accessibility. We strive to deliver advanced medical care supported by innovation, integrity, and empathy, ensuring every individual receives the support, respect, and attention they deserve throughout their healthcare journey. </p>
                <div className="cardicon">
                  <FontAwesomeIcon icon={faHospital} className='' />
                </div>

              </div>

              <div className="col-4 missioncard two">
                <h3>Our Vision</h3>
                <p>Our vision is to become a trusted healthcare leader known for transforming lives through excellence, innovation, and holistic care. We aim to create healthier communities by expanding access, embracing evolving technologies, and continuously elevating patient experiences to set new standards in modern healthcare.</p>
                <div className="cardicon">
                  <FontAwesomeIcon icon={faEye} className='' />
                </div>
              </div>
              <div className="col-4 missioncard three">
                <h3>Our Value</h3>
                <p>We are guided by values of compassion, integrity, innovation, and respect. We prioritize patient well-being, uphold ethical practice, foster continuous improvement, and work collaboratively to deliver exceptional healthcare. Our commitment is to care with empathy, act with responsibility, and serve with excellence</p>
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
