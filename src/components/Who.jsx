import './Who.css'

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import about1 from '../assets/about1.webp';
function Who() {


  return (
    <>
      <section id='who-section'>

        <div className="container">

          <div className='row outer-who'>
            <div className="who-img col-lg-6 col-xs-12 col-sm-12 col-md-12">
              <img src={about1} alt="Personalized home care services for seniors and families in BC" />
            </div>
            <div className="who-text col-lg-6 col-xs-12 col-sm-12 col-md-12">
              <h2 className='all-heading'>About Us</h2>
              <h3 className='subtitle'>Your Health Our Mission</h3>
              <p className='allp'>Mercy Manor Health Care Limited is a comprehensive home health care provider serving the communities of Surrey, Abbotsford, Chilliwack, and Agassiz in British Columbia. Founded by a team of registered nurses, the organization is committed to delivering professional, compassionate, and high-quality care tailored to the needs of individuals and families in their homes. </p>


              <div className="blue-div">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHeart} className='usericon' />
                    <h4>personal care<br></br> services</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCertificate} className='usericon' />
                    <h4>professional<br></br> expert</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className='usericon' />
                    <h4>reach us<br></br> any time</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCertificate} className='usericon' />
                    <h4>Expertise in dementia<br></br> care</h4>
                  </li>

                </ul>

              </div>

              <Link to="/aboutUs">
                <button className='all-button bluedivbtn'>Read more...</button>
              </Link>


            </div>



          </div>
        </div>
      </section>
    </>
  )
}

export default Who;
