import { useParams } from 'react-router-dom'
import { useGetSingleOfferedCourseQuery } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import Loader from '../../../../Components/Loader/Loader'
import { useGetAllStudentsQuery } from '../../../../Redux/features/student/student.api'
import { Link } from 'react-router-dom'

const OfferedCourseDetails = () => {
  const { id } = useParams()
  const { data: offeredCourse } = useGetSingleOfferedCourseQuery(id)
  const { data: students } = useGetAllStudentsQuery(undefined)

  const matchedStudents = students?.data?.filter((student) =>
    offeredCourse?.data?.sectionId?.student_ids?.includes(student?.studentId),
  )

  if (!offeredCourse || !offeredCourse?.data) {
    return <Loader />
  }
  return (
    <div>
      <div>
        <Link to={`/dashboard/make-attendance/${id}`}>
          <button className="btn-primary">Make Attendance</button>
        </Link>
      </div>
      <p className="text-2xl text-primary font-bold text-center">
        Students List Of {offeredCourse?.data?.sectionId?.name}
      </p>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Student Id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Department
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {matchedStudents &&
            matchedStudents.map((result, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.studentId}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.admissionRequestId?.name?.firstName}{' '}
                  {result?.admissionRequestId?.name?.lastName}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.admissionRequestId?.email}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.admissionRequestId?.department?.shortForm}
                </td>

                {/* <td className="px-6 py-4">
                  <Link
                    className="cursor-pointer text-primary hover:underline"
                    to={`/dashboard/offered-course/${result.offeredCourseId}`}
                  >
                    See Details
                  </Link>
                </td> */}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default OfferedCourseDetails
