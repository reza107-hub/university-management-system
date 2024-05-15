import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MonthlyFeeModal({
  isOpen,
  closeModal,
  upcomingOrOngoingSemester,
  addPayButton,
  isMonthlyFeeDone,
  currentMonthName,
  currentYear,
  monthlyFeeOfCurrentStudent,
  monthlyFeePreviousDueOFCurrentStudent
}) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="p-6">
                <Dialog.Title as="h3" className="text-lg font-semibold text-gray-900 mb-4">
                  {upcomingOrOngoingSemester?.academicSemester?.name} Semester Status: {upcomingOrOngoingSemester?.status}
                </Dialog.Title>
                <div className="mb-4">
                  <p className="text-sm text-gray-700">Year: {currentYear}</p>
                  <p className="text-sm text-gray-700">Monthly Fee after Waiver: {monthlyFeeOfCurrentStudent} taka</p>
                  <p className="text-sm text-gray-700">Total Previous Due: {monthlyFeePreviousDueOFCurrentStudent} taka</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center">
                  {isMonthlyFeeDone ? (
                    <p className="text-sm text-green-600 mb-2 sm:mb-0">Payment for {currentMonthName} is complete.</p>
                  ) : (
                    <>
                      <p className="text-sm text-red-600 mb-2 sm:mb-0">Payment for {currentMonthName} is pending.</p>
                      <button
                        className="mt-2 sm:mt-0 inline-flex justify-center items-center rounded-md border border-transparent bg-blue-500 text-white px-4 py-2 text-sm font-medium hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={addPayButton}
                      >
                        Pay Now
                      </button>
                    </>
                  )}
                  <button
                    className="ml-0 mt-2 sm:ml-4 sm:mt-0 inline-flex justify-center items-center rounded-md border border-transparent bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
