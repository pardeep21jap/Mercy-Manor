import React from 'react'
import "./Service.css"
import { Link } from "react-router-dom";
import demencare from '../assets/demencare.webp';
import comcare from '../assets/comcare.webp';
import escorting from '../assets/escorting.webp';
import homemaking from '../assets/homemaking.webp';
import mealprep from '../assets/mealprep.webp';
import nursecare from '../assets/nursecare.webp';



function Service() {

  return (
    <section id='services-section'>

      <div className="container">

        <div className="service-inner">
          <h2 className='all-heading cen-heading'>Our services</h2>
          <h3 className='subtitle'>Providing Quality Care With Compassion and Expertise</h3>

          <div className="main-services">

            <div className="all-services">

              <img src={demencare} alt="Mercy Manor Home Care providing dementia home care services" />

              <div className="ser-text innerpage texted noborder">


                <h3>Dementia Care </h3>
                <p className='allp serp'>Dementia care is a specialized type of support designed for individuals living with dementia, including Alzheimer’s disease and other memory-related conditions. It focuses on helping the person maintain safety.</p>

                <Link to="/dementia-care">
                  <button className='all-button servbtn'>Read More...</button>
                </Link>

              </div>


            </div>

            <div className="all-services">

              <img src={comcare} alt="Mercy Manor Health Care offering companion care services in British Columbia" />

              <div className="ser-text innerpage texted noborder">


                <h3>Companion care</h3>
                <p className='allp serp' >At Mercy Manor Health Care, we understand that emotional well-being is just as important as physical health—especially for our elderly clients. Our Companion Care Services are designed to bring warmth, comfort, and meaningful connection. </p>
                <Link to="/companion-care">
                  <button className='all-button servbtn'>Read More...</button>
                </Link>
              </div>


            </div>

            <div className="all-services">

              <img src={escorting} alt="Trusted in-home care escort services in Surrey and Abbotsford" />

              <div className="ser-text innerpage texted noborder">

                <h3>Escorting client to appointments</h3>
                <p className='allp serp'>At Mercy Manor Health Care, we understand that getting to and from appointments can sometimes be challenging for our clients. Our compassionate and trained staff provide escort services to ensure clients attend their medical, therapy.</p>
                <Link to="/escorting-care">
                  <button className='all-button servbtn'>Read More...</button>
                </Link>
              </div>


            </div>

            <div className="all-services">

              <img src={homemaking} alt="Professional home care support for daily chores and housekeeping" />


              <div className="ser-text innerpage texted noborder">

                <h3>Home making</h3>
                <p className='allp serp'> At Mercy Manor Health Care, we understand that a clean, organized, and comfortable home environment plays a vital role in maintaining the overall well-being and independence of our clients.It is especially helpful for seniors, people with disabilities.  </p>
                <Link to="/homemaking">
                  <button className='all-button servbtn'>Read More...</button>
                </Link>
              </div>


            </div>
            <div className="all-services">

              <img src={mealprep} alt="Mercy Manor Health Care providing healthy meal prep for elderly clients" />

              <div className="ser-text innerpage texted noborder">

                <h3>Meal preparation</h3>
                <p className='allp serp'>  At Mercy Manor, our diet services are supported and supervised by a certified and experienced chef. Through professional oversight and continuous quality monitoring, our staff guarantees that our diet services not only support physical health but.</p>
                <Link to="/mealprep">
                  <button className='all-button servbtn'>Read More...</button>
                </Link>
              </div>


            </div>

            <div className="all-services">

              <img src={nursecare} alt="Skilled nursing care for seniors in British Columbia" />

              <div className="ser-text innerpage texted noborder">

                <h3>Nursing Care</h3>
                <p className='allp serp'>At Mercy Manor, we are dedicated to providing high-quality nursing care to meet the unique health needs of every client. Our experienced Registered Nurses (RNs) and Licensed Practical Nurses (LPNs) deliver professional and compassionate services.</p>
                <Link to="/nursing-care">
                  <button className='all-button servbtn'>Read More...</button>
                </Link>
              </div>


            </div>

          </div>


        </div>
      </div>
    </section >
  )
}

export default Service
