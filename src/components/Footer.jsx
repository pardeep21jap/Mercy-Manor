import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
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
                <img src="./src/assets/Logo.png" alt="" />

                <p className='allp footp'>Mercy Manor Health Care Limited, based in Surrey, British Columbia, is a comprehensive home health service provider founded by Deepa Cheriyan, Pawandeep Kaur Sangar, and Manju Sebastian. Together, this dedicated team—comprising two registered nurses and a nurse currently. </p>
              </div>


              <div className='col-3 mainft'>
                <h4>Quick Links</h4>
                <ul>

                  <li><Link to="/">Home</Link>
                  </li>
                  <li><Link to="/AboutUs">About Us</Link></li>
                  <li><Link to="/Services">Services</Link></li>
                  <li><a href="/booking">Booking</a></li>
                  <li><a href="/blog">Blog</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
              </div>

              <div className='col-3 mainft'>
                <h4>Contact Us</h4>
                <ul>
                  <li><a href=""> <FontAwesomeIcon icon={faPhone} className='' /> + 604 613 1245</a>
                  </li>
                  <li><a href=""> <FontAwesomeIcon icon={faSquareEnvelope} className='' /> info@mercymanor.com</a></li>
                  <li><a href=""> <FontAwesomeIcon icon={faClock} className='' /> mon-fri: 8:30am - 5pm</a></li>
                  <li><a href=""> <FontAwesomeIcon icon={faMapPin} className='' /> 113, 13900, Hyland Road, Surrey, BC, V3W 1K4</a></li>

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
            <p className='rightp'>© 2025 Mercy Minor. All rights reserved.</p>
          </div>
        </div>

      </section>

    </>

  )
}

export default Footer
