import React from 'react'
import "./Cta.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";  
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";




function Cta() {
  return (
    <div>

      <section id='cta-section'>
        <div className="container">
          <div className="row cta-inner">

<div className="col-6 cta-text">
  <h3>Book a Consultation You’re in Safe Hands</h3>
   

       {/* <ul>
        <li>
          <a href=""> <FontAwesomeIcon icon={faSquareFacebook} className='fbicon' /> </a>
        </li>
         <li>
          <a href=""> <FontAwesomeIcon icon={faSquareInstagram} className='' /> </a>
        </li>
        <li>
          <a href=""> <FontAwesomeIcon icon={faSquareEnvelope} className='mailicon' /> </a>
        </li>
       </ul> */}

</div>

<div className='col-6 cta-buttons'>
  <button className='cta-button'>book appointment   <FontAwesomeIcon icon={faCalendarDays} className='' /></button>
      
</div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Cta;
