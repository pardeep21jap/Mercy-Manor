import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";

function Homemakingincluded() {
  return (
    <div>
       <section id='service-included'>
        <div className="container">
          <div className="outer-service-included">
            <div className="inner-service-included">
              <h2 className='all-heading cen-heading'>Our Home Making Services Include</h2>

              <div className="row main-services own-dementiaincluded">

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/housekeeping.png" alt="" />

                  <div className="ser-text innerpage texted">


                    <h3>Light Housekeeping</h3>
                    <p className='allp serp'>Our caregivers help maintain a clean and comfortable living space by handling light housekeeping tasks such as dusting, sweeping, mopping, and general tidying. This ensures a pleasant and safe home environment.</p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/laundry.png" alt="" />

                  <div className="ser-text innerpage texted">


                    <h3>Laundry & Linen Care</h3>
                    <p className='allp serp' >At Mercy Manor, We take care of washing, drying, folding, and putting away laundry, as well as changing bed linens regularly. This keeps clothing and bedding fresh, clean, and ready for daily use.</p>

                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/trash.png" alt="" />

                  <div className="ser-text innerpage texted">

                    <h3>Trash & Recycling Removal</h3>
                    <p className='allp serp'>Caregivers assist with taking out trash and recycling on schedule, helping maintain cleanliness and preventing odors or clutter from building up.
                    </p>
                   
                  </div>


                </div>

                <div className="col-3 all-services dementiasser">

                  <img src="./src/assets/shopping.png" alt="" />


                  <div className="ser-text innerpage texted">

                    <h3>Grocery Shopping & Errands</h3>
                    <p className='allp serp'>Our team can handle grocery shopping, picking up prescriptions, and running essential errands. This ensures clients always have what they need without the stress of leaving home.</p>
                    
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

export default Homemakingincluded
