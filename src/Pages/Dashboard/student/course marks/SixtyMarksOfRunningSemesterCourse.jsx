import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'

import { useGetCoursesMarksOf60ForShowingStudentQuery } from '../../../../Redux/features/course marks/courseMarks.api'
import useAuth from '../../../../Hooks/useAuth'
import { useGetSingleStudentDataFromDbQuery } from '../../../../Redux/features/student/student.api'

const SixtyMarksOfRunningSemesterCourse = () => {
  const { user, loading } = useAuth()
  const { data: studentData } = useGetSingleStudentDataFromDbQuery(
    user?.email,
    { skip: loading },
  )

  const { data: ongoingSemesterRegistration } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  const { data: CoursesMarksOf60 } =
    useGetCoursesMarksOf60ForShowingStudentQuery(studentData?.data?.studentId)
  const getOnGoingSemesterCourseMarks = CoursesMarksOf60?.data?.filter(
    (result) =>
      result?.semesterRegistrationId === ongoingSemesterRegistration?.data?._id,
  )

  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Marks
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {getOnGoingSemesterCourseMarks?.map((mark, i) => (
            <tr
              key={i}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-bold text-lg">
                {mark?.courseId?.title}
              </td>
              <td className="px-6 py-4 font-bold text-lg">{mark?.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SixtyMarksOfRunningSemesterCourse
