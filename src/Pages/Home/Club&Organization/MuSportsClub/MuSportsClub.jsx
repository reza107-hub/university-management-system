// import React from 'react';

import { CiHashtag } from 'react-icons/ci'
import AboutRouteFirstHalfContent from '../../../../Components/AboutRouteFirstHalfContent/AboutRouteFirstHalfContent'

const MuSportsClub = () => {
  const teamMembers = [
    {
      name: 'Dr. Toufique Rahman Chowdhury',
      position: 'Chief Patron',
      image: 'https://i.ibb.co/2Kj4tTn/1699081491.png',
    },
    {
      name: 'Tanwir MO Rahman Chowdhury',
      position: 'Patron',
      image: 'https://i.ibb.co/qjY6XX5/1704270708.png',
    },
    {
      name: 'Professor Dr. Mohammad Jahirul Hoque',
      position: 'Chief Adviser',
      image: 'https://i.ibb.co/rFNMHJW/1704270813.jpg',
    },
    {
      name: 'Tarek Islam',
      position: 'Adviser',
      image: 'https://i.ibb.co/Xk23xKb/1699081627.jpg',
    },
    {
      name: 'Md. Saidur Rahaman',
      position: 'Adviser',
      image: 'https://i.ibb.co/YkLYqWg/1704272531.png',
    },
    {
      name: 'Kh. Md. Rajin Saleh Alam',
      position: 'Adviser',
      image: 'https://i.ibb.co/nPdzLYp/1699081585.png',
    },
  ]
  const executives = [
    { name: 'Md. Monsuruzzaman Sheikh Emon', position: 'President' },
    { name: 'Jubayer Ahmed', position: 'Vice President' },
    { name: 'Shahriar Jahan', position: 'Vice President' },
    { name: 'Riyad Choudhury', position: 'General Secretary' },
    { name: 'Mosharof Ahmed Musa', position: 'Joint Secretary' },
    { name: 'Sultanul Arifin Emon', position: 'Joint Secretary' },
    { name: 'MZ Fozle Rabby', position: 'Organizing Secretary' },
  ]
  return (
    <div>
      <AboutRouteFirstHalfContent
        title="Club & Organization"
        text="⚽Mu Sports Club"
      />
      <div className="w-[70%] mx-auto border border-gray-700 my-4 p-4 rounded-md space-y-6">
        <div className="bg-slate-600 p-2 rounded-sm mx-auto ">
          <p className="text-left text-white  flex items-center gap-2 font-bold p-2">
            <span className="text-xl">
              <CiHashtag />
            </span>
            Mu Sports Club
          </p>
        </div>
        {/* ------- */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-md mb-2"
              />
              <p className="text-lg font-semibold">{member.name}</p>
              <p className="text-sm text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {executives.map((executive, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md">
              <p className="text-lg font-semibold">{executive.name}</p>
              <p className="text-sm text-gray-600">{executive.position}</p>
            </div>
          ))}
        </div>
        <p className="font-bold underline">Mission:</p>
        <p>
          To enhance learning and development through extra-curricular
          activities, services, and facilities of excellent quality. <br />{' '}
          <br />
          To provide diverse educational and recreational schemes that encourage
          learning through competition, and physical activity. <br /> <br />
          To offer exceptional programs, services, and facilities to teach
          motivation, encourage cooperation, and promote physical, social, and
          emotional health and wellbeing.
        </p>
        <p className="font-bold underline">Vision:</p>
        <p>
          To provide students with exceptional programmes and services that
          encourage learning, leadership, diversity, personal and civic
          responsibility <br />
          To gain national recognition as leaders in physical education, through
          innovative programmes that help students develop intellect, ethics and
          character essential to lead a meaningful life, and to have profound
          impacts on society. <br />
          To provide greatness in sports and recreation. We aim to engage our
          communities, make Metropolitan University proud and provide students
          with a lasting experience.
        </p>
        <p className="font-bold underline">Regular Events:</p>
        <p>
          <span className="font-bold text-xl">MPL</span> ( Metropolitan
          University Premier League) It’s a cricket tournament in which students
          participate as a team and represent their batches.
        </p>
        <p>
          <span className="font-bold text-xl">League–M</span>
          <br />
          <p>
            League-M is a Football tournament. Students participate as a team
            and represent their batches.
          </p>
        </p>
        <p>
          <span className="font-bold text-xl">MU Badminton Tournament</span>
          <br />
          <p>
            Both male & female students can participate in this tournament. The
            tournament has many events viz. Boys Single, Boys Doubles, Girls
            Single, Girls Double, and mixed double.
          </p>
        </p>
        <p>
          <span className="font-bold text-xl">Indoor Tournament</span>
          <br />
          <p>
            Indoor games’ Tournament is one of the most favorite sport events at
            the university. Many students participate in indoor games every
            year. It is the most passionate game in our university. Everyone
            willingly wait for the event to take place.
          </p>
        </p>
        <p className="font-bold underline">Special Event:</p>
        <p>
          <span className="font-bold text-xl">
            UPL (University Premier League)
          </span>
          <br />
          <p>
            It is a cricket tournament. MU sports club has already organized the
            first edition of the UPL in which 4 different universities from
            sylhet were participated. MU sports club is planning to arrange the
            2nd UPL.
          </p>
        </p>
        <p>
          <span className="font-bold text-xl">
            Intra–Department Tournament:
          </span>
          <br />
          <p>
            It is department wise tournament. Only one team participates from
            each department. Mainly cricket and football are played in the
            tournament. <br />
            Every year the MU Sports Club arranges an annual picnic and Iftar
            Mahfil fostering participation of all the members & advisers. <br />
            Any regular student of metropolitan university can join the MU
            sports club.
          </p>
        </p>
      </div>
    </div>
  )
}

export default MuSportsClub
