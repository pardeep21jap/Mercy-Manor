import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faHandHoldingHand, faHouse, faUserNurse, faHeart, faClock } from "@fortawesome/free-solid-svg-icons";
import whyloc from '../assets/whyloc.png';
import "./Whysurrey.css"
import "./Whyus.css"

function Whyabbotsford() {
  return (
    <div>
      <section id='why-us-section'>
        <div className="container">
          <div className="whyus-inner">

            <h2 className='all-heading cen-heading'>Why Choose Mercy Manor Home Care in Abbotsford</h2>
            <h3 className='subtitle'>Compassionate, reliable, and personalized in-home care for seniors across Abbotsford, BC</h3>

            <div className="outer-whyus">

              <div className="why-list">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHeart} className='usericon whyicon' />
                    <h3>Care built on compassion and respect</h3>
                    <p className='allp whyp'>We believe seniors deserve to be treated with dignity, patience, and kindness every day.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faHandHoldingHand} className='usericon whyicon' />
                    <h3>Support for everyday living</h3>
                    <p className='allp whyp'>Our caregivers help with daily activities such as meal preparation, light housekeeping, and personal care.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faHouse} className='usericon whyicon' />
                    <h3>Helping seniors stay in familiar surroundings</h3>
                    <p className='allp whyp'>Remaining at home allows seniors to feel safe, comfortable, and connected to their community.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faClock} className='usericon whyicon' />
                    <h3>Flexible care options for families</h3>
                    <p className='allp whyp'>Whether care is needed occasionally or regularly, our services can be adjusted to meet changing needs.</p>
                  </li>



                  <li>
                    <FontAwesomeIcon icon={faUserNurse} className='usericon whyicon' />
                    <h3>A team families can depend on</h3>
                    <p className='allp whyp'>We work closely with families to ensure their loved ones receive the attention and support they deserve.</p>
                  </li>


                </ul>
              </div>

              <div className="whyus-img">
                <img src={whyloc} alt="Trusted, compassionate, and professional in-home care by Mercy Manor" />
              </div>

            </div>




          </div>
        </div>

      </section>
    </div>
  )
}

export default Whyabbotsford
