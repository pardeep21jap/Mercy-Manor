import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faUserCheck, faPeopleGroup, faPeopleRoof, faHouse, faHeart, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import whyloc from '../assets/whyloc.png';
function Whyagassiz() {
  return (
    <div>
      <section id='why-us-section'>
        <div className="container">
          <div className="whyus-inner">

            <h2 className='all-heading cen-heading'>Why Choose Mercy Manor Home Care in Agassiz</h2>
            <h3 className='subtitle'>Compassionate, reliable, and personalized in-home care for seniors across Agassiz, BC</h3>

            <div className="outer-whyus">

              <div className="why-list">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPeopleGroup} className='usericon whyicon' />
                    <h3>Community-focused home care</h3>
                    <p className='allp whyp'>We are proud to serve seniors and families in the Agassiz area with dedicated in-home care.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faUserCheck} className='usericon whyicon' />
                    <h3>One-on-one personalized attention</h3>
                    <p className='allp whyp'>Our caregivers provide focused support tailored to each individual’s needs.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faHouse} className='usericon whyicon' />
                    <h3>Helping seniors stay comfortable at home</h3>
                    <p className='allp whyp'>We assist with everyday tasks so seniors can continue living in a familiar environment.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faHeart} className='usericon whyicon' />
                    <h3>Respectful and supportive care</h3>
                    <p className='allp whyp'>Every client is treated with patience, kindness, and understanding.</p>
                  </li>



                  <li>
                    <FontAwesomeIcon icon={faPeopleRoof} className='usericon whyicon' />
                    <h3>Support for both seniors and families</h3>
                    <p className='allp whyp'>Our goal is to make daily life easier for both clients and their loved ones.</p>
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

export default Whyagassiz
