import './Who.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCheck } from "@fortawesome/free-solid-svg-icons";
function Who() {


  return (
    <>
      <section id='who-section'>


        <div className="container">


          <div className='row outer-who'>
            <div className="who-img col-6">
              <img src="./src/assets/Images/about2.png" alt="" />
            </div>
            <div className="who-text col-6">
              <h2 className='all-heading'>About Us</h2>
              <h3 className='subtitle'>Your Health Our Mission</h3>
              <p className='allp'>Mercy Manor Health Care Limited, based in Surrey, British Columbia, is a comprehensive home health service provider founded by Deepa Cheriyan, Pawandeep Kaur Sangar, and Manju Sebastian. Together, this dedicated team—comprising two registered nurses and a nurse currently in the process of obtaining her BC license—delivers holistic, client-centered care with a strong focus on ICBC clients and individuals in need of in-home health and companion services. </p>


              <div className="blue-div">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUserCheck} className='usericon' />
                    <h4>20 years of excellence</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUserCheck} className='usericon' />
                    <h4>professional expert</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUserCheck} className='usericon' />
                    <h4>personal care services</h4>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faUserCheck} className='usericon' />
                    <h4>reach us any time</h4>
                  </li>
                </ul>

              </div>
              <button className='all-button bluedivbtn'>booking</button>
            </div>



          </div>
        </div>
      </section>
    </>
  )
}

export default Who;
