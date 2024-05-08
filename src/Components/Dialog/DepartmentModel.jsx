import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function DepartmentModel({
  isOpen,
  addDeptButton,
  closeModal,
  setDeptCode,
  setDeptName,
  setDeptShortName,
  setDeptProgramme,
  data,
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
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Department Code
                  </Dialog.Title>
                  <div className="mt-2">
                    <input
                      onBlur={(e) => setDeptCode(e.target.value)}
                      className="w-full rounded-md border border-primary"
                      type="text"
                      name="dept_code"
                      id="dept_code"
                      placeholder="set unique code"
                    />
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Department Name
                  </Dialog.Title>

                  <div className="mt-2">
                    <input
                      onBlur={(e) => setDeptName(e.target.value)}
                      className="w-full rounded-md border border-primary"
                      type="text"
                      name="deptName"
                      id="deptName"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Department Short Name
                  </Dialog.Title>

                  <div className="mt-2">
                    <input
                      onBlur={(e) => setDeptShortName(e.target.value)}
                      className="w-full rounded-md border border-primary"
                      type="text"
                      name="deptShortName"
                      id="deptShortName"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Programme
                  </Dialog.Title>

                  <div className="mt-2">
                    <select
                      name="programme"
                      id="programme"
                      onBlur={(e) => setDeptProgramme(e.target.value)}
                    >
                      {data?.data.map((result) => (
                        <option key={result?._id} value={result?._id}>
                          {result?.name}
                        </option>
                      ))}
                    </select>
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
                      onClick={() => addDeptButton()}
                    >
                      Proceed
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
