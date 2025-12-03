import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";  
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";

function Nursingcareincluded() {
  return (
    <div>
        <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our Nursing care Services Include</h2>

              <div className="row main-services own-dementiaincluded">

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/ser1.jpeg" alt="" />

                  <div className="ser-text innerpage texted">


                    <h3>Vital Signs Monitoring </h3>
                    <p className='allp serp'>Nurses regularly check blood pressure, heart rate, temperature, and other vital signs to monitor the client’s health condition. Early detection of changes helps prevent complications and supports timely medical intervention.</p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/ser2.jpg" alt="" />

                  <div className="ser-text innerpage texted">


                    <h3>Wound Care and Dressing</h3>
                    <p className='allp serp' >At Mercy Manor, Professional nurses provide wound cleaning, dressing changes, and infection prevention, supporting faster recovery and maintaining hygiene standards.</p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/pro3.png" alt="" />

                  <div className="ser-text innerpage texted">

                    <h3>Post-Surgery and Rehabilitation Support</h3>
                    <p className='allp serp'>Clients recovering from surgery or injury receive assistance with mobility, exercises, and recovery routines under professional supervision to ensure safe and effective rehabilitation.
                    </p>
                   
                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/ser1.jpeg" alt="" />


                  <div className="ser-text innerpage texted">

                    <h3>Pain and Symptom Management</h3>
                    <p className='allp serp'>Caregivers assist in tracking pain levels, administering medications, and providing comfort measures, helping clients maintain quality of life.</p>
                    
                  </div>


                </div>


              </div>



            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Nursingcareincluded
