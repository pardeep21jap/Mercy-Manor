import React from 'react'
import { Link } from 'react-router-dom';
import "./blogcon.css"
import exercise from '../assets/exercise.webp';
import comcare from '../assets/comcare.webp';
import Slides from '../assets/Slides07.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
function Blogcon() {
  return (
    <div>
      <section id='blog-section'>
        <div className="container">
          <div className="blog-outer">
            <div className="row blog-inner">

              <div className="col-7 left-blog-content">



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
                      <br />
                      <br />
                      <strong className='bold-title'>
                        1. Never Correct Their Memory: </strong>
                      Resist the urge to say, “That’s not what happened.” Correcting someone with dementia can
                      cause embarrassment, frustration, or distress.
                    </p>
                    <Link to="/ThingsNeverToDoAsADementiaCaregiver">
                      Read More...
                    </Link>


                    <span className='blog-date'>17-02-2026</span>
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
                      <br />
                      <br />
                      <strong className='bold-title'>
                        1. Do Not Fuel the Fire: </strong>
                      When emotions rise, our instinct is often to correct, explain, or defend. With dementia, that usually makes things worse. Instead:
                    </p>
                    <Link to="/HowToDeEscalateDementiaAnger">
                      Read More...
                    </Link>

                    <span className='blog-date'>21-02-2026</span>
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

                    <span className='blog-date'>25-02-2026</span>
                  </div>





                </div>

              </div>

              <div className='col-5 right-blog-list'>
                <h3>Recent Posts</h3>
                <ul>
                  <li>
                    <img src={comcare} alt="Caregiver assisting elderly woman with dementia at home – dementia caregiver mistakes to avoid" />
                    <Link to="/ThingsNeverToDoAsADementiaCaregiver">
                      10 Things to Never Do as a Dementia Caregiver
                    </Link>


                  </li>
                  <li>
                    <img src={exercise} alt="How to de-escalate dementia anger and calm a senior patient" />
                    <Link to="/HowToDeEscalateDementiaAnger">
                      How to De-Escalate Dementia Anger in the First 10 Seconds
                    </Link>
                  </li>
                  <li>
                    <img src={Slides} alt="Understanding sundowning in dementia and how caregivers should respond" />
                    <Link to="/SundowningInDementia">
                      Sundowning in Dementia: What It Is and How to Respond
                    </Link>
                  </li>
                </ul>

                <div className="orange-blog-div">
                  <h4>Need expert healthcare support?<br /> Call us </h4>
                  <FontAwesomeIcon icon={faPhoneVolume} className='blogcall' />
                  <span>
                    + 604 613 1245</span>
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
