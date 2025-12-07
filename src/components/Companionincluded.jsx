import "./Dementiaincluded.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";

function Companionincluded() {
  return (
    <div>
      <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our Companion Care Services Include</h2>

              <div className="row main-services own-dementiaincluded">

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/support.png" alt="" />

                  <div className="ser-text innerpage texted">


                    <h3>Daily Routine Support </h3>
                    <p className='allp serp'>Daily routine support in companion care focuses on helping individuals stay organized, active, and confident throughout their day. This includes non-medical medication reminders to ensure they stay on track with their prescriptions, gentle assistance in following daily schedules, and encouragement to engage in activities that promote physical movement and mental stimulation.</p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/monitoring.png" alt="" />

                  <div className="ser-text innerpage texted">


                    <h3>Safety & Monitoring</h3>
                    <p className='allp serp' >At Mercy Manor, Safety and monitoring in companion care provide individuals with a reassuring and protective presence throughout the day. Caregivers help maintain a secure environment by offering fall-prevention reminders, gentle guidance during movement, and attentive oversight to reduce risks. They also observe and report any changes in behavior, mood, or daily routines to family members, ensuring timely communication and early attention to potential concerns.</p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/household.png" alt="" />

                  <div className="ser-text innerpage texted">

                    <h3>Light Household Assistance</h3>
                    <p className='allp serp'>Light household assistance in companion care helps individuals maintain a clean, comfortable, and well-organized living environment. Caregivers support with light housekeeping tasks such as dusting, tidying up, and doing laundry, ensuring the home remains pleasant and safe. They also assist with meal planning and simple meal preparation to promote healthy eating habits and daily comfort.
                    </p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/Images/transport.png" alt="" />


                  <div className="ser-text innerpage texted">

                    <h3>Transportation & Mobility Support</h3>
                    <p className='allp serp'>Transportation and mobility support in companion care ensures individuals can move safely and stay connected with their community. Caregivers provide reliable escort services to doctor visits, social gatherings, and other appointments, helping clients stay engaged and active outside the home. They also offer gentle, non-medical assistance with walking around the home or outdoors, giving clients the confidence to move safely and comfortably.</p>

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

export default Companionincluded
