import { Fragment, useState } from 'react'
import Loader from '../../../../Components/Loader/Loader'
import useAuth from '../../../../Hooks/useAuth'
import { useGetOngoingSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import { useGetPresentUserWithAdditionalInfoQuery } from '../../../../Redux/features/User/UserApi'
import {
  useGetFacultyListQuery,
  useGetFacultySemesterRoutineQuery,
} from '../../../../Redux/features/faculty/FacultyApi'
import { Dialog, Transition } from '@headlessui/react'
import { useForm } from 'react-hook-form'
import { useAddClassroomCodeInOfferedCourseMutation } from '../../../../Redux/features/offeredCourse/offeredCourse.api'
import Swal from 'sweetalert2'

const ClassroomCodeAssign = () => {
  const [addClassroomCodeInOfferedCourse] =
    useAddClassroomCodeInOfferedCourseMutation()
  const [isOpen, setIsOpen] = useState(false)
  const [offeredCourseId, setOfferedCourseId] = useState('')
  const { user, loading } = useAuth()
  const { data: currentUser, isLoading: isCurrentUserLoading } =
    useGetPresentUserWithAdditionalInfoQuery(user?.email)
  const { data: facultyLists, isLoading: isFacultyListsLoading } =
    useGetFacultyListQuery(undefined)
  const currentFaculty = facultyLists?.data?.find(
    (result) => result?.userAdditionalInfoId?._id === currentUser?.data?._id,
  )
  const { data: ongoingSemester, isLoading: isOngoingSemesterLoading } =
    useGetOngoingSemesterRegistrationQuery(undefined)
  const { data: offeredCourses, isLoading: isOfferedCoursesLoading } =
    useGetFacultySemesterRoutineQuery(currentFaculty?._id)

  const ongoingSemesterOfferedCoursesLists = offeredCourses?.data?.filter(
    (result) => result?.semesterRegistrationId === ongoingSemester?.data?._id,
  )

  const openModal = (id) => {
    setOfferedCourseId(id)
    setIsOpen(!isOpen)
  }

  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  const { register, handleSubmit, reset } = useForm()

  const onSubmit = async (data) => {
    data.offeredCourseId = offeredCourseId

    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await addClassroomCodeInOfferedCourse(data).unwrap()
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
    setIsOpen(!isOpen)
    reset()
  }

  if (
    loading ||
    isCurrentUserLoading ||
    isFacultyListsLoading ||
    isOngoingSemesterLoading ||
    isOfferedCoursesLoading
  ) {
    return <Loader />
  }
  return (
    <>
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex min-h-full items-center justify-center p-4 text-center"
            >
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Write Google Class Room Code
                  </Dialog.Title>

                  <div className="mt-2">
                    <input
                      {...register('classroomCode')}
                      className="w-full rounded-md border border-primary"
                      type="text"
                    />
                  </div>

                  <div className="mt-4">
                    <a
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"
                      onClick={closeModal}
                    >
                      Close
                    </a>
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    >
                      Proceed
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </form>
          </div>
        </Dialog>
      </Transition>
      <p className="text-center text-primary font-bold text-2xl mt-3 mb-10">
        Your {ongoingSemester?.data?.academicSemester?.name}{' '}
        {ongoingSemester?.data?.academicSemester?.year} Courses
      </p>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Batch `(Section)`
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {ongoingSemesterOfferedCoursesLists &&
            ongoingSemesterOfferedCoursesLists?.map((result, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.courseId?.title}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.departmentId?.shortForm} - {result?.sectionId?.name}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.roomNo}
                </td>

                <td className="px-6 py-4">
                  <button
                    disabled={result?.classroomCode}
                    onClick={() => openModal(result?._id)}
                    className={`${result?.classroomCode ? '' : 'btn-primary'}`}
                  >
                    {result?.classroomCode
                      ? result?.classroomCode
                      : 'Assign Code'}
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default ClassroomCodeAssign
