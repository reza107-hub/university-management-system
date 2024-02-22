import { useState } from 'react'
import ReUsable from '../../../../Components/Dialog/ReUsableModaal'
import { useForm } from 'react-hook-form'

const updateContent = [
  {
    name: 'Title',
    id: 'title',
    type: 'text',
  },
  {
    name: 'Code',
    id: 'code',
    type: 'text',
  },
  {
    name: 'Credits',
    id: 'credits',
    type: 'number',
    step: '.01',
  },
]

const CourseTable = ({ allCourses }) => {
  const { handleSubmit, register, reset } = useForm()
  let [courseId, setCourseId] = useState('')
  let [isOpen, setIsOpen] = useState(false)
  const updateModal = (id) => {
    setIsOpen(!isOpen)
    setCourseId(id)
  }

  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  const updateCourse = (data) => {
    console.log({ courseId, data })
    setIsOpen(!isOpen)
    reset()
  }

  return (
    <div>
      <ReUsable
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={updateCourse}
        handleSubmit={handleSubmit}
        register={register}
        Content={updateContent}
      />
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Course Title
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Course Code
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Course Credits
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {allCourses?.data?.result?.map((result) =>
            allCourses?.data?.result ? (
              <tr
                key={result?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{result?.title}</td>
                <td className="px-6 py-4 font-bold text-lg">{result?.code}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.credits}
                </td>

                <td className="px-6 py-4">
                  <select
                    className="rounded-md"
                    onClick={(e) => {
                      if (e.target.value === 'update') {
                        updateModal(result?._id)
                      } else if (e.target.value === 'delete') {
                        // Handle delete option if needed
                      }
                    }}
                  >
                    <option>Actions</option>
                    <option value="update">Update The Course</option>
                    <option value="delete">Delete The Course</option>
                  </select>
                </td>
              </tr>
            ) : (
              <tr key={result._id}></tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}

export default CourseTable
