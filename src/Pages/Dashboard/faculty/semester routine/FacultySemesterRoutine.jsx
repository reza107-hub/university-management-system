import { Link } from 'react-router-dom'
import Loader from '../../../../Components/Loader/Loader'
import useAuth from '../../../../Hooks/useAuth'
import { useGetPresentUserWithAdditionalInfoQuery } from '../../../../Redux/features/User/UserApi'
import {
  useGetFacultyListQuery,
  useGetFacultySemesterRoutineQuery,
} from '../../../../Redux/features/faculty/FacultyApi'

const FacultySemesterRoutine = () => {
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
  const singleCourse = offeredCourses?.data?.find(
    (result) => result?.facultyId === currentFaculty?._id,
  )
  const semesterTitle = singleCourse?.academicSemesterId

  const reducedData = offeredCourses?.data?.reduce((acc, course) => {
    const { routine, courseId, sectionId } = course
    const { title } = courseId
    const { name } = sectionId

    routine.forEach((item) => {
      acc.push({
        offeredCourseId: course._id,
        days: item.days,
        startTime: item.startTime,
        endTime: item.endTime,
        roomNo: item.roomNo,
        courseTitle: title,
        sectionName: name,
      })
    })

    return acc
  }, [])
  const sortDays = (days) => {
    const order = {
      Sat: 0,
      Sun: 1,
      Mon: 2,
      Tue: 3,
      Wed: 4,
      Thu: 5,
      Fri: 6,
    }
    return days.sort((a, b) => order[a.days] - order[b.days])
  }

  // Use this function to sort your reducedData
  const sortedData = sortDays(reducedData)
  return (
    <div>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your {semesterTitle?.name} {semesterTitle?.year} routine
      </p>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Days
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Start Time - End Time
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Batch `(Section)`
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Room No.
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {sortedData &&
            sortedData.map((result, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{result?.days}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.startTime} - {result?.endTime}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.courseTitle}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.sectionName}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.roomNo}
                </td>

                <td className="px-6 py-4">
                  <Link
                  className='cursor-pointer text-primary hover:underline'
                    to={`/dashboard/offered-course/${result.offeredCourseId}`}
                  >
                    See Details
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default FacultySemesterRoutine
