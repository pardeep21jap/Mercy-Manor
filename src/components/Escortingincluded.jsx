import React from 'react'
import travel from '../assets/travel.png';
import appointment from '../assets/appointment.webp';
import outing from '../assets/outing.webp';
import peace from '../assets/peace.webp';

function Escortingincluded() {
  return (
    <div>
      <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our Escorting Clients Services Include</h2>

              <div className="row main-services own-dementiaincluded">



                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={appointment} alt="Caregiver helping senior with medical appointment support and escort service at clinic" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Appointment Support</h3>
                    <p className='allp serp' >At Mercy Manor, Appointment support in escorting care ensures that clients arrive on time and remain comfortable throughout their visits. Caregivers assist with check-ins, help manage paperwork, and provide guidance navigating medical offices or other facilities as needed.</p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={outing} alt="Caregiver walking with elderly client outdoors providing companionship and escort care" />

                  <div className="ser-text innerpage texted noborder">

                    <h3>Companionship During Outings</h3>
                    <p className='allp serp'>Safety and peace of mind are key aspects of escorting care, giving both clients and their families confidence during travel. Caregivers closely monitor clients for any potential risks, provide assistance when needed, and stay attentive throughout the journey and at destinations.
                    </p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={peace} alt="Caregiver assisting senior patient in hospital room ensuring safety and comfort" />


                  <div className="ser-text innerpage texted noborder">

                    <h3>Safety & Peace of Mind</h3>
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

export default Escortingincluded
