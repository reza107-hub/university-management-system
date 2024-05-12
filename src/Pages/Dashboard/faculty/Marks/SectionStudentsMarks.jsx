import { useParams } from 'react-router-dom'
import { useGetSingleOfferedCourseQuery } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import { useForm, Controller } from 'react-hook-form'
import Loader from '../../../../Components/Loader/Loader'
import Swal from 'sweetalert2'
import {
  useCreateCourseMarksOf40Mutation,
  useCreateCourseMarksOf60Mutation,
  useGetCourseMarksOf60Query,
} from '../../../../Redux/features/course marks/courseMarks.api'
import { useEffect, useState } from 'react'
import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'

const SectionStudentsMarks = () => {
  const { data: ongoingSemester } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  const [createCourseMarksOf60] = useCreateCourseMarksOf60Mutation()
  const [createCourseMarksOf40] = useCreateCourseMarksOf40Mutation()
  const { id } = useParams()
  const { data: offeredCourse } = useGetSingleOfferedCourseQuery(id)
  const { data: courseMarksDataOf60Marks } = useGetCourseMarksOf60Query(
    offeredCourse?.data?.courseId?._id,
  )

  const ongoingSemesterCourseMarksDataOf60Marks =
    courseMarksDataOf60Marks?.data?.filter(
      (result) => result?.semesterRegistrationId === ongoingSemester?.data?._id,
    )

  const { handleSubmit, control } = useForm()

  const [title, setTitle] = useState('')
  const [filteredStudentIds, setFilteredStudentIds] = useState([])

  const onSubmit = async (data) => {
    const formattedData = filteredStudentIds.map((studentId) => ({
      courseId: offeredCourse.data.courseId._id,
      semesterRegistrationId: offeredCourse.data.semesterRegistrationId._id,
      departmentId: offeredCourse.data.departmentId._id,
      facultyId: offeredCourse.data.facultyId._id,
      studentId: studentId,
      marks: Number(data.marks[studentId]),
    }))

    try {
      Swal.fire({
        title: 'Wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })

      let res
      if (ongoingSemesterCourseMarksDataOf60Marks.length > 0) {
        res = await createCourseMarksOf40(formattedData).unwrap()
      } else {
        res = await createCourseMarksOf60(formattedData).unwrap()
      }

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

  useEffect(() => {
    const allStudentIds = offeredCourse?.data?.sectionId?.student_ids
    const NRStudentIds = ongoingSemesterCourseMarksDataOf60Marks
      ?.filter((item) => item.status === 'NR')
      ?.map((item) => item.studentId)
    const filteredStudentIds = allStudentIds?.filter((studentId) =>
      NRStudentIds?.includes(studentId),
    )
    if (filteredStudentIds?.length > 0) {
      setFilteredStudentIds(filteredStudentIds)
      setTitle('Enter your final 40 marks')
    } else {
      const allStudentIds = offeredCourse?.data?.sectionId?.student_ids
      setFilteredStudentIds(allStudentIds)
      setTitle('Enter your final 60 marks')
    }
  }, [
    courseMarksDataOf60Marks,
    offeredCourse,
    ongoingSemesterCourseMarksDataOf60Marks,
  ])

  if (!offeredCourse || !offeredCourse.data) {
    return <Loader />
  }

  return (
    <div>
      <p className="text-2xl text-primary font-bold text-center">
        Students List Of {offeredCourse.data.sectionId.name}
      </p>
      <p className="text-lg text-center font-bold mb-4">{title}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {filteredStudentIds?.map((studentId) => (
          <div key={studentId} className="flex items-center mb-4">
            <span className="mr-2">{studentId}:</span>
            <Controller
              name={`marks[${studentId}]`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <input
                  {...field}
                  type="number"
                  id={`mark_${studentId}`}
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-1/3 shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              )}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default SectionStudentsMarks
