import React from 'react'
import { Link } from 'react-router-dom';
import "./blogcon.css"
import exercise from '../assets/exercise.webp';
import foodprep from '../assets/foodprep.webp';
import comcare from '../assets/comcare.webp';
import Slides from '../assets/Slides07.webp';
import ser2 from '../assets/ser2.jpg';
import medication from '../assets/medication.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
function Blogcon() {
  return (
    <div>
      <section id='blog-section'>
        <div className="container">
          <div className="blog-outer">
            <div className="row blog-inner">

              <div className="col-12 left-blog-content">

                <div className="main-blog">

                  <div className="blog-image">
                    <img src={medication} alt="recovering at home" />
                  </div>

                  <div className='blog-content'>
                    <h2>Senior Safety Tips for Living Independently at Home
                    </h2>

                    <p className='allp'>Many seniors wish to remain in the comfort of their own homes as they age. Living independently allows older adults to maintain their routines, stay connected to their communities, and enjoy the familiarity of their surroundings. However, maintaining a safe home environment becomes increasingly important as health, mobility, and daily needs change over time.
                      By taking a few proactive steps, seniors and their families can help reduce risks and create a safer living environment.


                    </p>
                    <Link to="/senior-safety-tips-for-living-independently-at-home">
                      Read More...
                    </Link>


                    <span className='blog-date'>15-06-2026</span>
                  </div>



                </div>

                <div className="main-blog">

                  <div className="blog-image">
                    <img src={ser2} alt="recovering at home" />
                  </div>

                  <div className='blog-content'>
                    <h2>Recovering at Home After Surgery: How Mercy Manor Home Care Can Help
                    </h2>

                    <p className='allp'>As seniors age, preparing healthy meals can become more challenging. Meal preparation services help older adults maintain their health, independence, and quality of life while continuing to live comfortably at home.

                    </p>
                    <Link to="/recovering-at-home-after-surgery-how-mercy-manor-home-care-can-help">
                      Read More...
                    </Link>


                    <span className='blog-date'>02-05-2026</span>
                  </div>



                </div>


                {/* 1-blog */}
                <div className="main-blog">

                  <div className="blog-image">
                    <img src={foodprep} alt="Common mistakes dementia caregivers should avoid when caring for seniors with dementia" />
                  </div>

                  <div className='blog-content'>
                    <h2>The Benefits of Meal Preparation Services for Seniors
                    </h2>

                    <p className='allp'>As seniors age, preparing healthy meals can become more challenging. Meal preparation services help older adults maintain their health, independence, and quality of life while continuing to live comfortably at home.

                    </p>
                    <Link to="/the-benefits-of-meal-preparation-services-for-seniors">
                      Read More...
                    </Link>


                    <span className='blog-date'>21-04-2026</span>
                  </div>



                </div>

                {/* 1-blog */}
                <div className="main-blog">

                  <div className="blog-image">
                    <img src={comcare} alt="Common mistakes dementia caregivers should avoid when caring for seniors with dementia" />
                  </div>

                  <div className='blog-content'>
                    <h2>10 Things to Never Do as a Dementia Caregiver
                    </h2>

                    <p className='allp'>Caring for someone living with dementia requires patience, compassion, and understanding.
                      Small changes in how we communicate and respond can make a significant difference in their
                      comfort and wellbeing. Here are 10 important things to avoid as a dementia caregiver:

                    </p>
                    <Link to="/ThingsNeverToDoAsADementiaCaregiver">
                      Read More...
                    </Link>


                    <span className='blog-date'>05-03-2026</span>
                  </div>



                </div>

                {/* 2-blog */}
                <div className="main-blog">

                  <div className="blog-image">
                    <img src={exercise} alt="Caregiver supporting an elderly person with dementia at home" />
                  </div>

                  <div className='blog-content'>
                    <h2>How to De-Escalate Dementia Anger in the First 10 Seconds
                    </h2>

                    <p className='allp'>Caring for a loved one with dementia can be deeply meaningful—and incredibly challenging. When anger or agitation rises, it can feel sudden and overwhelming. The truth is, you may not always be able to stop a dementia-related outburst.

                    </p>
                    <Link to="/HowToDeEscalateDementiaAnger">
                      Read More...
                    </Link>

                    <span className='blog-date'>28-02-2026</span>
                  </div>





                </div>

                {/* 3-blog */}
                <div className="main-blog">

                  <div className="blog-image">
                    <img src={Slides} alt="Dementia caregiver providing compassionate senior care at home" />
                  </div>

                  <div className='blog-content'>
                    <h2>Sundowning in Dementia: What It Is and How to Respond</h2>

                    <p className='allp'>Sundowning is real — and it can feel terrifying if you don’t know what’s happening.
                      If you care for a loved one with dementia, you may notice that late in the afternoon or evening, something changes. The person who seemed relatively calm earlier in the day may suddenly become confused, anxious, restless, or agitated.
                    </p>
                    <Link to="/SundowningInDementia">
                      Read More...
                    </Link>

                    <span className='blog-date'>17-02-2026</span>
                  </div>





                </div>

              </div>



              <div className="numbering">
                <ul>
                  <li>
                    <button type="button">1</button>
                  </li>
                  <li>
                    <button type="button">2</button>
                  </li>
                  <li>
                    <button type="button">3</button>
                  </li>
                  <li>
                    <button type="button">4</button>
                  </li>
                </ul>
              </div>


            </div>


          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogcon
