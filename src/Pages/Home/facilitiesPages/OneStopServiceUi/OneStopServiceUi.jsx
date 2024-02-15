// import React from 'react';

import AboutRouteFirstHalfContent from "../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent";

const OneStopServiceUi = () => {
  return (
    <div>
      <AboutRouteFirstHalfContent title="Facilities" text="⚙️One Stop Service" />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md space-y-6">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white font-bold p-2">
            <span className="mr-1 text-sm font-semibold">#</span>One Stop
            Service
          </p>
        </div>
        <p>
          One Stop Service Corner is facility for the current student of the
          University. Using the rapid service corner student gets the following
          facilities.
        </p>
        <p className="font-bold underline">Facilities</p>
        <div>
          <p>Result</p>
          <p>Mark sheet</p>
          <p>Studentship Certificate</p>
          <p>Internship Recommendation</p>
          <p>Medium of Instruction Certificate</p>
          <p>Apply for Supplementary Exam</p>
          <p>Apply for Batch Transfer</p>
          <p>Academic Query</p>
        </div>
        <p className="font-bold underline text-center">Download the important Forms</p>
        <p>
        <a
            href="/Transcript-Application-Form.pdf" // Replace with the actual path to your downloadable file
            download="Transcript-Application-Form.pdf"
            className="text-blue-500 underline"
          >
            Transcript Application Form
          </a>
        </p>
        <p>
        <a
            href="/Batch-Transfer-and-Re-admission-Application-Form.pdf" 
            download="Batch-Transfer-and-Re-admission-Application-Form.pdf"
            className="text-blue-500 underline"
          >
            Batch Transfer and Re-admission Application Form
          </a>
        </p>
      </div>
    </div>
  );
};

export default OneStopServiceUi;
