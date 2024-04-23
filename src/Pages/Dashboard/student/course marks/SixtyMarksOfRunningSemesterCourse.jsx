import { useEffect, useState } from 'react'
import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import { useGetOngoingSemesterOfferedCoursesQuery } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import { useGetCoursesMarksOf60ForShowingStudentMutation } from '../../../../Redux/features/course marks/courseMarks.api'
import useAuth from '../../../../Hooks/useAuth'
import { useGetSingleStudentDataFromDbQuery } from '../../../../Redux/features/student/student.api'

const SixtyMarksOfRunningSemesterCourse = () => {
  const { user, loading } = useAuth()
  const { data: studentData } = useGetSingleStudentDataFromDbQuery(
    user?.email,
    { skip: loading },
  )
  const [coursesId, setCoursesId] = useState([]) // Use state to manage coursesId array
  const [sixtyMarks, setSixtyMarks] = useState([]) // Use state to manage coursesId array

  const { data: ongoingSemesterRegistration } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  const { data: ongoingSemesterOfferedCourses } =
    useGetOngoingSemesterOfferedCoursesQuery(
      ongoingSemesterRegistration?.data?._id,
    )

  const [getCoursesMarksOf60, { data: getCoursesMarksOf60Data }] =
    useGetCoursesMarksOf60ForShowingStudentMutation()

  useEffect(() => {
    if (getCoursesMarksOf60Data && getCoursesMarksOf60Data.data) {
      // Use map to create a new array instead of mutating coursesId
      const data = getCoursesMarksOf60Data.data.filter(
        (result) => result.studentId === studentData.data.studentId,
      )
      setSixtyMarks(data) // Update state with new array
    }
  }, [getCoursesMarksOf60Data, studentData]) // Dependency array only contains the necessary dependency

  useEffect(() => {
    if (ongoingSemesterOfferedCourses && ongoingSemesterOfferedCourses.data) {
      // Use map to create a new array instead of mutating coursesId
      const ids = ongoingSemesterOfferedCourses.data.map(
        (result) => result.courseId._id,
      )
      setCoursesId(ids) // Update state with new array
    }
  }, [ongoingSemesterOfferedCourses]) // Dependency array only contains the necessary dependency

  useEffect(() => {
    // Trigger getCoursesMarksOf60 when coursesId changes
    if (coursesId.length > 0) {
      const body = { payload: coursesId }
      getCoursesMarksOf60(body)
    }
  }, [coursesId, getCoursesMarksOf60]) // Ensure getCoursesMarksOf60 is included in the dependency array

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
          {sixtyMarks.map((mark, i) => (
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
