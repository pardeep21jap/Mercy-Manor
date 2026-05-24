import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";


import check from '../assets/check.webp';
import wound from '../assets/wound.webp';
import surgery from '../assets/surgery.webp';
import pain from '../assets/pain.webp';


function Nursingcareincluded() {
  return (
    <div>
      <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our Nursing care Services Include</h2>

              <div className="row main-services own-dementiaincluded">

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={check} alt="Home care nurse performing health assessment and checking vital signs for senior patient" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Assessment </h3>
                    <p className='allp serp'>  The assessment includes:<br></br>
                      . Review of medical history and current condition.<br></br>
                      . Checking vital signs.<br></br>
                      . Medication and treatment review.<br></br>
                      . Mobility and fall-risk evaluation.<br></br>
                      . Personal care and daily living needs.<br></br>
                      . Nutrition and hydration status.<br></br>
                      . Home safety check.<br></br>
                      . Emotional and cognitive well-being.<br></br>
                      . Family and caregiver support.<br></br>

                      After the assessment, we develop a personalized care plan that clearly outlines the level of care, type of services, visit schedule, and any special nursing or therapy needs.This ensure client receives the right support from the very first day.
                    </p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={wound} alt="Home care nurse providing wound dressing care for senior patient to support healing" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Dressing Care (Wound Care)</h3>
                    <p className='allp serp' >Our Dressing Care service provides professional treatment and monitoring of wounds to promote healing and prevent infection. All wound care is performed by qualified nurses using sterile techniques and medical-grade supplies.

                      We provide care for:
                      1.  Surgical wounds
                      2.	Pressure sores (bed sores)
                      3.	Diabetic foot wounds
                      4.	Burns and skin injuries
                      5.	Chronic or slow-healing wounds

                      Our nurses assess the wound, clean it properly, apply the correct dressing, and monitor for signs of infection or complications. We also educate clients and families on proper wound care and healing.</p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={surgery} alt="Nurse assisting senior patient with post surgery recovery and rehabilitation support at home" />

                  <div className="ser-text innerpage texted noborder">

                    <h3>Post-Surgery and Rehabilitation Support</h3>
                    <p className='allp serp'>Our Post-Surgery and Rehabilitation Support services are designed to help clients recover safely and comfortably at home after hospital discharge. We provide professional nursing care, personal support, and rehabilitation assistance to promote healing, prevent complications, and restore independence. As part of post-surgical and long-term recovery, we provide professional care for clients with ostomies or urinary catheters. Our nurses ensure safe, hygienic, and comfortable management. Our goal is to help every client heal with dignity, comfort, and confidence in their own home.
                    </p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={pain} alt="Home care nurse helping senior patient manage pain and symptoms during recovery" />


                  <div className="ser-text innerpage texted noborder">

                    <h3>Pain and Symptom Management</h3>
                    <p className='allp serp'>Our Pain and Symptom Management services provide professional nursing care to help clients remain comfortable and maintain quality of life while living at home. We focus on relieving pain, managing symptoms, and supporting both the client and their family with compassionate, skilled care.
                      We work closely with doctors and families to ensure pain and symptoms are controlled safely, allowing clients to live with dignity, comfort, and peace at home.</p>

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
