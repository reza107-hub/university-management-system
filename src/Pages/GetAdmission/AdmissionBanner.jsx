import "./admissionBanner.css";
import { Tab } from "@headlessui/react";
import { FaCogs } from "react-icons/fa";
const programData = [
  {
    id: 1,
    name: "B.Sc. in CSE",
    fees: [
      { type: "Admission Fee (One time)", amount: 20000 },
      { type: "Registration Fee (Per Semester)", amount: 15000 },
      { type: "Co-curricular Activities Fee (Per Semester)", amount: 500 },
      { type: "Campus Activities Fee (Per Month)", amount: 1000 },
      { type: "Monthly Installment of Credit fees", amount: 5000 },

    ],
  },
  {
    id: 2,
    name: "B.Sc. in Software Engineering",
    fees: [
      { type: "Admission Fee (One time)", amount: 20000 },
      { type: "Registration Fee (Per Semester)", amount: 15000 },
      { type: "Co-curricular Activities Fee (Per Semester)", amount: 500 },
      { type: "Campus Activities Fee (Per Month)", amount: 1000 },
      { type: "Monthly Installment of Credit fees", amount: 6000 },
    ],
  },
  {
    id: 3,
    name: "B.Sc. in EEE",
    fees: [
      { type: "Admission Fee (One time)", amount: 20000 },
      { type: "Registration Fee (Per Semester)", amount: 15000 },
      { type: "Co-curricular Activities Fee (Per Semester)", amount: 500 },
      { type: "Campus Activities Fee (Per Month)", amount: 1000 },
      { type: "Monthly Installment of Credit fees", amount: 6000 },
    ],
  },

]

const AdmissionBanner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="z-50 items-center text-center bg-primary bg-opacity-70 p-9 rounded-md space-y-2">
          <h2 className="text-3xl text-white font-bold text-opacity-100">
            Academic Information
          </h2>
        </div>
      </div>
      <div className="mx-auto w-[70%] mt-8">
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex p-1 bg-gray-200 rounded-full">
            {({ selectedIndex }) => (
              <>
                {programData.map((program, index) => (
                  <Tab
                    key={index}
                    className={`w-full text-center py-2 px-4 text-gray-600 ${
                      selectedIndex === index
                        ? "hover:text-gray-800 transition-all duration-300 rounded-full border-b-2 border-blue-500"
                        : "hover:text-gray-800 transition-all duration-300 rounded-full"
                    }`}
                  >
                    {program.name}
                  </Tab>
                ))}
              </>
            )}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {programData.map((program, index) => (
              <Tab.Panel key={index}>
                <div className="p-4 bg-white rounded-md shadow-md">
                  <div className="bg-slate-400 p-3 rounded-md shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      <span className="text-white">#{program.id}</span>{" "}
                      Programme Fee Structure
                    </h3>
                  </div>

                  <p className="mt-4">
                    The below fee structure will allow you to view the fees for
                    your respective program and course.
                  </p>

                  <h5 className="text-md font-bold mt-5 mb-1">
                    <FaCogs />
                    {program.name}
                  </h5>
                  <div className="overflow-x-auto">
                    <table className="w-full mt-2 table-auto">
                      <thead>
                        <tr className="bg-gray-200 text-center">
                          <th className="px-4 py-2">Fee Type</th>
                          <th className="px-4 py-2">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {program.fees.map((fee, feeIndex) => (
                          <tr key={feeIndex}>
                            <td className="border px-4 py-2">{fee.type}</td>
                            <td className="border px-4 py-2 text-center">
                              {fee.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default AdmissionBanner;
