import { useNavigate } from 'react-router-dom'
import { useFieldArray, useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useGetSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import { useGetDepartmentQuery } from '../../../../Redux/features/Department/department.api'
import { useGetAllSectionQuery } from '../../../../Redux/features/BatchApi/BatchApi'
import { useGetFacultyListQuery } from '../../../../Redux/features/faculty/FacultyApi'
import Swal from 'sweetalert2'
import { useCreateOfferedCourseMutation } from '../../../../Redux/features/offeredCourse/offeredCourse.api'

const CreateOfferCourse = ({
  isOpenForOfferCourse,
  setIsOpenForOfferCourse,
  courseId,
}) => {
  const navigate = useNavigate()
  const [createCourseOffer] = useCreateOfferedCourseMutation()
  const { data: sectionsData } = useGetAllSectionQuery(undefined)
  const { data: facultyLists } = useGetFacultyListQuery(undefined)
  const { data: semesterRegistrationData } = useGetSemesterRegistrationQuery()
  const semester = semesterRegistrationData?.data?.filter(
    (result) => result?.status === 'UPCOMING' || 'ONGOING',
  )
  const { data: departmentData } = useGetDepartmentQuery()
  const { handleSubmit, control, register, reset } = useForm({
    defaultValues: {
      routine: [{ days: '', startTime: '', endTime: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'routine',
  })
  const closeModal = () => {
    setIsOpenForOfferCourse(!isOpenForOfferCourse)
  }
  const onSubmit = async (data) => {
    const academicSemester = semester.find(
      (result) => result._id === data.semesterRegistrationId,
    )
    data.academicSemesterId = academicSemester.academicSemester._id
    const program = departmentData?.data?.find(
      (res) => res?._id === data?.departmentId,
    )
    data.programId = program?.program?._id
    data.courseId = courseId
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await createCourseOffer(data).unwrap()
      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 1500,
      })
      navigate(`/dashboard/offered-course`)
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
    reset()
    setIsOpenForOfferCourse(!isOpenForOfferCourse)
  }
  return (
    <div>
      {/* modal */}
      <Transition appear show={isOpenForOfferCourse} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* SEMESTER */}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Semester
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('semesterRegistrationId')}
                      >
                        {semester?.map((result) => (
                          <option key={result?._id} value={result?._id}>
                            {result?.academicSemester?.name}{' '}
                            {result?.academicSemester?.year}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Department */}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Department
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('departmentId')}
                      >
                        {departmentData?.data?.map((result) => (
                          <option key={result?._id} value={result?._id}>
                            {result?.shortForm}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* faculty Pending */}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Faculty
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('facultyId')}
                      >
                        {facultyLists?.data?.map((res) => (
                          <option key={res?._id} value={res?._id}>
                            {res?.departmentId?.shortForm} {res?.designation}{' '}
                            {res?.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* batch Pending  and here will batch option will remove if the batch has completed 8 semester*/}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Batch
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('sectionId')}
                      >
                        {sectionsData?.data?.map((res) => (
                          <option key={res?._id} value={res?._id}>
                            {res?.batchId?.deptId?.shortForm} {res?.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Routine*/}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Routine
                      </Dialog.Title>
                    </div>
                    <div className="mt-3">
                      {fields.map((field, index) => (
                        <div key={field.id} className="flex gap-2 items-center">
                          <select
                            {...register(`routine.${index}.days`)}
                            className="form-select"
                          >
                            <option value="Sat">Saturday</option>
                            <option value="Sun">Sunday</option>
                            <option value="Mon">Monday</option>
                            <option value="Tue">Tuesday</option>
                            <option value="Wed">Wednesday</option>
                            <option value="Thu">Thursday</option>
                            <option value="Fri">Friday</option>
                          </select>
                          <input
                            type="time"
                            min="00:00" max="23:59" pattern="[0-2][0-9]:[0-5][0-9]"
                            {...register(`routine.${index}.startTime`)}
                            className="form-input"
                          />
                          <input
                            type="time"
                            min="00:00" max="23:59" pattern="[0-2][0-9]:[0-5][0-9]"
                            {...register(`routine.${index}.endTime`)}
                            className="form-input"
                          />
                          <button type="button" onClick={() => remove(index)}>
                            Remove
                          </button>
                        </div>
                      ))}

                      <button
                        className="text-primary cursor-pointer underline hover:text-red-400"
                        type="button"
                        onClick={() =>
                          append({ days: '', startTime: '', endTime: '' })
                        }
                      >
                        Add Routine
                      </button>
                    </div>
                    <button
                      className="btn-primary mt-5"
                      type="submit"
                      value="submit"
                    >
                      Submit
                    </button>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default CreateOfferCourse
