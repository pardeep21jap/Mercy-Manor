import React from 'react'
import "./Contactinfo.css"
import "./Slotpara.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapPin } from "@fortawesome/free-solid-svg-icons";


function Contactinfo() {
  return (
    <div>
      <section id='coninfo-section'>
        <div className="container">
          <div className="coninfo-outer">
            <div className="row coninfo-inner">

              <div className="col-6 contact-icons">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className='con-icon' />
                    <h4>Call Us</h4>
                    <span>+1234567890</span>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className='con-icon' />
                    <h4>E - Mail</h4>
                    <span>info@mercy.com</span>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faMapPin} className='con-icon' />
                    <h4>Address</h4>
                    <span>Address</span>
                  </li>
                </ul>
              </div>
              <div className="col-6 contact-form">
                <form>
                  <ul>
                    <li>
                      <div classname="form-group own-form-group">
                        <label className='ownlabel' for="exampleInputFirstName">First Name</label>
                        <input type="text" class="form-control" placeholder=""></input>
                      </div>
                    </li>
                    <li>
                      <div classname="form-group own-form-group">
                        <label for="exampleInputLastName">Last Name</label>
                        <input type="text" class="form-control" placeholder=""></input>
                      </div>
                    </li>
                    <li>
                      <div classname="form-group own-form-group">
                        <label for="inputNumber">Phone Number</label>
                        <input type="number" class="form-control" id="inputNumber" placeholder=""></input>
                      </div>
                    </li>
                    <li>
                      <div classname="form-group">
                        <label for="exampleFormControlInput1">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder=""></input>
                      </div>
                    </li>

                  </ul>

                  <div classname="form-group own-form-group own-textarea">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea classname="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                  </div>

                  <button className='all-button'>Submit</button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contactinfo