// import React from 'react';

import { FaEye, FaPaperPlane } from "react-icons/fa";
import AboutRouteFirstHalfContent from "../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent";
import { TbArrowsShuffle } from "react-icons/tb";

const VisionAndMission = () => {
  return (
    <div>
      <AboutRouteFirstHalfContent
        title="Vision & Mission of Metropolitan university"
        text="Guiding Principles for Excellence and Growth"
      />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white font-bold">
            <span className="mr-1 text-sm font-semibold">#</span>Vision &
            Mission
          </p>
        </div>
        <div className="space-y-7 mt-2">
          <p className="flex items-center gap-1">
            <span className="text-xl">
              <FaEye />
            </span>
            <span className="font-bold underline">Vision</span>
          </p>
          <p>
            To emerge as a distinguished teaching and research university
            recognized around the globe through innovative education, creation
            and application of knowledge, and community engagement.
          </p>
          <p className="flex items-center gap-1">
            <span className="text-xl">
              <FaPaperPlane />
            </span>
            <span className="font-bold underline">Mission</span>
          </p>
          <p>
            To provide our students with globally compatible tertiary education
            characterized by academic excellence in a range of subjects
            pertinent to the present and future social needs. <br />
            To provide our students with the necessary lessons on moral values,
            ethics, self-respect, and patriotism. To provide a stimulating
            learning environment where our students can prepare themselves for
            pursuing their academic, personal, and career goals.
          </p>
          <p className="flex items-center gap-1">
            <span className="text-xl">
              <TbArrowsShuffle />
            </span>
            <span className="font-bold underline">Vision</span>
          </p>
          <p>
            In order to materialize the mission we pursue strategies
            including—but not limited to—the following:
          </p>
          <div className="space-y-2">
            <p>
              (i) giving our students real world industrial exposure through
              industry-academia collaboration and actively engaging the alumni
              in that regard;
            </p>

            <p>
              (ii) providing the students with various technological
              orientations that enhance their capabilities for thriving in the
              knowledge economy and social dynamism;
            </p>

            <p>
              (iii) promoting co-curricular and extra-curricular activities to
              ensure comprehensive development of the students;
            </p>

            <p>
              (iv) engaging the faculty members in active research as well as
              other pedagogic programs in order to harness their teaching and
              research potentials;
            </p>

            <p>
              (v) maintaining ideal research & development facilities suitable
              for postgraduate and doctoral research as well as other
              development projects and initiatives; and
            </p>
            <p>
              (vi) updating the curriculum and other requisites to accommodate
              the changing national priorities and global developments on a
              progressive basis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
