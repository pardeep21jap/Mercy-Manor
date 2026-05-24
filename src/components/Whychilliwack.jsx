import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faBrain, faUser, faPersonWalking, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faClipboardList } from "@fortawesome/free-solid-svg-icons";
import whyloc from '../assets/whyloc.png';

function Whychilliwack() {
  return (
    <div>
      <section id='why-us-section'>
        <div className="container">
          <div className="whyus-inner">

            <h2 className='all-heading cen-heading'>Why Choose Mercy Manor Home Care in Chilliwack</h2>
            <h3 className='subtitle'>Compassionate, reliable, and personalized in-home care for seniors across Chilliwack, BC</h3>

            <div className="outer-whyus">

              <div className="why-list">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faUser} className='usericon whyicon' />
                    <h3>Personalized care for every client</h3>
                    <p className='allp whyp'>We take time to understand each client’s needs, lifestyle, and preferences.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faBrain} className='usericon whyicon' />
                    <h3>Specialized support for memory care</h3>
                    <p className='allp whyp'>Our caregivers are experienced in assisting individuals living with Dementia, offering patient and understanding support.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faPersonWalking} className='usericon whyicon' />
                    <h3>Encouraging an active lifestyle</h3>
                    <p className='allp whyp'>We help seniors stay engaged with daily activities, hobbies, and social interaction.</p>
                  </li>

                  <li>
                    <FontAwesomeIcon icon={faUserGroup} className='usericon whyicon' />
                    <h3>Companionship that makes a difference</h3>
                    <p className='allp whyp'>Our caregivers build positive relationships with clients, helping reduce loneliness and isolation.</p>
                  </li>



                  <li>
                    <FontAwesomeIcon icon={faHeart} className='usericon whyicon' />
                    <h3>Peace of mind for families</h3>
                    <p className='allp whyp'>Families can feel confident knowing their loved ones are receiving thoughtful and attentive care.</p>
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

export default Whychilliwack
