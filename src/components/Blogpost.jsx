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
                    <Link to="/blogs">Read More...</Link>
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
                    <Link to="/blogs">Read More...</Link>
                  </div>
                </div>

              </SwiperSlide>

              <SwiperSlide className='blogslider'>

                <div class="blog-card">
                  <img src={Slide07} alt="How to respond to sundowning in elderly dementia care" />
                  <div class="blog-content">
                    <span>Nutrition</span>
                    <h3>Sundowning in Dementia: What It Is and How to Respond</h3>
                    <p className='allp'>Sundowning is real — and it can feel terrifying if you don’t know what’s happening.
                      If you care for a loved one with dementia, you may notice that late in the afternoon or evening, something changes. The person who seemed relatively calm earlier in the day may suddenly become confused, anxious, restless, or agitated.
                    </p>
                    <Link to="/blogs">Read More...</Link>
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
