// import React from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { FaUserTimes } from 'react-icons/fa'
import { CiHashtag } from 'react-icons/ci'
import AboutRouteFirstHalfContent from '../../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent'

const LaboratoryUi = () => {
  const laboratory = [
    {
      question: 'Innovation Lab',
      answer: [
        'Metropolitan University Innovation Lab is a place for advanced innovative activities. It was constructed in 2014 with huge amount of electronics & electrical equipment. The University built this lab mainly aiming at research work in Robotics, Drone and Embedded System. From the very beginning of the establishment, the Innovation Lab has introduced some astonishing projects. So far the lab has built sophisticated drones, unmanned submarine, electronic voting machine and some other amazing machine to meet the demand of time.',
        'The lab also developed Electronic Braille Reader for visually impaired people. Besides students from innovation lab participated in many Robotics as well as Drone competition and achieved first position in some of them.',
        'The main mission of the Lab is to create up to date electronic devices, educate our students on robotics and embedded system for the welfare of the nation.',
        'The only Drone Ground Control Centre of the country is located at Metropolitan University Innovation Lab.',
      ],
    },
    {
      question: 'Electrical Circuits Lab',
      answer: [
        'The Department of Electrical and Electronic Engineering (EEE) has established Electrical Circuits Laboratory. This laboratory is equipped with various types of resistors, variable rheostat, inductor, capacitor, DC and AC power supplies, switches, lamp boards, ammeters, voltmeters, variances, oscilloscopes, etc. The laboratory is well equipped with various types of analog trainer boards, oscilloscopes, DC power sources, function generators, multimeter etc. Besides, in this laboratory there are wide ranges of resistors, capacitors, inductors, diode, transistor, MOSFET, analog ICs, etc. Electrical Circuits Laboratory is featured with state-of-the art laboratory equipment such as digital trainer board, logic probe, IC tester, digital meters, data switches, and wide ranges of digital ICs of TTL and CMOS series. The laboratory is equipped with various types of test and measurement instruments like galvanometer, ammeter, voltmeter, wattmeter, energy meter, different types of transducer, etc. Electrical Circuits Laboratory has been set up with start-of-the art module of communication. At the moment, students are doing experiments on AM, FM, PCM, QPSK, ASK, FSK, OMSK, BER calculation, TDM, TDMA, CDMA, etc. This laboratory is also using ‘Communication Toolbox 1 of MATLAB to verify and develop different communication algorithm.',
      ],
    },
  ]
  return (
    <div>
      <AboutRouteFirstHalfContent
        title="Facilities"
        text="University Laboratory Resources"
      />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md space-y-6">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white  flex items-center gap-2 font-bold p-2">
            <span className="text-xl">
              <CiHashtag />
            </span>
            Laboratory Resources
          </p>
        </div>
        <p>
          Computer Science and Engineering (CSE) Department has a General
          Computer Lab (GCL), two Advanced Computer Labs (ACL), an Internet
          Computer Lab, an Electrical Machine Lab, an Electrical Circuit Lab, an
          Electronics Lab, a Communication Lab, a Microprocessor Lab, an
          Innovation Lab, and a Hardware Lab. One computer lab has a total of 30
          to 40 computers. It means that students need not to wait in a queue in
          one lab when they want to do their assignments. And thus it helps them
          obtain good grades.
        </p>
        <p>
          The laboratories are well equipped with Oscilloscope, Signal
          Generator, Trainer Board, Digital Multi meter (DT9205A+), EPROM,
          Programmer, Microprocessor Kid, Capacitive Load, Synchronous
          Motor/Generator, Electrodynamometer, Capacitive Start Motor, Three
          Phase Squirrel Cage Induction Motor, Dc Motor/Generator, Single Phase
          Transformer, Three Phase Transformer, Synchronizing Module, Radio
          Communication Module, Micro Processor Programmer (8086), Grating &amp;
          Spectra Meter, Laser Source (Red), Arduino UNO 3, CISCO 48 Port
          Managable Switch, CISCO 24 Port GigaBit Switch etc. The laboratories
          are fully equipped because it has all the equipment required for
          students for the best practical experiences. Being able to work in a
          quiet and well equipped environment allows students to concentrate on
          their work.
        </p>
        <div className="flex-col items-center justify-center mx-auto ">
          {laboratory.map((section, index) => (
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
        <p className="font-bold underline">Service Hours</p>
        <p>
          Computer Lab maintains 6 days a working week. It is open each day from
          Saturday to Thursday, from 9:00 a.m. to 9:00 p.m. It remains closed on
          public holidays and other dates announced by the University authority.
        </p>
        <p className="font-bold underline flex gap-1 items-center">
          <span>
            <FaUserTimes />
          </span>
          Lab User Policy
        </p>
        <p>
          Group study, gossiping, discussion, eating, drinking, and smoking are
          strictly prohibited inside the Lab.
        </p>

        <p>
          All students are requested to handle with care all the fittings,
          fixtures, furniture, equipment, PC hard wares, etc. of the Lab and
          should leave them neat and tidy after use.
        </p>

        <p>
          Users must not undertake any form of activity that disturbs,
          distracts, or disrupts the others.
        </p>
        <p>Mobile phones should not be used inside the Lab.</p>
      </div>
    </div>
  )
}

export default LaboratoryUi
