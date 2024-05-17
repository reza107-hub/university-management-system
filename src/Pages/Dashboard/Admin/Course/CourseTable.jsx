import { useState } from 'react'
import ReUsable from '../../../../Components/Dialog/ReUsableModaal'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import {
  useDeleteOneCourseMutation,
  useUpdateCourseMutation,
} from '../../../../Redux/features/course/courseApi'
import CreateOfferCourse from '../OfferedCourse/CreateOfferCourse'

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

const CourseTable = ({ courses }) => {
  let [isOpenForOfferCourse, setIsOpenForOfferCourse] = useState(false)
  const { handleSubmit, register, reset } = useForm()
  let [courseId, setCourseId] = useState('')
  let [isOpen, setIsOpen] = useState(false)
  const updateCourseInfo = courses?.data?.result?.find(
    (course) => course?._id === courseId,
  )
  const [updateCourseData] = useUpdateCourseMutation()
  const [deleteOneCourse] = useDeleteOneCourseMutation()
  const updateModal = (id) => {
    setIsOpen(!isOpen)
    setCourseId(id)
  }

  const closeModal = () => {
    setIsOpen(!isOpen)
  }
  //----------------------------------------------------------------
  const updateCourse = async (data) => {
    data.title = data.title === '' ? updateCourseInfo.title : data.title
    data.code = data.code === '' ? updateCourseInfo.code : data.code
    data.credits =
      data.credits === '' ? updateCourseInfo.credits : Number(data.credits)

    try {
      Swal.fire({
        title: 'Updating Course...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await updateCourseData({ id: courseId, body: data }).unwrap()
      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 1500,
      })
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }

    setIsOpen(!isOpen)
    reset()
  }
  //-----------------------------------------------------------------
  const handleDelete = async (id) => {
    try {
      Swal.fire({
        title: 'Deleting course...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await deleteOneCourse(id).unwrap()
      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 1500,
      })
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
  }
  //----------------------------------------------------------------

  const openModalForOfferCourse = (courseId) => {
    setCourseId(courseId)
    setIsOpenForOfferCourse(!isOpenForOfferCourse)
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
      <CreateOfferCourse
        isOpenForOfferCourse={isOpenForOfferCourse}
        setIsOpenForOfferCourse={setIsOpenForOfferCourse}
        courseId={courseId}
        courses={courses}
      />
      {courses && courses.length > 0 ? (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
          {/* Table header */}
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
          {/* Table body */}
          <tbody className="text-center">
            {courses.map((result) =>
              result ? (
                <tr
                  key={result?._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-bold text-lg">
                    {result?.title}
                  </td>
                  <td className="px-6 py-4 font-bold text-lg">
                    {result?.code}
                  </td>
                  <td className="px-6 py-4 font-bold text-lg">
                    {result?.credits}
                  </td>

                  <td className="px-6 py-4">
                    <select
                      className="rounded-md"
                      id="actions-select"
                      onClick={(e) => {
                        if (e.target.value === 'update') {
                          updateModal(result?._id)
                          e.target.selectedIndex = 0
                        } else if (e.target.value === 'delete') {
                          handleDelete(result?._id)
                          e.target.selectedIndex = 0
                        } else if (e.target.value === 'offer') {
                          openModalForOfferCourse(result?._id)
                          e.target.selectedIndex = 0
                        }
                      }}
                    >
                      <option>Actions</option>
                      <option value="offer">Offer The Course</option>
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
      ) : (
        <div className="text-center text-gray-500 p-6 dark:text-gray-400 mt-4">
          There is no course for this department.
        </div>
      )}
    </div>
  )
}

export default CourseTable
