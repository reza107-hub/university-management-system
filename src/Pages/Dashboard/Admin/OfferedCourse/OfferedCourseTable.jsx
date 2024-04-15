import { useState } from "react";
import { useDeleteOneOfferedCourseMutation, useGetOfferedCourseQuery, useUpdateOfferedCourseMutation } from "../../../../Redux/features/offeredCourse/offeredCourse.api";
import SearchName from './../../../../Components/Search/SearchName';
import ReUsable from "../../../../Components/Dialog/ReUsableModaal";
import Swal from 'sweetalert2'
import { useForm } from "react-hook-form";
import { useGetFacultyListQuery } from "../../../../Redux/features/faculty/FacultyApi";
import OfferedCourseUpdateModal from "../../../../Components/Dialog/OfferedCourseUpdateModal";


const OfferedCourseTable = () => {
  const [params, setParams] = useState('')
  const { handleSubmit, register, reset } = useForm()
  let [courseId, setCourseId] = useState('')
  let [isOpen, setIsOpen] = useState(false)
  const { data: facultyDataList } = useGetFacultyListQuery(params)
  
  const facultyData = facultyDataList?.data
  const { data } = useGetOfferedCourseQuery(params)
  const updateCourseInfo = data?.data?.find(
    (OfferedCourse) => OfferedCourse?._id === courseId,
  )
  const[deleteOneOfferedCourse] = useDeleteOneOfferedCourseMutation()
  const[updateOfferedCourse] = useUpdateOfferedCourseMutation()
  const SearchPlaceHolderName = 'offered course'
  // console.log(data?.data)
  const updateModal = (id) => {
    setIsOpen(!isOpen)
    setCourseId(id)
  }
  const closeModal = () => {
    setIsOpen(!isOpen)
  }
//----------------------------------------------------------------

const updateCourse = async (data) => {
data.facultyId
 = updateCourseInfo.facultyId
  
  try {
    Swal.fire({
      title: 'Updating Course...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })
    const res = await updateOfferedCourse({ id: courseId, body: data }).unwrap()
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
//----------------------------------------------------------------

const handleDelete = async (id) => {
  try {
    Swal.fire({
      title: 'Deleting offered course...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      },
    })
    const res = await deleteOneOfferedCourse(id).unwrap()
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



    return (
    <div>
      <OfferedCourseUpdateModal
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={updateCourse}
        handleSubmit={handleSubmit}
        register={register}
        facultyData={facultyData}
      
      />
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          
    
          <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <label className="sr-only">Search</label>
     
            <SearchName
              setParams={setParams}
              SearchPlaceHolderName={SearchPlaceHolderName}
              searchTerm='name'
            />
    
          </div>
    
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  Title
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  code
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  credit
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Faculty
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  routine
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.data.map((result) =>
                data.data ? (
                  <tr
                    key={result?._id}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="px-6 py-4 font-bold text-lg">{result?.courseId?.title}</td>
                    <td className="px-6 py-4 font-bold text-lg">{result?.courseId?.code}</td>
                    <td className="px-6 py-4 font-bold text-lg">{result?.courseId?.credits}</td>
                    <td className="px-6 py-4 font-bold text-lg">{result?.facultyId?.name} <br />{result?.facultyId?.designation}</td>
                    <td className="px-6 py-4 font-bold text-lg">{result?.routine.map((item, index) => (<div key={index}>
                 <span>{item.days} ({item.startTime} - {item.endTime})</span>
                   <br /><span> Room No: {item.roomNo}</span>
               </div> ))}
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
    </div>
    );
};

export default OfferedCourseTable;