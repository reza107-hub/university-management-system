import useAuth from '../../../../Hooks/useAuth'
import { useGetAcademicRecordQuery } from '../../../../Redux/features/course marks/courseMarks.api'
import { useGetSingleStudentDataFromDbQuery } from '../../../../Redux/features/student/student.api'

const AcademicHistory = () => {
  const { user, loading } = useAuth()
  const { data: studentData } = useGetSingleStudentDataFromDbQuery(
    user?.email,
    { skip: loading },
  )
  const { data: academicRecordData } = useGetAcademicRecordQuery(
    studentData?.data?.studentId,
    { skip: loading || !studentData?.data?.studentId },
  )

  // Function to calculate total completed credits where status is 'Regular'
  const calculateTotalCompletedCredits = () => {
    let totalCredits = 0
    if (academicRecordData && academicRecordData.success) {
      academicRecordData.data.forEach((record) => {
        if (record.status === 'Regular') {
          totalCredits += record.courseId.credits
        }
      })
    }
    return totalCredits
  }

  const calculateOverallCGPA = () => {
    let totalCGPA = 0
    let coursesCounted = 0

    if (academicRecordData && academicRecordData.success) {
      academicRecordData.data.forEach((record) => {
        if (record.grade !== 'F') {
          totalCGPA += record.cgpa
          coursesCounted += 1
        }
      })
    }

    // Avoid division by zero
    return coursesCounted > 0 ? (totalCGPA / coursesCounted).toFixed(2) : 'N/A'
  }

  return (
    <div>
      <div className="mb-4">
        <p>
          Total Completed Credits (Regular): {calculateTotalCompletedCredits()}
        </p>
        <p>Overall CGPA: {calculateOverallCGPA()}</p>
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course Title
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Course Code
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Credits
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              CGPA
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Grade
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {academicRecordData &&
            academicRecordData.data.map((record, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4">{record.courseId.title}</td>
                <td className="px-6 py-4">{record.courseId.code}</td>
                <td className="px-6 py-4">{record.courseId.credits}</td>
                <td className="px-6 py-4">{record.cgpa}</td>
                <td className="px-6 py-4">{record.grade}</td>
                <td className="px-6 py-4">{record.status}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default AcademicHistory
