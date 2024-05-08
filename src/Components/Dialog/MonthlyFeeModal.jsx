import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function MonthlyFeeModal({
  isOpen,
  closeModal,
  upcomingOrOngoingSemester,
  addPayButton,
  departmentWiseFeeData,
  currentStudent
}) {
  const calculatePendingPayment = () => {
    let totalPendingPayment = 0;
    if (departmentWiseFeeData && departmentWiseFeeData.monthlyFees && upcomingOrOngoingSemester) {
      const departmentMonthlyFee = departmentWiseFeeData?.monthlyFee; 
      const waiverPercentage = currentStudent?.waiverPercentage || 0; 
      const unpaidMonths = departmentWiseFeeData.monthlyFees.filter(fee => !fee.paidStatus);
      totalPendingPayment = unpaidMonths.reduce((total, fee) => {
        // Calculate fee after applying waiver for each unpaid month
        const feeAfterWaiver = departmentMonthlyFee - (departmentMonthlyFee * waiverPercentage / 100);
        return total + feeAfterWaiver;
      }, 0);
    }
    return totalPendingPayment;
  };

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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {upcomingOrOngoingSemester?.academicSemester?.name} semester is {upcomingOrOngoingSemester?.status}
                       
                  </Dialog.Title>
                  <div className="mt-2">
                    <p>Pending Payment:</p>
                    <ul>
                      {departmentWiseFeeData?.monthlyFees?.map((fee, index) => (
                        <li key={index}>
                          {fee.month} - {fee.year}
                        </li>
                      ))}
                    </ul>
                    <p>Total Pending Payment: {calculatePendingPayment()} taka</p>
                  </div>

                  <div className="mt-4">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"
                      type="button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => addPayButton()}
                    >
                      Pay
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
