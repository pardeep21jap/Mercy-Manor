
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
            <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>
            <button className='read-btn'>Read More</button>
          </div>

          <div className='col-4 main-card'>
            <FontAwesomeIcon icon={faUserLock} className='usericon' />
            <h3>Secure & Reliable</h3>
            <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>
            <button className='read-btn'>Read More</button>
          </div>

          <div className='col-4 main-card'>
            <FontAwesomeIcon icon={faPeopleGroup} className='usericon' />
            <h3>Dedicated Team</h3>
            <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>
            <button className='read-btn'>Read More</button>


          </div>




        </div>
      </div>
    </>
  )
}

export default Cards;
