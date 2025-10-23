

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import './Slider.css'

function Slider() {


  return (
    <>

      <Swiper navigation={true} pagination={false} autoplay={true}
        modules={[Navigation, Pagination, Autoplay]} className="mySwiper">

        <SwiperSlide className='mainslider'><img src="./src/assets/Images/Slide2.png" alt="1" />

          <div className="opacity-div">

            <div className="slider-text">
              <h2>Trusted Nurse Care at Your Doorstep</h2>

              <button className='all-button'>Contact US</button>


            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='mainslider'><img src="./src/assets/Images/Slide3.png" alt="1" />
          <div className="opacity-div">

            <div className="slider-text">
              <h2>Bringing Hospital-Quality Care to Your Home</h2>

              <button className='all-button'>Contact US</button>


            </div>
          </div></SwiperSlide>
        <SwiperSlide className='mainslider'><img src="./src/assets/Images/Slide1.png" alt="1" />
          <div className="opacity-div">

            <div className="slider-text">
              <h2>Professional Health Care, Personalized for You</h2>

              <button className='all-button'>Contact US</button>


            </div>
          </div></SwiperSlide>

      </Swiper>

    </>
  )
}

export default Slider;