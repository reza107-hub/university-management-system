// import React from 'react';

import { CiHashtag } from "react-icons/ci";
import AboutRouteFirstHalfContent from "../../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent";

const MuPhotographicSociety = () => {
  return (
    <div>
      <AboutRouteFirstHalfContent
        title="Club & Organization"
        text="Mu Photographic Society"
      />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md space-y-6">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white  flex items-center gap-2 font-bold p-2">
            <span className="text-xl">
              <CiHashtag />
            </span>
            Mu Photographic Society
          </p>
        </div>
        <p>
          Metropolitan University Photographic society (MUPS) is an organization
          for university students with an interest in photography. It was
          established in September 2013. The society regularly arranges
          different types of photographic contests to inspire novice and
          professional photographers.
        </p>
        <br />
        <p>
          <p className="font-bold"> Objectives of MUPS</p>
          1. To Promote photography throughout the campus. <br />
          2. To facilitate a training program, a seminar on Photography. <br />
          3. To hold internal competitions and exhibitions on photography.{" "}
          <br />
          4. To organize field trips on photographic interests.
        </p>
      </div>
    </div>
  );
};

export default MuPhotographicSociety;
