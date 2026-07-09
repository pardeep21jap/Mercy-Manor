import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

import Slide05 from '../assets/Slides05.webp';
import Slide06 from '../assets/Slides06.webp';
import Slide07 from '../assets/Slides07.webp';
import medication from '../assets/medication.webp';
import ser2 from '../assets/ser2.jpg';
import foodprep from '../assets/foodprep.webp';
import "./Blogpost.css"


function Blogpost() {
  return (
    <div>
      <section id='blogpost-section'>


        <div className='container'>
          <h2 className='all-heading cen-heading'>Blog Post</h2>
          <h3 className='subtitle'>Helpful articles, care guidance, and wellness tips</h3>
          <div className="blogpost-inner">



            <Swiper
              navigation={false}
              pagination={false}
              autoplay={true}
              modules={[Navigation, Pagination, Autoplay]}
              className="mySwiper"
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >

              <SwiperSlide className='blogslider'>


                <div class="blog-card">
                  <img src={Slide05} alt="Senior care guidance for dementia caregivers" />
                  <div class="blog-content">
                    <span>Wellness</span>
                    <h3>10 Things to Never Do as a Dementia Caregiver</h3>
                    <p className='allp'>Caring for someone living with dementia requires patience, compassion, and understanding. Small changes in how we communicate and respond can make a significant difference in their comfort and wellbeing. Here are 10 important things to avoid as a dementia caregiver. </p>
                    <Link to="/ThingsNeverToDoAsADementiaCaregiver">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide className='blogslider'>


                <div class="blog-card">
                  <img src={Slide06} alt="Tips for managing anger in dementia patients" />
                  <div class="blog-content">
                    <span>Staying Healthy</span>
                    <h3>How to De-Escalate Dementia Anger in the First 10 Seconds</h3>
                    <p className='allp'>Caring for a loved one with dementia can be deeply meaningful—and incredibly challenging. When anger or agitation rises, it can feel sudden and overwhelming. The truth is, you may not always be able to stop a dementia-related outburst. But you can prevent it from escalating. The first 10 seconds matter most.
                    </p>
                    <Link to="/HowToDeEscalateDementiaAnger">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide className='blogslider'>

                <div class="blog-card">
                  <img src={Slide07} alt="How to respond to sundowning in elderly dementia care" />
                  <div class="blog-content">
                    <span>Dementia</span>
                    <h3>Sundowning in Dementia: What It Is and How to Respond</h3>
                    <p className='allp'>Sundowning is real — and it can feel terrifying if you don’t know what’s happening.
                      If you care for a loved one with dementia, you may notice that late in the afternoon or evening, something changes. The person who seemed relatively calm earlier in the day may suddenly become confused, anxious, restless, or agitated.
                    </p>
                    <Link to="/SundowningInDementia">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide className='blogslider'>

                <div class="blog-card">
                  <img src={medication} alt="senior home care in chilliwack " />
                  <div class="blog-content">
                    <span>Safety</span>
                    <h3>Senior Safety Tips for Living Independently at Home</h3>
                    <p className='allp'>Many seniors wish to remain in the comfort of their own homes as they age. Living independently allows older adults to maintain their routines, stay connected to their communities, and enjoy the familiarity of their surroundings. However, maintaining a safe home environment becomes increasingly important as health, mobility, and daily needs change over time.
                    </p>
                    <Link to="/senior-safety-tips-for-living-independently-at-home">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide className='blogslider'>

                <div class="blog-card">
                  <img src={ser2} alt="senior home care in chilliwack " />
                  <div class="blog-content">
                    <span>Surgery</span>
                    <h3>Recovering at Home After Surgery</h3>
                    <p className='allp'>As seniors age, preparing healthy meals can become more challenging. Meal preparation services help older adults maintain their health, independence, and quality of life while continuing to live comfortably at home.
                    </p>
                    <Link to="/recovering-at-home-after-surgery-how-mercy-manor-home-care-can-help">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide className='blogslider'>

                <div class="blog-card">
                  <img src={foodprep} alt="senior home care in chilliwack " />
                  <div class="blog-content">
                    <span>Meal Preparation</span>
                    <h3>The Benefits of Meal Preparation Services for Seniors</h3>
                    <p className='allp'>As seniors age, preparing healthy meals can become more challenging. Meal preparation services help older adults maintain their health, independence, and quality of life while continuing to live comfortably at home.
                    </p>
                    <Link to="/the-benefits-of-meal-preparation-services-for-seniors">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogpost
