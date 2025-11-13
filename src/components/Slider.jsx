

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import './Slider.css'

function Slider() {


  return (
    <>

      <Swiper navigation={true} pagination={false} autoplay={false} 
        modules={[Navigation, Pagination, Autoplay]} className="mySwiper">

        <SwiperSlide className='mainslider'><img src="./src/assets/Images/Slides1.png" alt="1" />

          <div className="opacity-div">

            <div className="slider-text">
              <h2>Trusted Nurse Care at Your Doorstep</h2>
              <p className='allp slidep'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores beatae culpa velit placeat reiciendis expedita alias odio ad quaerat praesentium mollitia error omnis sequi ipsum aliquid, ex at laudantium?</p>
              <button className='all-button'>Contact US</button>


            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='mainslider'><img src="./src/assets/Images/Slides3.png" alt="1" />
          <div className="opacity-div">

            <div className="slider-text">
              <h2>Joyful Moments, Healthy Hearts</h2>
              <p className='allp slidep'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores beatae culpa velit placeat reiciendis expedita alias odio ad quaerat praesentium mollitia error omnis sequi ipsum aliquid, ex at laudantium?</p>
              <button className='all-button'>Contact US</button>


            </div>
          </div></SwiperSlide>
        <SwiperSlide className='mainslider'><img src="./src/assets/Images/Slides2.png" alt="1" />
          <div className="opacity-div">

            <div className="slider-text">
              <h2>Professional Health Care, Personalized for You</h2>
              <p className='allp slidep'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore asperiores beatae culpa velit placeat reiciendis expedita alias odio ad quaerat praesentium mollitia error omnis sequi ipsum aliquid, ex at laudantium?</p>
              <button className='all-button'>Contact US</button>


            </div>
          </div></SwiperSlide>

      </Swiper>

    </>
  )
}

export default Slider;