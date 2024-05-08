import { useState } from "react"
import Swal from 'sweetalert2'
import SearchName from "../../../../Components/Search/SearchName"
import { useCreateDepartmentWiseStudentFeeMutation, useDeleteDepartmentWiseStudentFeeMutation, useGetDepartmentQuery, useGetDepartmentWiseStudentFeeQuery, useUpdateDepartmentWiseStudentFeeMutation } from "../../../../Redux/features/Department/department.api"
import DepartmentWiseStudentFeeModel from './../../../../Components/Dialog/DepartmentWiseStudentFeeModel';
import { useForm } from "react-hook-form";
import DepartmentFeeModal from "../../../../Components/Dialog/DepartmentFeeModal";

const DepartmentWiseStudentFee = () => {
  const { handleSubmit, register, reset } = useForm()
    const [semesterFee, setSemesterFee] = useState(null)
    const [monthlyFee, setMonthlyFee] = useState(null)
    const [departmentId, setDepartmentId] = useState('')
    const [params, setParams] = useState('')
    let [isOpen, setIsOpen] = useState(false)
    let [isOpenForUpdate, setIsOpenForUpdate] = useState(false)
    const { data } = useGetDepartmentWiseStudentFeeQuery(params)
    const {data:departmentData} = useGetDepartmentQuery(undefined)
    const SearchPlaceHolderName = 'Department'
    const [addDepartmentWiseFee] = useCreateDepartmentWiseStudentFeeMutation()
    const[updateFee] = useUpdateDepartmentWiseStudentFeeMutation()
    const [deleteFee] = useDeleteDepartmentWiseStudentFeeMutation()
    const updateDeptFeeInfo = data?.data?.find(
      (fee) => fee?.departmentId === departmentId,
    )
  
   const postData = { departmentId:departmentId , monthlyFee: monthlyFee,semesterFee:semesterFee }

    const openModal = () => {
      setIsOpen(true)
    }
    const closeModal = () => {
      setIsOpen(false)
    }
    const openModalForUpdate = (departmentId) => {
      setDepartmentId(departmentId)
      setIsOpenForUpdate(true)
    }
    const closeModalForUpdate = () => {
      setIsOpenForUpdate(false)
    }
//  console.log(departmentId._id)
    const updateDepartmentWiseFee = async (data) => {

      data.monthlyFee = data.monthlyFee === '' ? updateDeptFeeInfo.monthlyFee : Number(data.monthlyFee)
      data.semesterFee = data.semesterFee === '' ? updateDeptFeeInfo.semesterFee : Number(data.semesterFee)

        try {
          Swal.fire({
            title: 'Updating fee...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
              Swal.showLoading()
            },
          })
          const res = await updateFee({ departmentId: departmentId._id, body: data }).unwrap()
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
        reset()
        closeModalForUpdate()
      }
    const addFeeButton = async () => {
      try {
        Swal.fire({
          title: 'wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          },
        })
        const res = await addDepartmentWiseFee(postData).unwrap()
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
      setIsOpen(false)
    }
    const handleDeleteFee = async (departmentId) => {
      try {
        Swal.fire({
          title: 'wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          },
        })
      //  console.log(departmentId)
        const res = await deleteFee(departmentId).unwrap()
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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <DepartmentWiseStudentFeeModel
          isOpen={isOpen}
          addFeeButton={addFeeButton}
          setDepartmentId={setDepartmentId}
          setMonthlyFee={setMonthlyFee}
          setSemesterFee={setSemesterFee}
          closeModal={closeModal}
          data={departmentData}
        />
        <DepartmentFeeModal
        isOpen={isOpenForUpdate}
        closeModal={closeModalForUpdate}
        onSubmit={updateDepartmentWiseFee}
        handleSubmit={handleSubmit}
        register={register}
      
      />
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <label className="sr-only">Search</label>
  
          <SearchName
            setParams={setParams}
            SearchPlaceHolderName={SearchPlaceHolderName}
            searchTerm='name'
          />
  
          <div>
            <button type="button" onClick={openModal} className="btn-primary">
              Add department Wise student Fee
            </button>
          </div>
        </div>
  
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Department
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Monthly Fee
              </th>
              <th scope="col" className="px-6 py-3 text-center">Semester Fee</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data?.data?.map((result) =>
              data?.data ? (
                <tr
                  key={result?._id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                > 
                  <td className="px-6 py-4 font-bold text-lg">{result?.departmentId?.shortForm}</td>
                  <td className="px-6 py-4 font-bold text-lg">
                    {result?.monthlyFee} $
                  </td>
                  <td className="px-6 py-4 font-bold text-lg">
                    {result?.semesterFee} $
                  </td>
                  <td className="px-6 py-4">
                      <select
                        className="rounded-md"
                        id="actions-select"
                        onClick={(e) => {
                          if (e.target.value === 'update') {
                            openModalForUpdate(result?.departmentId)
                            e.target.selectedIndex = 0
                          } else if (e.target.value === 'delete') {
                            handleDeleteFee(result?.departmentId?._id)
                            e.target.selectedIndex = 0
                          }
                        }}
                      >
                        <option>Actions</option>
                        <option value="update">Update </option>
                        <option value="delete">Delete </option>
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

  export default DepartmentWiseStudentFee
  