import { useGetAttendanceOfThisCourseQuery } from '../../../../Redux/features/attendance/attendance.api'
import { useParams } from 'react-router-dom'

const AttendanceMarks = () => {
  const { id } = useParams()
  const { data: attendanceData } = useGetAttendanceOfThisCourseQuery(id)

  // Function to calculate attendance marks out of 10 for each student
  const calculateAttendanceMarks = (studentId) => {
    const totalDates = attendanceData.data.length // Total number of dates
    const attendedDates = attendanceData.data.filter((record) =>
      record.studentsId.includes(studentId),
    ).length // Number of dates the student attended
    const attendancePercentage = (attendedDates / totalDates) * 100 // Calculate attendance percentage
    const attendanceMarks = (attendancePercentage / 100) * 10 // Convert percentage to marks out of 10
    return attendanceMarks.toFixed(2) // Round to 2 decimal places
  }

  return (
    <div>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Attendance Marks
      </p>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Student ID
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Attendance Marks
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {attendanceData?.data?.[0]?.offeredCourseId?.sectionId?.student_ids?.map(
            (id) => (
              <tr
                key={id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{id}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {calculateAttendanceMarks(id)}{' '}
                  {/* Calculate attendance marks */}
                </td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AttendanceMarks
