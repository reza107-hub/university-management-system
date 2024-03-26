import Swal from 'sweetalert2'

import {
  useDeleteFacultyMutation,
  useGetFacultyListQuery,
} from '../../../Redux/features/faculty/FacultyApi'

import { useState } from 'react'
import SearchName from '../../../Components/Search/SearchName'
import EmailModal from '../../../Components/Dialog/EmailModal'
import { useSendEmailMutation } from '../../../Redux/features/admin/admin.api'

const FacultyList = () => {
  const [params, setParams] = useState('')
  const [emailText, setEmailText] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  let [isOpen, setIsOpen] = useState(false)
  const { data: facultyListData } = useGetFacultyListQuery(params)
  const [deleteFaculty] = useDeleteFacultyMutation()
  const [sendEmailMutation] = useSendEmailMutation()
  const SearchPlaceHolderName = 'Faculty'
  const data = facultyListData?.data
  const openModal = (user) => {
    setIsOpen(true)
    setSelectedUser(user)
  }
  const closeModal = () => {
    setIsOpen(false)
    setSelectedUser(null)
  }
  const handleDeleteFaculty = async (user) => {
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await deleteFaculty(user).unwrap()
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
const emailSendButton = async(userDetails)=>{
// console.log(userDetails.userId.email)
// console.log(emailText)
// console.log(emailSubject)
const email = userDetails?.userId?.email
const payload = {
  email,
  emailSubject,
  emailText
}
try {
  Swal.fire({
    title: 'wait...',
    allowEscapeKey: false,
    allowOutsideClick: false,
    didOpen: () => {
      Swal.showLoading()
    },
  })
  const res = await sendEmailMutation(payload).unwrap()
  Swal.fire({
    title: res.message,
    icon: 'success',
    timer: 1500,
  }).then(() => {
    closeModal(); 
  })
} catch (error) {
  Swal.fire({
    title: error?.data?.message,
    text: error?.data?.errorMessage,
    icon: 'error',
  })
}

}
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <EmailModal
        isOpen={isOpen}
        emailSendButton={emailSendButton}
        closeModal={closeModal}
        setEmailText={setEmailText}
        selectedUser={selectedUser}
        setEmailSubject={setEmailSubject}
      />
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>

        <SearchName
          setParams={setParams}
          SearchPlaceHolderName={SearchPlaceHolderName}
          searchTerm='name'
        />
      </div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              email
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) =>
            user?.userId?.role === 'faculty' ? (
              <tr
                key={user?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.userAdditionalInfoId?.image}
                    alt={`Profile of ${user?.userAdditionalInfoId?.name}`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {user?.userAdditionalInfoId?.name}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  {user?.userAdditionalInfoId?.email}
                </td>
                <td className="px-6 py-4">{user?.userId?.role}</td>
                <td className="px-6 py-4 space-x-2">
                  <button
                    onClick={() => handleDeleteFaculty(user)}
                    className={`btn-primary`}
                  >
                    Remove Faculty
                  </button>
                  <button
                    onClick={()=>openModal(user)}
                    className={`btn-primary`}
                  >
                    Send email
                  </button>
                </td>
               
              </tr>
            ) : (
              <tr key={user?._id}></tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  )
}

export default FacultyList
