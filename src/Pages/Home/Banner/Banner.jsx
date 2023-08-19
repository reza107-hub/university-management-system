// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "./BannerStyle.css";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    // Add the 'active' class to the content container of the first slide when the component mounts
    const firstSlideContent = document.querySelector('.slide-content');
    if (firstSlideContent) {
      firstSlideContent.classList.add('active');
    }
  }, []);
  return (
    <div className="h-screen">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => {
          // Remove the 'active' class from all content containers
          document.querySelectorAll(".slide-content").forEach((content) => {
            content.classList.remove("active");
          });

          // Add the 'active' class to the content container of the current slide
          const currentSlide = swiper.slides[swiper.activeIndex];
          currentSlide.querySelector(".slide-content").classList.add("active");
        }}
      >
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://i.ibb.co/T8zf4T2/EKbrbk3-UEAAHVF1.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center  text-white">
              <div className="slide-content transition-opacity text-center ">
                <h2 className="md:text-5xl text-2xl font-black font-raleway">
                  Welcome to Sylhet Metropolitan University!
                </h2>
                <p className="md:text-lg mt-4 font-sans">
                  Empowering Minds, Building Futures
                </p>
                <button className="m-[10px] px-[20px] py-[10px] bg-primary text-bold rounded-sm">
                  Get Admission
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://i.ibb.co/MDyN5XL/323113454-1325448301586663-5004010928649462078-n.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <div className="slide-content transition-opacity text-center">
                <h2 className="md:text-5xl text-2xl font-black font-raleway">
                  Join a Community of Learning
                </h2>
                <p className="md:text-lg mt-4 font-sans">
                  Transforming Dreams into Reality
                </p>
                <button className="m-[10px] px-[20px] py-[10px] bg-primary text-bold rounded-sm">
                  Get Admission
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://i.ibb.co/dgQYzGS/Whats-App-Image-2023-08-18-at-7-35-41-PM.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <div className="slide-content transition-opacity text-center">
                <h2 className="md:text-5xl text-2xl font-black font-raleway">
                  Explore a World of Opportunities
                </h2>
                <p className="md:text-lg mt-4 font-sans">
                  Choose Sylhet Metropolitan University
                </p>
                <button className="m-[10px] px-[20px] py-[10px] bg-primary text-bold rounded-sm">
                  Get Admission
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-screen">
            <img
              src="https://i.ibb.co/BtTGZKF/metropolitan-university.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
              <div className="slide-content transition-opacity text-center">
                <h2 className="md:text-5xl text-2xl font-black font-raleway">
                  Discover Your Opportunities
                </h2>
                <p className="md:text-lg mt-4 font-sans">
                  Admission Season is Here
                </p>
                <button className="m-[10px] px-[20px] py-[10px] bg-primary text-bold rounded-sm">
                  Get Admission
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
