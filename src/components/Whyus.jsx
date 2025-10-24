import React from 'react'

import "./Whyus.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";


function Whyus() {
  return (



    <section id='why-us-section'>
      <div className="container">
        <div className="whyus-inner">

          <h2 className='all-heading cen-heading'>why mercy Minor</h2>
  <h3 className='subtitle'>Your Health Deserves the Best — Here’s Why</h3>

          <div className="row outer-whyus">

            <div className="col-6 why-list">
              <ul>
                <li>
                  <FontAwesomeIcon icon={faUserCheck} className='usericon whyicon' />
                  <h3>Trust and professionalism</h3>
                  <p className='allp whyp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faUserCheck} className='usericon whyicon' />
                  <h3>Personalized care</h3>
                  <p className='allp whyp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faUserCheck} className='usericon whyicon' />
                  <h3>Flexible appointment times</h3>
                  <p className='allp whyp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>

                <li>
                  <FontAwesomeIcon icon={faUserCheck} className='usericon whyicon' />
                  <h3>Certified & trained staff</h3>
                  <p className='allp whyp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </li>


              </ul>
            </div>

            <div className="col-6 whyus-img">
              <img src="./src/assets/Images/Hero-Image-Collage.png" alt="" />
            </div>

          </div>




        </div>
      </div>

    </section>
  )
}

export default Whyus
