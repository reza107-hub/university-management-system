import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useGetSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import { useGetDepartmentQuery } from '../../../../Redux/features/Department/department.api'
import { useGetBatchQuery } from '../../../../Redux/features/BatchApi/BatchApi'

const CreateOfferCourse = () => {
  const { data: semesterRegistrationData } = useGetSemesterRegistrationQuery()
  const semester = semesterRegistrationData?.data?.find(
    (result) => result?.status === 'UPCOMING',
  )
  const { data: departmentData } = useGetDepartmentQuery()
  const { data: batchData } = useGetBatchQuery()
  // console.log(batchData)
  let [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, register, reset } = useForm()
  const openModal = () => {
    setIsOpen(!isOpen)
  }
  const closeModal = () => {
    setIsOpen(!isOpen)
  }
  const onSubmit = async (data) => {
    data.academicSemesterId = semester.academicSemester._id
    const program = departmentData?.data?.find(
      (res) => res?._id === data?.departmentId,
    )
    data.programId = program?.program?._id
    console.log(data)
    reset()
    setIsOpen(!isOpen)
  }
  return (
    <div>
      {/* modal */}
      <Transition appear show={isOpen} as={Fragment}>
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
                        <option value={semester?._id}>
                          {semester?.academicSemester?.name}
                        </option>
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

                    {/* Course Pending */}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Course
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('courseId')}
                      >
                        <option value={'pending'}>{'pending'}</option>
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
                        <option value={'pending'}>{'pending'}</option>
                      </select>
                    </div>

                    {/* batch Pending  and here will batch option will remove if the batch has completed 8 semester*/}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Faculty
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('batch')}
                      >
                        {batchData?.data?.map((res) => (
                          <option key={res?._id} value={res?._id}>
                            {res?.deptId?.shortForm} {res?.batchNumber}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* days*/}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Faculty
                      </Dialog.Title>
                      <select
                        className="w-full rounded-md"
                        {...register('batchNumber')}
                      >
                        <option value="Sat">Saturday</option>
                        <option value="Sun">Sunday</option>
                        <option value="Mon">Monday</option>
                        <option value="Tue">Tuesday</option>
                        <option value="Wed">Wednesday</option>
                        <option value="Thu">Thursday</option>
                        <option value="Fri">Friday</option>
                      </select>
                    </div>
                    {/* startTime */}
                    {/* endTime */}
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
      <div>
        {/* modal  button*/}
        <button type="button" onClick={openModal} className="btn-primary">
          Create Offered Course
        </button>
      </div>
    </div>
  )
}

export default CreateOfferCourse
