import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (

    <>

      <section id='footer-section'>
        <div className="container">
          <div className="footer-inner">
            <div className="row footer-main">

              <div className='col-lg-3 col-sm-12 col-md-12 col-xs-12 mainlogo'>
                <Link to="/" onClick={scrollToTop}>
                  <img src={Logo} alt="Mercy Manor Home Care – trusted home care provider in Surrey, Abbotsford, Chilliwack, and Agassiz" />
                </Link>

                <p className='allp footp'>Mercy Manor Health Care Limited, based in Surrey, British Columbia, is a comprehensive home health service provider founded by a team of registered nurses. </p>
              </div>


              <div className='col-lg-3 col-sm-12 col-md-12 col-xs-12 mainft'>
                <h4>Quick Links</h4>
                <ul>

                  <li><Link to="/" onClick={scrollToTop}>Home</Link>
                  </li>
                  <li><Link to="/aboutUs" onClick={scrollToTop}>About Us</Link></li>
                  <li><Link to="/Services" onClick={scrollToTop}>Services</Link></li>
                  <li><Link to="/home-care-abbotsford" onClick={scrollToTop}>locations</Link></li>
                  <li><Link to="/booking" onClick={scrollToTop}>Booking</Link></li>
                  <li><Link to="/blogs" onClick={scrollToTop}>Blogs</Link></li>
                  <li><Link to="/contact" onClick={scrollToTop}>Contact Us</Link></li>
                </ul>
              </div>

              <div className='col-lg-3 col-sm-12 col-md-12 col-xs-12 mainft'>
                <h4>Contact Us</h4>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className='' />
                    <a href="tel:+16046131245">
                      +1 604 613 1245
                    </a>

                  </li>

                  <li><FontAwesomeIcon icon={faClock} className='' /> mon-fri: 8:30am - 5pm</li>
                  <li className='maillistspace'><FontAwesomeIcon icon={faSquareEnvelope} className='' />
                    <a href="mailto:info@mercymanor.ca?subject=Home Care Inquiry">
                      info@mercymanor.ca
                    </a>
                  </li>



                </ul>
              </div>
              <div className="col-lg-3 col-sm-12 col-md-12 col-xs-12 mainft">
                <h4>Follow Us</h4>
                <ul className='mediaicons'>
                  <li>
                    <a href="https://www.facebook.com/profile.php?id=61589532728856"><FontAwesomeIcon icon={faSquareFacebook} className='fbicon' /></a>
                  </li>
                  <li>

                    <a href="https://www.instagram.com/mercymanorhomecarebc/" >  <FontAwesomeIcon icon={faSquareInstagram} className='' />
                    </a>

                  </li>
                  <li>
                    <a href=""><FontAwesomeIcon icon={faSquareEnvelope} className='mailicon' /></a>
                  </li>
                </ul>
              </div>

            </div>
            <p className='rightp'>© 2026 Mercy Minor. All rights reserved.</p>
          </div>
        </div>

      </section>

    </>

  )
}

export default Footer
