
import { useState } from "react";
import { useGetAllStudentsQuery } from "../../../../Redux/features/student/student.api";
import SearchById from "../../../../Components/Search/SearchById";

const StudentsLists = () => {
  const [params, setParams] = useState("");
  const { data } = useGetAllStudentsQuery(params);
  const SearchPlaceHolderName = "Id";
  const students = data?.data;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        {/* search */}
        <label className="sr-only">Search</label>
        <SearchById
          setParams={setParams}
          SearchPlaceHolderName={SearchPlaceHolderName}
        />

      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              Department
            </th>
            <th scope="col" className="px-6 py-3">
              Student ID
            </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => (
            <tr
              key={student?._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  className="w-10 h-10 rounded-full"
                  src={student?.admissionRequestId?.profileImage}
                  alt={`Profile of ${student?.admissionRequestId?.name?.lastName}`}
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    {student?.admissionRequestId?.name.firstName +
                      ' ' +
                      student?.admissionRequestId?.name.lastName}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">
                {student?.admissionRequestId?.email}
              </td>
              <td className="px-6 py-4">
                {student?.admissionRequestId?.department?.shortForm}
              </td>
              <td className="px-6 py-4">{student?.studentId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentsLists
