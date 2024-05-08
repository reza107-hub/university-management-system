import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SeeFacultyInfoModal({ isOpen, closeModal, faculty }) {
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all text-center">
                  {/* Photo */}
                  <img
                    className="w-24 h-24 rounded-full mx-auto"
                    src={faculty?.userAdditionalInfoId?.image}
                    alt={faculty?.name}
                  />
                  <p className="mt-4 text-lg font-semibold">{faculty?.name}</p>
                  <p className="text-gray-500">
                    {faculty?.userAdditionalInfoId?.email}
                  </p>
                  <p className="text-gray-500">
                    {faculty?.userAdditionalInfoId?.contactNumber}
                  </p>

                  <div className="mt-4">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"
                      type="button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
