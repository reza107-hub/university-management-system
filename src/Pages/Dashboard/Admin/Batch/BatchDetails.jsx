import { useParams } from 'react-router-dom'
import { useGetSingleSectionQuery, useMergeSectionMutation } from '../../../../Redux/features/BatchApi/BatchApi'
import { useState } from 'react'
import SectionMargeModal from './SectionMargeModal'
import Swal from 'sweetalert2'

const BatchDetails = () => {
  const { id } = useParams()
  const { data: sectionLists } = useGetSingleSectionQuery(id)
  const [isOpen,setIsOpen] = useState(false)
  const [selectedSections, setSelectedSections] = useState([])
  const [MergeSection] = useMergeSectionMutation()

  const openModalForSectionMerge = ()=>{
    setIsOpen(!isOpen)
  }

  const closeModalForSectionMerge = () => {
    setIsOpen(!isOpen)
    setSelectedSections([])
  }

  const handleMergeSections = async() => {
    try {
          Swal.fire({
            title: 'wait...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
            },
          })
          const res = await MergeSection(selectedSections).unwrap()
          Swal.fire({
            title: res.message,
            icon: 'success',
            timer: 1500,
          })
        } catch (error) {
          console.log(error)
          Swal.fire({
            title: error?.data?.message,
            text: error?.data?.errorMessage,
            icon: 'error',
          })
        }
    setSelectedSections([])
    setIsOpen(!isOpen)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionMargeModal
        handleMergeSections={handleMergeSections}
        sectionLists={sectionLists}
        closeModal={closeModalForSectionMerge}
        isOpen={isOpen}
        selectedSections={selectedSections}
        setSelectedSections={setSelectedSections}
      />
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Section Details</h1>
        <button
          onClick={() => openModalForSectionMerge()}
          className="btn-primary"
        >
          Merge Section
        </button>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Section Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Students
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sectionLists?.data?.map((section) => (
            <tr key={section._id}>
              <td className="px-6 py-4 whitespace-nowrap">{section.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {section.student_ids.length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BatchDetails
