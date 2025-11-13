import React from 'react'
import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'


import "./Review.css"
function Review() {
  return (
    <section id='review-section'>
      <div className="container">
        <div className="review-inner">
          <h2 className='all-heading cen-heading'>What our patients say</h2>
          <h3 className='subtitle'>Hear From Our Happy Patients</h3>
          <Swiper navigation={true} pagination={true} autoplay={false} slidesPerView={2}
        spaceBetween={30}
            modules={[Navigation, Pagination, Autoplay]} className="mySwiper">

            <SwiperSlide className='mainslider review-slider'>
             



              <div className="slider-text review-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
 <FontAwesomeIcon icon={faUser} className='clienticon' />
                <span>User name</span>



              </div>
            </SwiperSlide>

            <SwiperSlide className='mainslider review-slider'>
             


              <div className="slider-text review-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
 <FontAwesomeIcon icon={faUser} className='clienticon' />
                <span>User name</span>



              </div>
            </SwiperSlide>

              <SwiperSlide className='mainslider review-slider'>
             


              <div className="slider-text review-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
 <FontAwesomeIcon icon={faUser} className='clienticon' />
                <span>User name</span>



              </div>
            </SwiperSlide>

              <SwiperSlide className='mainslider review-slider'>
             


              <div className="slider-text review-text">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy. </p>
 <FontAwesomeIcon icon={faUser} className='clienticon' />
                <span>User name</span>



              </div>
            </SwiperSlide>

          </Swiper>


        </div>
      </div>
    </section>





  )
}

export default Review
