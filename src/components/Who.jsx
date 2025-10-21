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
              <img src="./src/assets/Images/who1.jpeg" alt="" />
            </div>
            <div className="who-text col-6">
              <h2>About Us</h2>

              <p className='allp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy.</p>


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
