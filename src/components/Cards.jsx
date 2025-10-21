
import './Cards.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";

function Cards() {


  return (
    <>

      <div className='outer-card'>

        <div className='main-card'>
          <FontAwesomeIcon icon={faUserCheck} className='usericon' />
          <h3>Certified & trained staff</h3>
          <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>
          <button>Read More</button>
        </div>

        <div className='main-card'>
          <FontAwesomeIcon icon={faUserCheck} className='usericon' />
          <h3>24/7 support</h3>
          <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>
          <button>Read More</button>
        </div>

        <div className='main-card'>
          <FontAwesomeIcon icon={faUserCheck} className='usericon' />
          <h3>Affordable and flexible plans</h3>
          <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>
          <button>Read More</button>


        </div>

      </div>
    </>
  )
}

export default Cards;
