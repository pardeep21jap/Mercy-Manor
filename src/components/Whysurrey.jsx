import React from 'react'
import "./Whysurrey.css"
import "./Whyus.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHouse, faUserCheck, faUserGroup, faMapPin, faHandshake, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import whyloc from '../assets/whyloc.png';
function Whysurrey() {
  return (
    <div>
      <section id='why-us-section'>
        <div className="container">
          <div className="whyus-inner">

            <h2 className='all-heading cen-heading'>Why Choose Mercy Manor Home Care in Surrey</h2>
            <h3 className='subtitle'>Compassionate, reliable, and personalized in-home care for seniors across Surrey, BC</h3>

            <div className="outer-whyus">

              <div className="why-list">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faMapPin} className='usericon whyicon' />
                    <h3>Local Surrey Service</h3>
                    <p className='allp whyp'>Our caregivers are familiar with the needs of families in Surrey and provide care with kindness and respect.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faUserCheck} className='usericon whyicon' />
                    <h3>Care that fits each individual</h3>
                    <p className='allp whyp'>We understand that every person is different. That’s why we create care plans tailored to each client’s daily routine and preferences.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faHouse} className='usericon whyicon' />
                    <h3>Encouraging independence at home</h3>
                    <p className='allp whyp'>Our goal is to help seniors remain active and independent while receiving the assistance they need.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faHandshake} className='usericon whyicon' />
                    <h3>Reliable support families can trust</h3>
                    <p className='allp whyp'>From companionship to daily assistance, our team is committed to dependable and consistent care.</p>
                  </li>



                  <li>
                    <FontAwesomeIcon icon={faUserGroup} className='usericon whyicon' />
                    <h3>Meaningful companionship</h3>
                    <p className='allp whyp'>Beyond physical support, our caregivers offer conversation, emotional support, and companionship.</p>
                  </li>



                </ul>
              </div>

              <div className="whyus-img">
                <img src={whyloc} alt="Trusted, compassionate, and professional in-home care by Mercy Manor" />
              </div>

            </div>




          </div>
        </div>

      </section>
    </div>
  )
}

export default Whysurrey
