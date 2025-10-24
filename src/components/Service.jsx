import React from 'react'
import "./Service.css"



function Service() {

  return (
    <section id='services-section'>


      <div className="container-fluid">

        <h2 className='all-heading cen-heading'>our Services</h2>
        <h3 className='subtitle'>Comprehensive Care for Every Need</h3>

        <div className="service-inner">



          <div className="row main-services">



            <div className="col-4 all-services">

              <img src="./src/assets/Images/ser1.jpeg" alt="" />

              <div className="ser-text">
                <h3>personal care</h3>
                <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                <button className='all-button'>booking</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/ser2.jpg" alt="" />

              <div className="ser-text">
                <h3>home support service</h3>
                <p className='allp serp' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                <button className='all-button'>booking</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/ser3.png" alt="" />

              <div className="ser-text">
                <h3>professional nursing service</h3>
                <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                <button className='all-button'>booking</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/ser1.jpeg" alt="" />


              <div className="ser-text">
                <h3>companionship & recreation</h3>
                <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                <button className='all-button'>booking</button>
              </div>


            </div>
            <div className="col-4 all-services">

              <img src="./src/assets/Images/ser1.jpeg" alt="" />

              <div className="ser-text">
                <h3>hospital recovery care service</h3>
                <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                <button className='all-button'>booking</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/ser1.jpeg" alt="" />

              <div className="ser-text">
                <h3>meal preparation & diet planning</h3>
                <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                <button className='all-button'>booking</button>
              </div>


            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Service
