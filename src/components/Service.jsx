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
  const servicesData = [
    {
      title: "Dementia Care",
      description: "Dementia care is a specialized type of support designed for individuals living with dementia, including Alzheimer’s disease and other memory-related conditions. It focuses on helping the person maintain safety.",
      image: demencare,
      link: "/dementia-care",
      alt: "Mercy Manor Home Care providing dementia home care services"
    },
    {
      title: "Companion care",
      description: "At Mercy Manor Health Care, we understand that emotional well-being is just as important as physical health—especially for our elderly clients. Our Companion Care Services are designed to bring warmth, comfort, and meaningful connection.",
      image: comcare,
      link: "/companion-care",
      alt: "Mercy Manor Health Care offering companion care services in British Columbia"
    },
    {
      title: "Escorting client appointments",
      description: "At Mercy Manor Health Care, we understand that getting to and from appointments can sometimes be challenging for our clients. Our compassionate and trained staff provide escort services to ensure clients attend their medical, therapy.",
      image: escorting,
      link: "/escorting-care",
      alt: "Trusted in-home care escort services in Surrey and Abbotsford"
    },
    {
      title: "Home making",
      description: "At Mercy Manor Health Care, we understand that a clean, organized, and comfortable home environment plays a vital role in maintaining the overall well-being and independence of our clients. It is especially helpful for seniors, people with disabilities.",
      image: homemaking,
      link: "/homemaking",
      alt: "Professional home care support for daily chores and housekeeping"
    },
    {
      title: "Meal preparation",
      description: "At Mercy Manor, our diet services are supported and supervised by a certified and experienced chef. Through professional oversight and continuous quality monitoring, our staff guarantees that our diet services not only support physical health but.",
      image: mealprep,
      link: "/mealprep",
      alt: "Mercy Manor Health Care providing healthy meal prep for elderly clients"
    },
    {
      title: "Nursing Care",
      description: "At Mercy Manor, we are dedicated to providing high-quality nursing care to meet the unique health needs of every client. Our experienced Registered Nurses (RNs) and Licensed Practical Nurses (LPNs) deliver professional and compassionate services.",
      image: nursecare,
      link: "/nursing-care",
      alt: "Skilled nursing care for seniors in British Columbia"
    }
  ];

  return (
    <section id='services-section'>

      <div className="container">

        <div className="service-inner">
          <h2 className='all-heading cen-heading'>Our services</h2>
          <h3 className='subtitle'>Providing Quality Care With Compassion and Expertise</h3>

          <div className="main-services">
            {servicesData.map((service, index) => (
              <div className="all-services flip-card" key={index}>
                <div className="flip-card-inner">
                  {/* Front Side */}
                  <div className="flip-card-front">
                    <img src={service.image} alt={service.alt} />
                    <div className="ser-text innerpage texted noborder">
                      <h3>{service.title}</h3>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="flip-card-back">
                    <div className="ser-text innerpage texted noborder">
                      <h3>{service.title}</h3>
                      <p className='allp serp'>{service.description}</p>
                      <Link to={service.link}>
                        <button className='all-button servbtn'>Read More...</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>


        </div>
      </div>
    </section >
  )
}

export default Service
