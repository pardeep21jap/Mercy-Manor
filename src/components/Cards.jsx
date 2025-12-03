
import './Cards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
function Cards() {


  return (
    <>

      <div className="container">


        <div className='row outer-card'>

          <div className='col-4 main-card'>
            <FontAwesomeIcon icon={faPersonRunning} className='usericon' />
            <h3>Active Living</h3>
            <p className='allp'>Stay healthier and more energetic with support designed to keep you moving. We help you maintain a balanced lifestyle through wellness guidance, routine care, and habits that promote daily activity and long-term vitality.</p>
           
          </div>

          <div className='col-4 main-card'>
            <FontAwesomeIcon icon={faUserLock} className='usericon' />
            <h3>Secure & Reliable</h3>
            <p className='allp'>Your safety and trust are our top priorities. From protected health data to dependable services, we ensure every interaction is handled with professionalism, transparency, and complete reliability.</p>
           
          </div>

          <div className='col-4 main-card'>
            <FontAwesomeIcon icon={faPeopleGroup} className='usericon' />
            <h3>Dedicated Team</h3>
            <p className='allp'>Our experienced and compassionate professionals are committed to your well-being. With personalized attention and round-the-clock support, our team works tirelessly to deliver exceptional care you can count on.</p>
           

          </div>




        </div>
      </div>
    </>
  )
}

export default Cards;
