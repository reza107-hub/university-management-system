import { useParams } from 'react-router-dom'
import { useGetSingleOfferedCourseQuery } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import {
  useGetCourseMarksOf60Query,
  useUpdateCourseMarksOf60Mutation,
} from '../../../../Redux/features/course marks/courseMarks.api'
import UpdateMarksModal from './UpdateMarksModal'
import { useState } from 'react'
import Swal from 'sweetalert2'

const See60Marks = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [updateMarks, setUpdateMarks] = useState(0)
  const [updateMarksId, setUpdateMarksId] = useState('')
  const { id } = useParams()
  const { data: offeredCourse } = useGetSingleOfferedCourseQuery(id)
  const { data: courseMarksDataOf60Marks } = useGetCourseMarksOf60Query(
    offeredCourse?.data?.courseId?._id,
  )
  const [updateCourseMarksOf60] = useUpdateCourseMarksOf60Mutation()

  const allStudentIds = offeredCourse?.data?.sectionId?.student_ids
  const filteredStudentIds = courseMarksDataOf60Marks?.data?.filter((item) =>
    allStudentIds?.includes(item?.studentId),
  )

  const openModal = (id) => {
    setUpdateMarksId(id)
    setIsOpen(!isOpen)
  }

  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  const onSubmit = async () => {
    setIsOpen(!isOpen)
    try {
      Swal.fire({
        title: 'Wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })

      const res = await updateCourseMarksOf60({
        _id: updateMarksId,
        marks: Number(updateMarks),
      }).unwrap()

      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 1500,
      })
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
  }

  return (
    <div>
      <UpdateMarksModal
        isOpen={isOpen}
        closeModal={closeModal}
        setUpdateMarks={setUpdateMarks}
        onSubmit={onSubmit}
      />
      <h2 className="text-2xl font-bold text-center my-4">
        Course Marks (60 Marks)
      </h2>
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">Course ID</th>
            <th className="px-4 py-2">Student ID</th>
            <th className="px-4 py-2">Marks</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudentIds?.map((student) => (
            <tr
              key={student._id}
              className={student.status === 'R' ? 'bg-red-200' : ''}
            >
              <td className="border px-4 py-2">{student?.courseId?.title}</td>
              <td className="border px-4 py-2">{student?.studentId}</td>
              <td className="border px-4 py-2">{student?.marks}</td>
              <td className="border px-4 py-2">{student?.status}</td>
              <td className="border px-4 py-2">
                <button
                  className="hover:underline hover:text-primary"
                  onClick={() => openModal(student._id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default See60Marks
