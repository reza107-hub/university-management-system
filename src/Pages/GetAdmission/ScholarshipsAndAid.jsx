import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'

const ScholarshipsAndAid = () => {
  const data = [
    {
      question: 'Merit Scholarships at the Entry Level',
      answer: [
        'i.Candidates scoring GPA 10 (SSC & HSC) Both Golden GPA 5.00 will be awarded 80% Merit Scholarship in the form of full tuition waiver at the entry level in undergraduate programs for 4 (four) years.',

        'ii.Candidates scoring GPA 10 (SSC & HSC) One Golden GPA 5.00, will be awarded 50% Merit Scholarship (in the form of tuition fee waiver) at the entry level in undergraduate programs for 4 (four) years.',

        'iii.Candidates securing GPA 10 (SSC & HSC) Without Golden GPA 5.00, will be awarded 40% Merit Scholarship (in the form of tuition fee waiver) at the entry level in undergraduate programs for 4 (four) years.',

        'iv. Candidates securing GPA 9 (SSC & HSC), will be awarded 20% Merit Scholarship (in the form of tuition fee waiver) at the entry level in undergraduate programs for 4 (four) years.',

        'v. Candidates securing GPA 8 (SSC & HSC), will be awarded 10% merit scholarship (in the form of tuition fee waiver) at the entry level at undergraduate programs for 4(four) years.',
      ],
    },
    {
      question: 'Merit Scholarship for the Existing Students',
      answer: [
        'i.The students securing  A+ grade (4.00 out of 4.00) in all courses of three consecutive terms will be awarded Chairman’s Scholarship of TK1000 per month in the next three consecutive terms.',
        'ii.The students securing A+ grade (4.00 out of 4.00) in all courses but one (A grade, 3.75 out of 4.00) in three consecutive terms will be awarded Vice Chancellor’s Scholarship of TK 750 per month in the next three consecutive terms.',
      ],
    },
    {
      question: 'Need-based Scholarship',
      answer: [
        'i.According to the provision of the Private University Act 2010 (Clause 9.4), and as a mark of respect to the valiant freedom fighters of the War of Liberation and Independence, MU provides 20% tuition fee waiver to the wards of freedom fighters which are at least 3% of all students admitted in each semester.',
        'ii.Tuition fee waiver as above is then continued provided that CGPA in each semester remains 2.70 or more.',
      ],
    },
    {
      question: 'Tuition fee Waiver for Female Students',
      answer: [
        'In order to encourage entry of female students to higher education, Metropolitan University provides 20% tuition fee waiver to all female students subject to the condition that they meet the admission requirements set by the university and pass the admission test.',
      ],
    },
    {
      question: 'Family Concession',
      answer: [
        'Metropolitan University provides 30 % of tuition fee waiver when two siblings (brother/sister with the same parents). However, both must be admitted into full-time regular programs. The benefit commences on the date of admission of the second sibling and ceases to function with the discontinuation of study of any one of them, after his/her graduation, or for any other reason. Merit Scholarship awardees cannot qualify to get the benefit for siblings or other similar benefits.',
      ],
    },
  ]

  return (
    <div className="w-[70%] shadow-md p-4 mx-auto mt-11">
      <div className="bg-slate-400 p-3 rounded-md shadow-md">
        <h3 className="text-2xl font-bold mb-4 text-white">
          <span className="text-white">#</span> Scholarships & Aid
        </h3>
      </div>
      <h2 className="my-6 underline">Financial Awards and Assistance</h2>
      <p className="mb-5">
        Since its inception Metropolitan University has been awarding merit
        scholarships to attract and retain good students and need-based
        financial assistance to facilitate education of poor but meritorious
        students. Benefits to students are provided in the following forms:
      </p>
      {data.map((section, index) => (
        <div key={index} className="mt-4">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between bg-gray-200 p-3 rounded-md cursor-pointer w-full">
                  <h1 className="text-lg font-semibold">{section.question}</h1>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-gray-600 transform ${
                      open && 'rotate-180'
                    }`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="p-3 bg-white rounded-md shadow-md mt-2">
                  {Array.isArray(section.answer) &&
                    section.answer.map((item, idx) => (
                      <p key={idx} className="mb-5">
                        {item}
                      </p>
                    ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      ))}
    </div>
  )
}

export default ScholarshipsAndAid
