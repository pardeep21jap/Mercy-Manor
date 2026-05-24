
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

function Surreycta() {
  return (
    <div>
      <section id='cta-section'>
        <div className="container">
          <div className="row cta-inner">

            <div className="col-lg-6 col-xs-12 col-sm-12 col-md-12 cta-text">
              <h2>Contact Mercy Manor Home Care in Surrey BC </h2>




            </div>

            <div className='col-lg-6 col-xs-12 col-sm-12 col-md-12 cta-buttons'>
              <Link to="/Booking">
                <button className='cta-button'>book appointment   <FontAwesomeIcon icon={faCalendarDays} className='' /></button>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Surreycta
