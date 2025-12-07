import React from 'react'
import "./Service.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingWithCane } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBowlFood } from "@fortawesome/free-solid-svg-icons";
import { faUserNurse } from "@fortawesome/free-solid-svg-icons";



function Service() {

  return (
    <section id='services-section'>

      <div className="container">

        <div className="service-inner">
          <h2 className='all-heading cen-heading'>Our services</h2>
          <h3 className='subtitle'>Providing Quality Care With Compassion and Expertise</h3>


          <div className="row main-services">



            <div className="col-4 all-services">

              <img src="./src/assets/Images/demencare.png" alt="" />

              <div className="ser-text innerpage texted">


                <h3>Dementia Care </h3>
                <p className='allp serp'>Dementia care is a specialized type of support designed for individuals living with dementia, including Alzheimer’s disease and other memory-related conditions. It focuses on helping the person maintain safety.</p>
                <button className='all-button servbtn'>Read More...</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/comcare.png" alt="" />

              <div className="ser-text innerpage texted">


                <h3>Companion care</h3>
                <p className='allp serp' >At Mercy Manor Health Care, we understand that emotional well-being is just as important as physical health—especially for our elderly clients. Our Companion Care Services are designed to bring warmth, comfort, and meaningful connection. </p>
                <button className='all-button servbtn'>Read More...</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/escorting.png" alt="" />

              <div className="ser-text innerpage texted">

                <h3>Escorting client to appointments</h3>
                <p className='allp serp'>At Mercy Manor Health Care, we understand that getting to and from appointments can sometimes be challenging for our clients. Our compassionate and trained staff provide escort services to ensure clients attend their medical, therapy.</p>
                <button className='all-button servbtn'>Read More...</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/homemaking.png" alt="" />


              <div className="ser-text innerpage texted">

                <h3>Home making</h3>
                <p className='allp serp'> At Mercy Manor Health Care, we understand that a clean, organized, and comfortable home environment plays a vital role in maintaining the overall well-being and independence of our clients.It is especially helpful for seniors, people with disabilities.  </p>
                <button className='all-button servbtn'>Read More...</button>
              </div>


            </div>
            <div className="col-4 all-services">

              <img src="./src/assets/Images/mealprep.png" alt="" />

              <div className="ser-text innerpage texted">

                <h3>Meal preparation</h3>
                <p className='allp serp'>  At Mercy Manor, our diet services are supported and supervised by a certified and experienced chef. Through professional oversight and continuous quality monitoring, our staff guarantees that our diet services not only support physical health but.</p>
                <button className='all-button servbtn'>Read More...</button>
              </div>


            </div>

            <div className="col-4 all-services">

              <img src="./src/assets/Images/nursecare.png" alt="" />

              <div className="ser-text innerpage texted">

                <h3>Nursing Care</h3>
                <p className='allp serp'>At Mercy Manor, we are dedicated to providing high-quality nursing care to meet the unique health needs of every client. Our experienced Registered Nurses (RNs) and Licensed Practical Nurses (LPNs) deliver professional and compassionate services.</p>
                <button className='all-button servbtn'>Read More...</button>
              </div>


            </div>

          </div>


        </div>
      </div>
    </section>
  )
}

export default Service
