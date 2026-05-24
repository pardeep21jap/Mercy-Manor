import React from 'react'

import "./Whyus.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faHandHoldingDollar, faHouse, faUserNurse, faHandHoldingHeart, faHandshake, faIdBadge, faKitMedical, faUserCheck } from "@fortawesome/free-solid-svg-icons";
import whyus from '../assets/whyus.webp';
function Whyus() {
  return (



    <section id='why-us-section'>
      <div className="container">
        <div className="whyus-inner">

          <h2 className='all-heading cen-heading'>why mercy Manor</h2>
          <h3 className='subtitle'>Your Health Deserves the Best — Here’s Why</h3>

          <div className="outer-whyus">

            <div className="why-list">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faHandshake} className='usericon whyicon' />
                  <h3>Trust and professionalism</h3>
                  <p className='allp whyp'>We deliver dependable care backed by skilled experts and ethical medical standards.</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faHandHoldingHeart} className='usericon whyicon' />
                  <h3>Personalized care</h3>
                  <p className='allp whyp'>Every treatment plan is tailored to your unique health needs and lifestyle.</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faCalendar} className='usericon whyicon' />
                  <h3>Flexible appointment times</h3>
                  <p className='allp whyp'>Easy, convenient scheduling to suit your busy lifestyle.</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faIdBadge} className='usericon whyicon' />
                  <h3>Certified & trained staff</h3>
                  <p className='allp whyp'>Skilled, certified, and dedicated staff ensuring safe and effective healthcare services.</p>
                </li>



                <li>
                  <FontAwesomeIcon icon={faHandHoldingDollar} className='usericon whyicon' />
                  <h3>Affordable & Accessible</h3>
                  <p className='allp whyp'>Quality healthcare that fits your budget and is easy to reach when you need it.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faUserNurse} className='usericon whyicon' />
                  <h3>Patient-Centered Approach</h3>
                  <p className='allp whyp'>We put your comfort, needs, and preferences at the heart of every decision to ensure the best possible outcomes.</p>
                </li>
                <li>
                  <FontAwesomeIcon icon={faHouse} className='usericon whyicon' />
                  <h3>Compassionate Environment</h3>
                  <p className='allp whyp'>We create a warm, supportive, and stress-free atmosphere for every patient.</p>
                </li>

              </ul>
            </div>

            <div className="whyus-img">
              <img src={whyus} alt="Trusted, compassionate, and professional in-home care by Mercy Manor" />
            </div>

          </div>




        </div>
      </div>

    </section>
  )
}

export default Whyus
