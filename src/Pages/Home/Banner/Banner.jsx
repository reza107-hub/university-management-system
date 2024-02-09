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
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

import Loader from "../../../Components/Loader/Loader";
import { useGetPresentUserWithAdditionalInfoQuery } from "../../../Redux/features/User/UserApi";

const Banner = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const { user, loading } = useAuth();

  const { data: userData, isLoading: isUserDetailsLoading } =
    useGetPresentUserWithAdditionalInfoQuery(user?.email);

  if (loading || isUserDetailsLoading) {
    return <Loader />;
  }

  const content = [
    {
      title: "Welcome to Sylhet Metropolitan University!",
      sub_title: "Empowering Minds, Building Futures",
      image: "https://i.ibb.co/T8zf4T2/EKbrbk3-UEAAHVF1.jpg",
    },
    {
      title: "Join a Community of Learning",
      sub_title: "Transforming Dreams into Reality",
      image:
        "https://i.ibb.co/dgQYzGS/Whats-App-Image-2023-08-18-at-7-35-41-PM.jpg",
    },
    {
      title: "Explore a World of Opportunities",
      sub_title: "Choose Sylhet Metropolitan University",
      image:
        "https://i.ibb.co/MDyN5XL/323113454-1325448301586663-5004010928649462078-n.jpg",
    },
    {
      title: "Discover Your Opportunities",
      sub_title: "Admission Season is Here",
      image: "https://i.ibb.co/BtTGZKF/metropolitan-university.jpg",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);

    // Check if it's the last slide
    if (swiper.isEnd) {
      // Reset the active slide index to the first slide
      setActiveSlideIndex(0);
    }
  };

  return (
    <div className="h-screen">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        mousewheelSensitivity={0.5}
        keyboard={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={handleSlideChange}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        speed={2000}
        hardwareAcceleration={true}
        ease="ease-in-out"
      >
        {content.map((c, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-screen">
              <img
                src={c?.image}
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center  text-white">
                <div className="text-center">
                  <h2
                    className={`md:text-5xl text-2xl font-black font-raleway ${
                      activeSlideIndex === i
                        ? "slide-animation slide-animation-left"
                        : ""
                    }`}
                  >
                    {c?.title}
                  </h2>
                  <p
                    className={`md:text-lg mt-4 font-sans ${
                      activeSlideIndex === i
                        ? "slide-animation slide-animation-right"
                        : ""
                    }`}
                  >
                    {c?.sub_title}
                  </p>
                  <Link to="/getAdmission">
                    <button
                      disabled={
                        (userData?.data?.userId?.role === "admin") | "student"
                      }
                      className={`m-[10px] px-[20px] py-[10px] bg-primary text-bold rounded-sm ${
                        activeSlideIndex === i
                          ? "slide-animation slide-animation-down"
                          : ""
                      }
                      ${
                        // eslint-disable-next-line no-constant-condition
                        (userData?.data?.userId?.role === "admin") | "student"
                          ? "disabled:opacity-25"
                          : ""
                      }
                      `}
                    >
                      Get Admission
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
