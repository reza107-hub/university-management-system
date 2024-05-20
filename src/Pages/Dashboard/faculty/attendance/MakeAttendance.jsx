import Loader from '../../../../Components/Loader/Loader'
import useAuth from '../../../../Hooks/useAuth'
import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import { useGetPresentUserWithAdditionalInfoQuery } from '../../../../Redux/features/User/UserApi'
import {
  useGetFacultyListQuery,
  useGetFacultySemesterRoutineQuery,
} from '../../../../Redux/features/faculty/FacultyApi'
import { Link } from 'react-router-dom'

const MakeAttendance = () => {
  const { user, loading } = useAuth()
  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useGetPresentUserWithAdditionalInfoQuery(user?.email)
  const { data: facultyLists, isLoading: isFacultyListsLoading } =
    useGetFacultyListQuery(undefined)
  const currentFaculty = facultyLists?.data?.find(
    (result) => result?.userAdditionalInfoId?._id === currentUser?.data?._id,
  )
  const { data: ongoingSemester, isLoading: isOngoingSemesterLoading } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  const { data: offeredCourses, isLoading: isOfferedCoursesLoading } =
    useGetFacultySemesterRoutineQuery(currentFaculty?._id)

  const ongoingSemesterOfferedCoursesLists = offeredCourses?.data?.filter(
    (result) => result?.semesterRegistrationId === ongoingSemester?.data?._id,
  )

  if (
    loading ||
    isCurrentUserLoading ||
    isFacultyListsLoading ||
    isOngoingSemesterLoading ||
    isOfferedCoursesLoading
  ) {
    return <Loader />
  }
  return (
    <>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your {ongoingSemester?.data?.academicSemester?.name}{' '}
        {ongoingSemester?.data?.academicSemester?.year} Courses
      </p>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Batch `(Section)`
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {ongoingSemesterOfferedCoursesLists &&
            ongoingSemesterOfferedCoursesLists?.map((result, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.courseId?.title}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.departmentId?.shortForm} - {result?.sectionId?.name}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.roomNo}
                </td>

                <td className="px-6 py-4">
                  <Link to={`/dashboard/make-attendance/${result?._id}`}>
                    <button className="btn-primary">Make Attendance</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default MakeAttendance
