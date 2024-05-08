// import React from 'react';

import { CiHashtag } from 'react-icons/ci'
import AboutRouteFirstHalfContent from '../../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent'

const Cafeteria = () => {
  return (
    <div>
      <AboutRouteFirstHalfContent
        title="Facilities"
        text="University Cafeteria"
      />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md space-y-6">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white  flex items-center gap-2 font-bold p-2">
            <span className="text-xl">
              <CiHashtag />
            </span>
            Cafeteria
          </p>
        </div>

        <p>
          Metropolitan University is well concerned about the healthy food habit
          of students. The main cafeteria of the university is a spacious and
          radiant area. It offers quality meals and services at a reasonable
          cost to students, faculty, staff, and guests with the assurance that
          you’ll always have a wide variety of healthy, good-tasting options
          made with care. It maintains cleanliness and food hygiene. There are a
          total of three Cafeterias at Metropolitan University.
        </p>
        <p>All the Cafeterias are great places to pass wonderful times.</p>
        <p className="font-bold text-xl text-blue-600">Cafeteria</p>
        <p>
          It is located in the Permanent Campus of University with a wide
          variety of healthy foods for breakfast, lunch, and afternoon snacks.
        </p>
        <p className="font-bold underline">Cafeteria Hours</p>
        <div>
          Day: Saturday – Friday <br />
          Time 8:30 a.m. –8:30 p.m
        </div>
      </div>
    </div>
  )
}

export default Cafeteria
