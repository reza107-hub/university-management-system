import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";

const DepartmentTab = ({
  departmentData,
  setSelectedDept,
  activeDeptBatchData,
  handleToggleAdmissionGoing,
}) => {
  return (
    <div className="mx-auto w-[70%] mt-8">
      <Tab.Group defaultIndex={0}>
        <Tab.List className="flex p-1 bg-gray-200 rounded-full">
          {({ selectedIndex }) => (
            <>
              {departmentData?.map((dept, index) => (
                <Tab
                  key={index}
                  onClick={setSelectedDept(selectedIndex)}
                  className={`w-full text-center py-2 px-4 text-gray-600 ${
                    selectedIndex === index
                      ? 'hover:text-gray-800 transition-all duration-300 rounded-full border-b-2 border-blue-500'
                      : 'hover:text-gray-800 transition-all duration-300 rounded-full'
                  }`}
                >
                  {dept.shortForm}
                </Tab>
              ))}
            </>
          )}
        </Tab.List>
        <Tab.Panels className="mt-2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Batch No
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Department
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Action
                </th>
                <th scope="col" className="px-6 py-3 text-center"></th>
              </tr>
            </thead>
            <tbody className="text-center">
              {activeDeptBatchData?.map((result) =>
                activeDeptBatchData ? (
                  <tr
                    key={result?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-bold text-lg">
                      {result?.batchNumber}
                    </td>
                    <td className="px-6 py-4 font-bold text-lg">
                      {result?.deptId.shortForm}
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          handleToggleAdmissionGoing(
                            result?.isAdmissionGoing,
                            result?._id,
                          )
                        }
                        disabled={!result?.isAdmissionGoing}
                        className={`${
                          result?.isAdmissionGoing ? 'btn-primary' : ''
                        }`}
                      >
                        {result?.isAdmissionGoing
                          ? 'Close Admission'
                          : 'Admission Closed'}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button className="underline underline-offset-4 hover:text-primary hover:underline-offset-1">
                        <Link
                          to={`/dashboard/batch/batch-details/${result?._id}`}
                        >
                          See Details
                        </Link>
                      </button>
                    </td>
                  </tr>
                ) : (
                  <tr key={result._id}></tr>
                ),
              )}
            </tbody>
          </table>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

export default DepartmentTab
