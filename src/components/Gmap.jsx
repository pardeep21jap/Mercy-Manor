import React from 'react'
import map from '../assets/map.png';
import "./Gmap.css"
function Gmap() {


  return (
    <div>
      <section id='gmap-section'>
        <div className="container">
          <div className='gmap-outer'>
            <h2 className='all-heading'>Areas We Serve</h2>
            <h3 className='subtitle'>Supporting your loved ones across the communities we serve</h3>

            <div className='row area-content'>
              <div className='col-8 gmap-image'>
                <img src={map} alt="Mercy Manor Home Care providing professional home care services in Surrey, BC" />
              </div>
              <div className='col-4 serve-area'>
                <ul>
                  <li>
                    <h4>Surrey</h4>
                    <p>Comprehensive home care services in Surrey, including companionship, personal care, and specialized support for seniors.</p>
                  </li>
                  <li>
                    <h4 className="blue-abbotsford">Abbotsford</h4>
                    <p>Trusted home care in Abbotsford, offering personalized care plans, companionship, and assistance with daily living activities.</p>
                  </li>
                  <li>
                    <h4 className="red-chilli">Chilliwack</h4>
                    <p>Reliable home care services in Chilliwack, providing compassionate support for seniors with companionship, personal care, and more.</p>
                  </li>
                  <li>
                    <h4 className="green-agga">Agassiz</h4>
                    <p>Dedicated home care in Agassiz, offering personalized care plans, companionship, and assistance with daily living activities for seniors.</p>
                  </li>
                </ul>
              </div>

            </div>





            {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1v8m560MAd1UscOue7zUWXJMj_W1ZHDA&ehbc=2E312F&noprof=1" width="100%" height="700"></iframe> */}

          </div>
        </div>
      </section>


    </div>
  )
}

export default Gmap
