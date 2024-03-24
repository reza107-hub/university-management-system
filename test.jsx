import { useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { useGetSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import { useGetDepartmentQuery } from '../../../../Redux/features/Department/department.api'

const CreateOfferCourse = ({
  isOpenForOfferCourse,
  setIsOpenForOfferCourse,
  courseId,
}) => {
  const { data: semesterRegistrationData } = useGetSemesterRegistrationQuery()
  const semester = semesterRegistrationData?.data?.filter(
    (result) => result?.status === 'UPCOMING' || 'ONGOING',
  )
  const { data: departmentData } = useGetDepartmentQuery()
  // console.log(batchData)
  const { handleSubmit, register, reset } = useForm()
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
    console.log(data)
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
                    {/* Routine*/}
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Routine
                      </Dialog.Title>
                    </div>
                    {/* in routine there will be data like this: routine: [{days: 'sun', startTime: '9:30', endTime: '10:50'},{days: 'Man', startTime: '9:30', endTime: '10:50'}] */}
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
