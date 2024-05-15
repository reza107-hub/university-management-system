import Loader from '../../../../Components/Loader/Loader'
import useAuth from '../../../../Hooks/useAuth'
import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import {
  useGetSemesterRoutineQuery,
  useGetSingleStudentDataFromDbQuery,
} from '../../../../Redux/features/student/student.api'

const OfferedCourses = () => {
  const { user, loading } = useAuth()
  const { data: ongoingSemester, isLoading: isOngoingSemesterLoading } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  const { data: studentData, isLoading: isStudentDataLoading } =
    useGetSingleStudentDataFromDbQuery(user?.email, { skip: loading })
  const { data: Courses } = useGetSemesterRoutineQuery(
    studentData?.data?.studentId,
    {
      skip: isStudentDataLoading,
    },
  )

  if (isOngoingSemesterLoading) {
    return <Loader />
  }

  const ongoingSemesterOfferedCoursesLists = Courses?.data?.filter(
    (result) => result?.semesterRegistrationId?._id === ongoingSemester?.data?._id,
  )


  return (
    <div>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your {ongoingSemester?.data?.academicSemester?.name}{' '}
        {ongoingSemester?.data?.academicSemester?.year} Offered Courses
      </p>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Google Classroom Code
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
                  {result?.classroomCode ? result?.classroomCode : 'Will publish by faculty soon'}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default OfferedCourses
