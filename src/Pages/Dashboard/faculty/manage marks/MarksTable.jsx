import { useParams } from 'react-router-dom'
import { useGetSingleOfferedCourseQuery } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import Loader from '../../../../Components/Loader/Loader'
import { useGetAttendanceOfThisCourseQuery } from '../../../../Redux/features/attendance/attendance.api'
import { useState } from 'react'
import {
  useCreateCourseMarksOf40Mutation,
  useCreateCourseMarksOf60Mutation,
  useGetCourseMarksOf40Query,
  useGetCourseMarksOf60Query,
  useUpdateCourseMarksOf40Mutation,
  useUpdateCourseMarksOf60Mutation,
} from '../../../../Redux/features/course marks/courseMarks.api'

const MarksTable = () => {
  const [marks, setMarks] = useState()
  const { id } = useParams()
  const { data: offeredCourse, isLoading: isOfferedCourseLoading } =
    useGetSingleOfferedCourseQuery(id)
  const { data: attendanceData, isLoading: isAttendanceDataLoading } =
    useGetAttendanceOfThisCourseQuery(id)
  const [createCourseMarksOf60] = useCreateCourseMarksOf60Mutation()
  const [updateCourseMarksOf60] = useUpdateCourseMarksOf60Mutation()
  const [createCourseMarksOf40] = useCreateCourseMarksOf40Mutation()
  const [updateCourseMarksOf40] = useUpdateCourseMarksOf40Mutation()
  const { data: courseMarksDataOf60Marks } = useGetCourseMarksOf60Query(
    offeredCourse?.data?.courseId?._id,
  )
  const { data: courseMarksDataOf40Marks } = useGetCourseMarksOf40Query(
    offeredCourse?.data?.courseId?._id,
  )
  const allStudentIds = offeredCourse?.data?.sectionId?.student_ids
  const filteredStudentIds = courseMarksDataOf60Marks?.data?.filter((item) =>
    allStudentIds?.includes(item?.studentId),
  )
  const filtered40MarksStudentIds = courseMarksDataOf40Marks?.data?.filter(
    (item) => allStudentIds?.includes(item?.studentId),
  )

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

  const onSubmitOf60Marks = async (studentId) => {
    const data = {
      courseId: offeredCourse.data.courseId._id,
      semesterRegistrationId: offeredCourse.data.semesterRegistrationId._id,
      departmentId: offeredCourse.data.departmentId._id,
      facultyId: offeredCourse.data.facultyId._id,
      studentId: studentId,
      marks: Number(calculateAttendanceMarks(studentId)) + Number(marks),
    }
    await createCourseMarksOf60(data).unwrap()
  }

  const update60Marks = async (studentId) => {
    const data = filteredStudentIds?.find(
      (result) => result.studentId === studentId,
    )
    const updatedData = {
      _id: data._id,
      marks: Number(calculateAttendanceMarks(studentId)) + Number(marks),
    }
    await updateCourseMarksOf60(updatedData).unwrap()
  }

  const onSubmitOf40Marks = async (studentId) => {
    const data = {
      courseId: offeredCourse.data.courseId._id,
      semesterRegistrationId: offeredCourse.data.semesterRegistrationId._id,
      departmentId: offeredCourse.data.departmentId._id,
      facultyId: offeredCourse.data.facultyId._id,
      studentId: studentId,
      marks: Number(calculateAttendanceMarks(studentId)) + Number(marks),
    }
    await createCourseMarksOf40(data).unwrap()
  }

  const update40Marks = async (studentId) => {
    const data = filteredStudentIds?.find(
      (result) => result.studentId === studentId,
    )
    const updatedData = {
      _id: data._id,
      marks: Number(calculateAttendanceMarks(studentId)) + Number(marks),
    }
    await updateCourseMarksOf40(updatedData).unwrap()
  }

  if (isOfferedCourseLoading || isAttendanceDataLoading) {
    return <Loader />
  }
  return (
    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Student Id
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Attendance Marks (10 Marks)
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              50 Marks
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              40 Marks
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {offeredCourse?.data &&
            offeredCourse?.data?.sectionId?.student_ids?.map((studentId) => (
              <tr
                key={studentId}
                className={` border-b dark:bg-gray-800 dark:border-gray-700 ${
                  filteredStudentIds?.find(
                    (result) => result.studentId === studentId,
                  )?.status === 'R'
                    ? 'bg-red-200'
                    : 'bg-white'
                }`}
              >
                <td className="px-6 py-4 font-bold text-lg">{studentId}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {calculateAttendanceMarks(studentId)}{' '}
                  {/* Calculate attendance marks */}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  <input
                    placeholder={
                      `${Number(filteredStudentIds?.find((result) => result.studentId === studentId)?.marks) - Number(calculateAttendanceMarks(studentId))}` ||
                      ''
                    }
                    className="w-[20%] text-center"
                    type="number"
                    step="0.1"
                    max="50"
                    onChange={(e) => {
                      if (parseFloat(e.target.value) > 50) {
                        e.target.value = 50
                        setMarks(e.target.value)
                      }
                      setMarks(e.target.value)
                    }}
                  />
                  {filteredStudentIds?.find(
                    (result) => result.studentId === studentId,
                  )?.marks ? (
                    <button
                      onClick={() => update60Marks(studentId)}
                      className="hover:underline ml-2"
                    >
                      Update
                    </button>
                  ) : (
                    <button
                      onClick={() => onSubmitOf60Marks(studentId)}
                      className="hover:underline ml-2"
                    >
                      Submit
                    </button>
                  )}
                </td>

                {/* 40 marks */}

                <td className="px-6 py-4 font-bold text-lg">
                  {filteredStudentIds?.find(
                    (result) => result.studentId === studentId,
                  )?.status === 'R' ? (
                    <></>
                  ) : filteredStudentIds?.find(
                      (result) => result.studentId === studentId,
                    )?.marks ? (
                    <>
                      <input
                        placeholder={
                          `${Number(filtered40MarksStudentIds?.find((result) => result.studentId === studentId)?.marks) - Number(calculateAttendanceMarks(studentId))}` ||
                          ''
                        }
                        className="w-[20%] text-center"
                        type="number"
                        step="0.1"
                        max="40"
                        onChange={(e) => {
                          if (parseFloat(e.target.value) > 40) {
                            e.target.value = 40
                            setMarks(e.target.value)
                          }
                          setMarks(e.target.value)
                        }}
                      />

                      {filtered40MarksStudentIds?.find(
                        (result) => result.studentId === studentId,
                      )?.marks ? (
                        <button
                          onClick={() => update40Marks(studentId)}
                          className="hover:underline ml-2"
                        >
                          Update
                        </button>
                      ) : (
                        <button
                          onClick={() => onSubmitOf40Marks(studentId)}
                          className="hover:underline ml-2"
                        >
                          Submit
                        </button>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default MarksTable
