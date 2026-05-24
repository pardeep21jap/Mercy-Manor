import React from 'react'
import "./Dementiaincluded.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import medication from '../assets/medication.webp';
import givefood from '../assets/givefood.webp';
import indooractivity from '../assets/indooractivity.webp';
import exercise from '../assets/exercise.webp';

function Dementiaincluded() {
  return (
    <div>
      <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our Dementia Care Services Include</h2>

              <div className="main-services own-dementiaincluded">

                <div className="all-services dementiasser">

                  <img src={medication} alt="Mercy Manor Home Care dementia service helping clients take medications on time" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Medication reminder </h3>
                    <p className='allp serp'>As part of our dementia care services, we provide gentle and timely medication reminders to ensure clients take their prescribed medications consistently and safely, supporting their overall health and well-being.</p>

                  </div>


                </div>

                <div className="all-services dementiasser">

                  <img src={givefood} alt="Assisting seniors with healthy meals and dietary needs at home" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Assisting with diet</h3>
                    <p className='allp serp' >At Mercy Manor, our diet services are supported and supervised by a certified and experienced chef. Through professional oversight and continuous quality monitoring, our staff guarantees that our diet services not only support physical health but also enhance the comfort and satisfaction of our clients.</p>

                  </div>


                </div>

                <div className="all-services dementiasser">

                  <img src={indooractivity} alt="Senior engaging in puzzles and games as part of dementia care activities" />

                  <div className="ser-text innerpage texted noborder">

                    <h3>Indoor recreational activities</h3>
                    <p className='allp serp'>In the context of dementia care, maintaining client engagement and minimizing exposure to potential stressors is paramount. To this end, we provide gentle,
                      stimulating indoor recreational activities—such as reading, puzzles, and
                      interactive games—designed to promote cognitive engagement and emotional
                      well-being
                    </p>

                  </div>


                </div>

                <div className="all-services dementiasser">

                  <img src={exercise} alt="Trained caregiver assisting elderly client with safe physical activity" />


                  <div className="ser-text innerpage texted noborder">

                    <h3>Light exercise</h3>
                    <p className='allp serp'>Engaging in light physical exercise is equally essential in dementia care, as it helps keep the individual active, enhances overall well-being, and supports both physical and cognitive health-Mercy manor team is trained to assist the clients to do light exercise</p>

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

export default Dementiaincluded
