import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DepartmentFeeModal({
    isOpen,
    closeModal,
    onSubmit,
    handleSubmit,
    register
  
}) {
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
                           Monthly Fee
                          </Dialog.Title>
                          <div className="mt-2">
                         <input
                    {...register('monthlyFee')}
                      className="w-full rounded-md border border-primary"
                      type="number"
                      name="monthlyFee"
                      id="monthlyFee"
                    />
                  </div>
                        </div>
                        <div className="space-y-3">
                          <Dialog.Title
                            as="h3"
                            className="text-lg font-medium leading-6 text-gray-900"
                          >
                           Semester Fee
                          </Dialog.Title>
                          <div className="mt-2">
                         <input
                    {...register('semesterFee')}
                      className="w-full rounded-md border border-primary"
                      type="number"
                      name="semesterFee"
                      id="semesterFee"
                    />
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
    </>
  )
}
