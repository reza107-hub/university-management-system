import { useState } from 'react'
import SearchName from '../../../Components/Search/SearchName'
import {
  useGetFacultyListQuery,
  useMakeStudyLeaveFalseMutation,
} from '../../../Redux/features/faculty/FacultyApi'
import Swal from 'sweetalert2'

const FacultyStudyLeaveLists = () => {
  const [makeStudyLeaveFalse] = useMakeStudyLeaveFalseMutation()

  const [params, setParams] = useState('')
  const { data: facultyListData } = useGetFacultyListQuery(params)
  const SearchPlaceHolderName = 'Faculty'
  const data = facultyListData?.data?.filter(
    (result) => result?.studyLeave === true,
  )

  const handleRemoveFacultyAsStudyLeave = async (user) => {
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await makeStudyLeaveFalse(user).unwrap()
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
  return (
    <div>
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>

        <SearchName
          setParams={setParams}
          SearchPlaceHolderName={SearchPlaceHolderName}
          searchTerm="name"
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
                <td className="px-6 py-4">
                  {user?.userId?.role} {`(Study Leave)`}
                </td>
                <td className="px-6 py-4 space-x-2">
                  <select
                    className="rounded-md"
                    id="actions-select"
                    onClick={(e) => {
                      if (e.target.value === 'removeStudyLeave') {
                        handleRemoveFacultyAsStudyLeave(user)
                        e.target.selectedIndex = 0
                      }
                    }}
                  >
                    <option>Actions</option>
                    <option value="removeStudyLeave">Give access again</option>
                  </select>
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

export default FacultyStudyLeaveLists
