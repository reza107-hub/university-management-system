// import React from 'react';
import { CiBank } from "react-icons/ci";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const AnimatedNumber = ({ value }) => {
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const animatedValue = useSpring({
    from: { value: 0 },
    to: { value: inView ? value : 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.span ref={inViewRef}>
      {animatedValue.value.interpolate((val) => Math.floor(val))}
    </animated.span>
  );
};

const UniversityStatistics = () => {
  return (
    <div className="flex items-center justify-center h-[500px] my-10 bg-primary">
      <div className="flex flex-col items-center text-white">
        <CiBank className="h-[50px] w-[50px]" />
        <div className="text-center">
          <h2 className="md:text-4xl text-2xl font-semibold font-raleway">
            University Statistics at a Glance!
          </h2>
          <p className="md:text-lg mt-4 font-sans">
            Top Ranked Private University in Bangladesh
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-7 md:gap-24 my-10">
            <div>
              <h1 className="md:text-4xl text-2xl font-bold font-raleway">
                <AnimatedNumber value={20} />
                <sup>+</sup>
              </h1>
              <p className="md:text-xl text-2xl font-semibold font-raleway">
                Years of Success
              </p>
            </div>
            <div>
              <h1 className="md:text-4xl text-2xl font-bold font-raleway">
                <AnimatedNumber value={250} />
                <sup>+</sup>
              </h1>
              <p className="md:text-xl text-2xl font-semibold font-raleway">
                Years of Success
              </p>
            </div>
            <div>
              <h1 className="md:text-4xl text-2xl font-bold font-raleway">
                <AnimatedNumber value={5000} />
                <sup>+</sup>
              </h1>
              <p className="md:text-xl text-2xl font-semibold font-raleway">
                Years of Success
              </p>
            </div>
            <div>
              <h1 className="md:text-4xl text-2xl font-bold font-raleway">
                <AnimatedNumber value={3000} />
                <sup>+</sup>
              </h1>
              <p className="md:text-xl text-2xl font-semibold font-raleway">
                Years of Success
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityStatistics;
