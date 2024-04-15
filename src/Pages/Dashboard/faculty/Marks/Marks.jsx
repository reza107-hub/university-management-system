import { Link } from "react-router-dom";
import Loader from "../../../../Components/Loader/Loader";
import useAuth from "../../../../Hooks/useAuth";
import { useGetPresentUserWithAdditionalInfoQuery } from "../../../../Redux/features/User/UserApi";
import { useGetFacultyListQuery, useGetFacultySemesterRoutineQuery } from "../../../../Redux/features/faculty/FacultyApi";

const Marks = () => {
    const { user } = useAuth()
    const { data: currentUser } = useGetPresentUserWithAdditionalInfoQuery(
      user?.email,
    )
    const { data: facultyLists } = useGetFacultyListQuery(undefined)
    const currentFaculty = facultyLists?.data?.find(
      (result) => result?.userAdditionalInfoId?._id === currentUser?.data?._id,
    )

    const { data: offeredCourses } = useGetFacultySemesterRoutineQuery(
      currentFaculty?._id,
    )
    if (!offeredCourses || !offeredCourses?.data?.length) {
      return <Loader />
    }
  return (
    <div>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your Classes
      </p>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Batch
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Department
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {offeredCourses?.data &&
            offeredCourses?.data?.map((result, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.courseId?.title}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.sectionId?.name}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.departmentId?.name}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  <Link className="text-xs hover:underline" to={`${result?._id}`}>Add Marks</Link>
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  <Link className="text-xs hover:underline" to={`see-60-marks/${result?._id}`}>See 60 Marks</Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
};

export default Marks
