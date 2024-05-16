import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function SectionMargeModal({
  isOpen,
  closeModal,
  sectionLists,
  setSelectedSections,
  selectedSections,
  handleMergeSections,
}) {
  const handleCheckboxChange = (sectionId) => {
    setSelectedSections((prevSelectedSections) => {
      if (prevSelectedSections.includes(sectionId)) {
        return prevSelectedSections.filter((id) => id !== sectionId)
      } else {
        return [...prevSelectedSections, sectionId]
      }
    })
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
                    Select Sections{' '}
                    <span className="text-xs font-thin text-red-400">
                      Students number must be under 40
                    </span>
                  </Dialog.Title>

                  {sectionLists?.data?.map((section) => (
                    <div key={section._id} className="mt-2">
                      <input
                        type="checkbox"
                        id={section._id}
                        checked={selectedSections.includes(section._id)}
                        onChange={() => handleCheckboxChange(section._id)}
                      />
                      <label htmlFor={section._id} className="ml-2">
                        {section.name}
                      </label>
                    </div>
                  ))}

                  <div className="mt-4">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"
                      type="button"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                    <button
                      onClick={handleMergeSections}
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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
