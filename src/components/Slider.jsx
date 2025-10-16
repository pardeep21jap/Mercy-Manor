

import { SwiperSlide, Swiper } from 'swiper/react'
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/pagination';

function App() {


  return (
    <>

      <Swiper navigation={true}  pagination={true} autoplay={true}
        modules={[Navigation, Pagination, Autoplay]} className="mySwiper">
        <SwiperSlide><img src="https://picsum.photos/seed/1/800/500" alt="1" />
          <div className="slider-text">
            <h2>Slide 1</h2>
            <p>This is the description for Slide 1.</p>
          </div>

        </SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/seed/2/800/500" alt="2" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/seed/3/800/500" alt="3" /></SwiperSlide>
        <SwiperSlide><img src="https://picsum.photos/seed/4/800/500" alt="4" /></SwiperSlide>
      </Swiper>

    </>
  )
}

export default App
