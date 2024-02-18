import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
const Courses = () => {
  let [isOpen, setIsOpen] = useState(false)
  const { handleSubmit, register, reset } = useForm()
  const onSubmit = async (data) => {
    console.log(data)
    reset()
    setIsOpen(!isOpen)
  }
  const openModal = () => {
    setIsOpen(!isOpen)
  }
  const closeModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
                          {...register('months')}
                        />{' '}
                        <label> January</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          value="February"
                          {...register('months')}
                        />{' '}
                        <label> February</label>
                      </div>
                    </div>

                    <button className="btn-primary mt-5" type="submit">
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
          <button type="button" onClick={openModal} className="btn-primary">
            Create Course
          </button>
        </div>
      </div>
    </div>
  )
}

export default Courses
