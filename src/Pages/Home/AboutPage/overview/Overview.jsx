// import React from "react";
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { overviewData } from './overviewData'
import AboutRouteFirstHalfContent from '../../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent'

const Overview = () => {
  const text =
    'Metropolitan University, a beacon of knowledge and innovation,offers a dynamic learning environment where students thrive. With a commitment to excellence and personal growth, we shape future leaders and empower individuals to make a difference in the world.'
  return (
    <div>
      <AboutRouteFirstHalfContent title="University Overview" text={text} />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white font-bold">
            <span className="text-2xl mr-1">#</span>Overview
          </p>
        </div>
        <div className="flex-col items-center justify-center mx-auto ">
          {overviewData.map((section, index) => (
            <div key={index} className="mt-4">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex items-center justify-between bg-gray-200 p-3 rounded-md cursor-pointer w-full">
                      <h1 className="text-lg font-semibold">
                        {section.question}
                      </h1>
                      <ChevronDownIcon
                        className={`w-5 h-5 text-gray-600 transform ${
                          open && 'rotate-180'
                        }`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="p-3 bg-white rounded-md shadow-md mt-2">
                      {Array.isArray(section.answer) &&
                        section.answer.map((item, idx) => (
                          <p
                            key={idx}
                            className="mb-5"
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></p>
                        ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Overview
