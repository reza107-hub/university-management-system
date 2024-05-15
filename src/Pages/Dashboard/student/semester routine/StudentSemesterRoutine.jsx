import { useState } from 'react'
import Loader from '../../../../Components/Loader/Loader'
import useAuth from '../../../../Hooks/useAuth'
import {
  useGetSemesterRoutineQuery,
  useGetSingleStudentDataFromDbQuery,
} from '../../../../Redux/features/student/student.api'
import SeeFacultyInfoModal from './SeeFacultyInfoModal'
import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'

const StudentSemesterRoutine = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [faculty, setFaculty] = useState()
  const { user, loading } = useAuth()
  const { data: studentData, isLoading: isStudentDataLoading } =
    useGetSingleStudentDataFromDbQuery(user?.email, { skip: loading })
  const { data: Courses } = useGetSemesterRoutineQuery(
    studentData?.data?.studentId,
    {
      skip: isStudentDataLoading,
    },
  )

  const { data: ongoingSemester, isLoading: isOngoingSemesterLoading } =
    useGetOngoingSemesterRegistrationQuery(undefined)

  if (isStudentDataLoading || isOngoingSemesterLoading) {
    return <Loader />
  }

  if (!Courses || !Courses?.data?.length) {
    return <p className="text-center text-primary font-bold text-2xl mt-3">There are no courses found, so no section is available for you.</p>
  }

  const ongoingSemesterOfferedCoursesLists = Courses?.data?.filter(
    (result) =>
      result?.semesterRegistrationId?._id === ongoingSemester?.data?._id,
  )

  const modifyData = ongoingSemesterOfferedCoursesLists?.reduce(
    (acc, course) => {
      const { routine, courseId, facultyId } = course
      const { title } = courseId

      routine.forEach((item) => {
        acc.push({
          offeredCourseId: course._id,
          days: item.days,
          startTime: item.startTime,
          endTime: item.endTime,
          roomNo: item.roomNo,
          courseTitle: title,
          faculty: facultyId,
        })
      })

      return acc
    },
    [],
  )

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
  const sortedData = sortDays(modifyData)

  const openModal = (faculty) => {
    setFaculty(faculty)
    setIsOpen(!isOpen)
  }
  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <SeeFacultyInfoModal
        isOpen={isOpen}
        closeModal={closeModal}
        faculty={faculty}
      />
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your {ongoingSemester?.data?.academicSemester?.name}{' '}
        {ongoingSemester?.data?.academicSemester?.year} routine
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
              Room No.
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Faculty Name
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
                  {result?.roomNo}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  <button
                    onClick={() => openModal(result?.faculty)}
                    className="underline"
                  >
                    {result?.faculty.name}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentSemesterRoutine
