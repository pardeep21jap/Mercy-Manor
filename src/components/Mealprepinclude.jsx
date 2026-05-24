import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";

import menu from '../assets/menu.webp';
import foodprep from '../assets/foodprep.webp';
import dietplan from '../assets/dietplan.webp';
import store from '../assets/store.webp';

function Mealprepinclude() {
  return (
    <div>
      <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our meal Prepare Services Include</h2>

              <div className="row main-services own-dementiaincluded">

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={menu} alt="Caregiver helping senior with healthy meal planning for balanced nutrition" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Meal Planning </h3>
                    <p className='allp serp'>Caregivers assist in planning nutritious and balanced meals based on individual dietary needs, preferences, and medical requirements. Thoughtful meal planning ensures clients enjoy variety and maintain a healthy diet.</p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={foodprep} alt="Caregiver preparing fresh nutritious meals in a senior care kitchen" />

                  <div className="ser-text innerpage texted noborder">


                    <h3>Cooking and Meal Preparation</h3>
                    <p className='allp serp' >At Mercy Manor, Our team handles the preparation of breakfast, lunch, dinner, and snacks using fresh, wholesome ingredients. Meals are cooked safely, ensuring taste, nutrition, and proper portion sizes.</p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={dietplan} alt="Caregiver assisting senior with diabetic and low sodium diet planning" />

                  <div className="ser-text innerpage texted noborder">

                    <h3>Special Diet Accommodation</h3>
                    <p className='allp serp'>We cater to specific dietary needs such as diabetic-friendly, low-sodium, soft foods, or allergy-sensitive meals. This helps clients maintain their health without sacrificing flavor or variety.
                    </p>

                  </div>


                </div>

                <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 all-services dementiasser">

                  <img src={store} alt="Caregiver storing portioned healthy meals in refrigerator for seniors" />


                  <div className="ser-text innerpage texted noborder">

                    <h3>Portioning and Storage</h3>
                    <p className='allp serp'>Leftovers are safely stored and properly labeled, so clients have easy access to meals later, reducing food waste and maintaining freshness.</p>

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

export default Mealprepinclude
