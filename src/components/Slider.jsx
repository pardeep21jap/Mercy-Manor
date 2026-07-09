

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';

import { Link } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';
import './Slider.css'
import Slide05 from '../assets/Slides05.webp';
import Slide06 from '../assets/Slides06.webp';
import Slide07 from '../assets/Slides07.webp';

function Slider() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>

      <Swiper navigation={true} pagination={false} autoplay={true}
        modules={[Navigation, Pagination, Autoplay]} className="mySwiper">


        <SwiperSlide className='mainslider'>
          <img src={Slide05} alt="1" />
          <div className="opacity-div">

            <div className="slider-text">
              <h1>Welcome To Mercy Manor<br></br>Homecare BC</h1>
              <p className='allp slidep'>Your trusted provider of professional in-home care services for seniors and individuals in need. We proudly serve families across Surrey, Abbotsford, Chilliwack, and Agassiz, delivering compassionate, personalized care that supports independence, dignity, and comfort at home.</p>

              <button className='all-button' onClick={scrollToForm}>
                Contact US
              </button>

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='mainslider'><img src={Slide06} alt="1" />

          <div className="opacity-div">

            <div className="slider-text">
              <h2>Trusted Nurse Care<br></br> at Your Doorstep</h2>
              <p className='allp slidep'>Our home nursing service ensures that you or your loved ones receive expert medical care without leaving the comfort of home. Our trained and certified nurses deliver personalized support, from daily assistance to advanced clinical care, ensuring safety, comfort, and peace of mind at every step.</p>
              <button className='all-button' onClick={scrollToForm}>
                Contact US
              </button>

            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='mainslider'><img src={Slide07} alt="1" />
          <div className="opacity-div">

            <div className="slider-text">
              <h2>Professional Health Care<br></br> Personalized for You</h2>
              <p className='allp slidep'>Everyone’s health journey is different, and that’s why we believe in personalized care that respects your individuality. Our healthcare professionals work closely with you to create treatment plans that fit your comfort.</p>
              <button className='all-button' onClick={scrollToForm}>
                Contact US
              </button>

            </div>
          </div>
        </SwiperSlide>

      </Swiper>

    </>
  )
}

export default Slider;