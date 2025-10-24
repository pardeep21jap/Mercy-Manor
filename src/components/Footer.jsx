import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (

    <>

      <section id='footer-section'>
        <div className="container">
          <div className="footer-inner">
            <div className="row footer-main">

              <div className='col-3 mainlogo'>
                <img src="./src/assets/Images/Logo-removebg-.png" alt="" />

                <p className='allp footp'>Providing compassionate, professional nursing care in the comfort of your home. Your health, my priority.</p>
              </div>


              <div className='col-3 mainft'>
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="">Home</a>
                  </li>
                  <li><a href="">About Us</a></li>
                  <li><a href="">Services</a></li>
                  <li><a href="">Booking</a></li>
                  <li><a href="">Blog</a></li>
                  <li><a href="">Contact Us</a></li>
                </ul>
              </div>

              <div className='col-3 mainft'>
                <h4>Contact Us</h4>
                <ul>
                  <li><a href=""> <FontAwesomeIcon icon={faSquarePhone} className='' /> + 1234567890</a>
                  </li>
                  <li><a href=""> <FontAwesomeIcon icon={faSquareEnvelope} className='' /> info@mercyminor.com</a></li>
                  <li><a href=""> <FontAwesomeIcon icon={faClock} className='' /> mon-fri: 8:30am - 5pm</a></li>
                  <li><a href=""> <FontAwesomeIcon icon={faMapPin} className='' /> Address</a></li>

                </ul>
              </div>
              <div className="col-3 mainft">
                <h4>Follow Us</h4>
                <ul className='mediaicons'>
                  <li>
                    <a href=""><FontAwesomeIcon icon={faSquareFacebook} className='fbicon' /></a>
                  </li>
                  <li>
                    <a href=""><FontAwesomeIcon icon={faSquareInstagram} className='' /></a>
                  </li>
                  <li>
                    <a href=""><FontAwesomeIcon icon={faSquareEnvelope} className='mailicon' /></a>
                  </li>
                </ul>
              </div>

            </div>
            <p className='rightp'>© 2024 Mercy Minor. All rights reserved.</p>
          </div>
        </div>

      </section>

    </>

  )
}

export default Footer
