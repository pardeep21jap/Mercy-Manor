import React from 'react'
import "./Service.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faPills } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faChessBoard } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";
import "./responsive.css"





function Allservices() {
  return (
    <div>

      <section id='services-section'>

        <div className="container">

          <div className="service-inner">


            <div className="row main-services">

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faBrain} className='service-icons' />
                  </div>
                  <h3>Dementia Care </h3>
                  <p className='allp serp'>s on helping the person maintain safety </p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faPills} className='service-icons' />
                  </div>
                  <h3>Medication reminder </h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faUtensils} className='service-icons' />
                  </div>
                  <h3>Assisting with diet </h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>
              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faChessBoard} className='service-icons' />
                  </div>
                  <h3>Indoor recreational activities </h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faDumbbell} className='service-icons' />
                  </div>
                  <h3>Light Exercise </h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser2.jpg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faHandshake} className='service-icons' />
                  </div>
                  <h3>Companion care</h3>
                  <p className='allp serp' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/pro3.png" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faPersonWalkingWithCane} className='service-icons' />
                  </div>
                  <h3>Escorting client to appointments</h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />


                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faHouse} className='service-icons' />
                  </div>
                  <h3>Home making</h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>
              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faBowlFood} className='service-icons' />
                  </div>
                  <h3>Meal preparation</h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

              <div className="col-4 all-services">

                <img src="./src/assets/Images/ser1.jpeg" alt="" />

                <div className="ser-text innerpage texted">
                  <div className="servicehover">
                    <FontAwesomeIcon icon={faUserNurse} className='service-icons' />
                  </div>
                  <h3>Nursing Care</h3>
                  <p className='allp serp'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy</p>
                  <button className='all-button servbtn'>Read More...</button>
                </div>


              </div>

            </div>


          </div>
        </div>
      </section>

    </div>
  )
}

export default Allservices
