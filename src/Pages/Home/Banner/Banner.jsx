// import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/keyboard';
import './BannerStyle.css';

const Banner = () => {
  return (
    <div className='h-screen'>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className="slide">
          <img src="https://i.ibb.co/MDyN5XL/323113454-1325448301586663-5004010928649462078-n.jpg" alt="" />
          <span className='slide-text'>Slide 1</span>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://i.ibb.co/MDyN5XL/323113454-1325448301586663-5004010928649462078-n.jpg" alt="" />
          <span className='slide-text'>Slide 2</span>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <img src="https://i.ibb.co/MDyN5XL/323113454-1325448301586663-5004010928649462078-n.jpg" alt="" />
          <span className='slide-text'>Slide 3</span>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
