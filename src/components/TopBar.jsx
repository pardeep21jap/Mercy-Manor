import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import './TopBar.css';

function TopBar() {
  return (
    <div className="top-bar-mobile d-lg-none">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-1">
          <div className="top-bar-contact">
            <a href="tel:+16046131246" className="me-2 text-decoration-none" aria-label="Call Us">
              <FontAwesomeIcon icon={faPhone} className='me-1' />
              <span className="contact-text">+1 604 613 1246</span>
            </a>
            <a href="mailto:info@mercymanor.ca" className="text-decoration-none" aria-label="Email Us">
              <FontAwesomeIcon icon={faSquareEnvelope} className='me-1' />
              <span className="contact-text">info@mercymanor.ca</span>
            </a>
          </div>
          <div className="top-bar-social">
            <a href="https://www.facebook.com/profile.php?id=61589532728856" target="_blank" rel="noopener noreferrer" className="me-2" aria-label="Facebook">
              <FontAwesomeIcon icon={faSquareFacebook} className='' />
            </a>
            <a href="https://www.instagram.com/mercymanorhomecarebc/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faSquareInstagram} className='me-1' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;