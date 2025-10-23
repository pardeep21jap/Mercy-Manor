import React from 'react'
import "./Cta.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";



function Cta() {
  return (
    <div>

      <section id='cta-section'>
        <div className="container-fluid">
          <div className="cta-inner">

<div className="cta-text">
  <h3>Don’t wait to feel better</h3>
    <p>Your health and comfort matter most. Whether you need support recovering from illness, managing chronic conditions, or simply maintaining your wellbeing, I’m here to help.</p> 
     <button className='all-button'>book appointment </button>
       <button className='all-button'>our services</button>

       <ul>
        <li>
          <a href=""> <FontAwesomeIcon icon={faSquareFacebook} className='fbicon' /> </a>
        </li>
         <li>
          <a href=""> <FontAwesomeIcon icon={faSquareInstagram} className='' /> </a>
        </li>
        <li>
          <a href=""> <FontAwesomeIcon icon={faSquareEnvelope} className='mailicon' /> </a>
        </li>
       </ul>
</div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Cta;
