import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import CourseTable from './CourseTable'
const Courses = () => {
  let [isOpen, setIsOpen] = useState(false)
  const [preRequisiteCourses, setPreRequisiteCourses] = useState([])
  const openModal = () => {
    setIsOpen(!isOpen)
  }
  const closeModal = () => {
    setIsOpen(!isOpen)
  }
  const { handleSubmit, register, reset } = useForm()
  // console.log(watch('preRequisiteCourses'))
  const onSubmit = async (data) => {
    data.preRequisiteCourses = [...preRequisiteCourses]
    console.log(data)
    reset()
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>

        {/* <SearchName
          setParams={setParams}
          SearchPlaceHolderName={SearchPlaceHolderName}
        /> */}
      </div>

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
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Title
                      </Dialog.Title>
                      <input
                        className="w-full rounded-md"
                        type="text"
                        {...register('title')}
                      />
                    </div>
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Prefix
                      </Dialog.Title>
                      <input
                        className="w-full rounded-md"
                        type="text"
                        {...register('prefix')}
                      />
                    </div>
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Code
                      </Dialog.Title>
                      <input
                        className="w-full rounded-md"
                        type="number"
                        {...register('Code')}
                      />
                    </div>
                    <div className="space-y-3">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        credits
                      </Dialog.Title>
                      <input
                        className="w-full rounded-md"
                        type="number"
                        step=".01"
                        {...register('credits')}
                      />
                    </div>
                    <div className="space-y-3 flex flex-col gap-4">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Select Pre Requisite Courses
                      </Dialog.Title>
                      <div>
                        <input
                          type="checkbox"
                          value="January"
                          onChange={(e) =>
                            setPreRequisiteCourses((prevCourses) =>
                              e.target.checked
                                ? [...prevCourses, e.target.value]
                                : prevCourses.filter(
                                    (course) => course !== e.target.value,
                                  ),
                            )
                          }
                        />{' '}
                        <label> January</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          value="February"
                          onChange={(e) =>
                            setPreRequisiteCourses((prevCourses) =>
                              e.target.checked
                                ? [...prevCourses, e.target.value]
                                : prevCourses.filter(
                                    (course) => course !== e.target.value,
                                  ),
                            )
                          }
                        />{' '}
                        <label> February</label>
                      </div>
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
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          {/* modal  button*/}
          <button type="button" onClick={openModal} className="btn-primary">
            Create Course
          </button>
        </div>
      </div>

      {/* table */}
      <CourseTable />
    </div>
  )
}

export default Courses
