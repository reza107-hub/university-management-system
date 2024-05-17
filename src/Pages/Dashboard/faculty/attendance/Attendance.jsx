import { useParams } from 'react-router-dom'
import { useGetSingleOfferedCourseQuery } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import { useGetAllStudentsQuery } from '../../../../Redux/features/student/student.api'
import { useForm, Controller } from 'react-hook-form'
import { useCreateAttendanceMutation } from '../../../../Redux/features/attendance/attendance.api'
import Swal from 'sweetalert2'

const Attendance = () => {
  const [createAttendance] = useCreateAttendanceMutation()
  const { id } = useParams()
  const { data: offeredCourse } = useGetSingleOfferedCourseQuery(id)
  const { data: students } = useGetAllStudentsQuery(undefined)

  const matchedStudents = students?.data?.filter((student) =>
    offeredCourse?.data?.sectionId?.student_ids?.includes(student?.studentId),
  )
  const {
    handleSubmit,
    control,
    register,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      studentsId: [],
    },
  })
  const onSubmit = async(data) => {
    data.offeredCourseId = id
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await createAttendance(data).unwrap()
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
    reset()
  }

  const handleCheckboxChange = (studentId, checked) => {
    const studentsId = getValues('studentsId')
    if (checked) {
      setValue('studentsId', [...studentsId, studentId])
    } else {
      setValue(
        'studentsId',
        studentsId.filter((id) => id !== studentId),
      )
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <label className="col-sm-2 col-form-label">Enter the date</label>
        <input
          {...register('date', { required: true })}
          type="date"
          className="form-control rounded-md text-black w-1/3"
        />
        {errors.dateOfBirth && (
          <span className="text-red-700">This field is required</span>
        )}
      </div>
      <div>
        <p className="mt-3">Select Student IDs</p>
        {matchedStudents?.map((student) => (
          <div className='flex gap-3 items-center' key={student?._id}>
            <Controller
              name="studentsId"
              control={control}
              render={({ field }) => (
                <input
                  type="checkbox"
                  value={student?.studentId}
                  onChange={(e) =>
                    handleCheckboxChange(student?.studentId, e.target.checked)
                  }
                  checked={field.value.includes(student?.studentId)}
                />
              )}
            />
            {student?.studentId}
          </div>
        ))}
      </div>
      <button className="btn-primary mt-5" type="submit" value="submit">
        Submit
      </button>
    </form>
  )
}

export default Attendance
