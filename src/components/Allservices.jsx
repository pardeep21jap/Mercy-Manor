import React from 'react'
import "./Allservices.css"
import "./Service.css"
import { Link } from "react-router-dom";
import indooractivity from '../assets/indooractivity.webp';
import support from '../assets/support.webp';
import appointment from '../assets/appointment.webp';
import housekeeping from '../assets/housekeeping.webp';
import store from '../assets/store.webp';
import wound from '../assets/wound.webp';





function Allservices() {
  return (
    <div>

      <section id='services-section'>

        <div className="container">

          <div className="service-inner">


            <div className="main-services">

              <div className="all-services">

                <img src={indooractivity} alt="Mercy Manor Home Care dementia support for seniors living at home" />

                <div className="ser-text innerpage texted noborder">

                  <h3>Dementia Care </h3>
                  <p className='allp serp'>Dementia care is a specialized type of support designed for individuals living with dementia, including Alzheimer’s disease and other memory-related conditions. </p>
                  <Link to="/dementia-care"> <button className='all-button servbtn'>Read More...</button> </Link>
                </div>


              </div>

              <div className="all-services">

                <img src={support} alt="Companion care services for seniors by Mercy Manor Home Care" />

                <div className="ser-text innerpage texted noborder">

                  <h3>Companion care </h3>
                  <p className='allp serp'>At Mercy Manor Health Care, we understand that emotional well-being is just as important as physical health—especially for our elderly clients. </p>
                  <Link to="/companion-care"> <button className='all-button servbtn'>Read More...</button> </Link>
                </div>


              </div>

              <div className="all-services">

                <img src={appointment} alt="Trusted escort care services for seniors in Surrey, Abbotsford, Chilliwack and Agassiz" />

                <div className="ser-text innerpage texted noborder">

                  <h3>Escorting Client Care </h3>
                  <p className='allp serp'>At Mercy Manor Health Care, we understand that getting to and from appointments can sometimes be challenging for our clients.  </p>
                  <Link to="/escorting-care"> <button className='all-button servbtn'>Read More...</button> </Link>
                </div>


              </div>
              <div className="all-services">

                <img src={housekeeping} alt="Professional homemaking services for seniors by Mercy Manor Home Care in Surrey BC" />

                <div className="ser-text innerpage texted noborder">

                  <h3>Home Making Service </h3>
                  <p className='allp serp'>Homemaking service is a non-medical support service that helps individuals maintain a clean, safe, and comfortable home environment. It is especially helpful for seniors, people with disabilities, or anyone who may have difficulty managing daily household tasks. </p>
                  <Link to="/homemaking"> <button className='all-button servbtn'>Read More...</button> </Link>
                </div>


              </div>

              <div className="all-services">

                <img src={store} alt="In-home meal preparation services for seniors in British Columbia" />

                <div className="ser-text innerpage texted noborder">

                  <h3>Meal Preparation Service </h3>
                  <p className='allp serp'>Meal Preparation Service is a non-medical support service designed to help individuals maintain a healthy and balanced diet, especially when they are unable to cook for themselves due to age, illness, disability, or a busy lifestyle.</p>
                  <Link to="/mealprep"> <button className='all-button servbtn'>Read More...</button> </Link>
                </div>


              </div>

              <div className="all-services">

                <img src={wound} alt="Professional nursing care services in Surrey BC" />

                <div className="ser-text innerpage texted noborder">

                  <h3>Nursing Care Service </h3>
                  <p className='allp serp' >Nursing Care Service is a professional healthcare service provided by licensed nurses to support individuals with medical needs, chronic conditions, post-surgery recovery, or age-related health challenges.</p>
                  <Link to="/nursing-care"> <button className='all-button servbtn'>Read More...</button> </Link>
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
