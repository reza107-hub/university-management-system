import { useState } from 'react'
import SemesterFeeModal from '../../../../Components/Dialog/SemesterFeeModal'
import MonthlyFeeModal from '../../../../Components/Dialog/MonthlyFeeModal'
import { useGetSemesterRegistrationQuery } from '../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'
import Swal from 'sweetalert2'
import useAuth from '../../../../Hooks/useAuth'
import {
  useGetAllStudentsQuery,
  useIsSemesterFeeCompleteQuery,
  useMonthlyPaymentMutation,
  useSemesterPaymentMutation,
} from '../../../../Redux/features/student/student.api'
import { useGetDepartmentWiseStudentFeeQuery } from '../../../../Redux/features/Department/department.api'
const currentDate = new Date()
const currentMonth = currentDate.getMonth()
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const currentMonthName = monthNames[currentMonth]
const currentYear = currentDate.getFullYear()
const StudentPayment = () => {
  const { user } = useAuth()
  const [isOpenSemesterModal, setIsOpenSemesterModal] = useState(false)
  const [isOpenMonthlyModal, setIsOpenMonthlyModal] = useState(false)
  const [semesterPayment] = useSemesterPaymentMutation()
  const [monthlyPayment] = useMonthlyPaymentMutation()
  const { data: semesterRegistrationData } =
    useGetSemesterRegistrationQuery(undefined)
  const { data: AllStudentsData } = useGetAllStudentsQuery(undefined)
  const { data: departmentWiseStudentFeeData } =
    useGetDepartmentWiseStudentFeeQuery(undefined)
  const upcomingOrOngoingSemester = semesterRegistrationData?.data?.find(
    (result) => result.status !== 'ENDED',
  )
  const currentStudent = AllStudentsData?.data?.find(
    (i) => i.admissionRequestId.email === user.email,
  )
  const departmentWiseFeeData = departmentWiseStudentFeeData?.data?.find(
    (i) =>
      i?.departmentId?._id ===
      currentStudent?.admissionRequestId?.department?._id,
  )

  const fullName =
    currentStudent?.admissionRequestId?.name?.firstName +
    ' ' +
    currentStudent?.admissionRequestId?.name?.lastName
  const { data } = useIsSemesterFeeCompleteQuery({
    studentId: currentStudent?._id,
    semesterRegistrationId: upcomingOrOngoingSemester?._id,
  })
  const isSemesterPaymentDone = data?.data

  const openSemesterModal = () => {
    setIsOpenSemesterModal(true)
  }

  const closeSemesterModal = () => {
    setIsOpenSemesterModal(false)
  }

  const openMonthlyModal = () => {
    setIsOpenMonthlyModal(true)
  }

  const closeMonthlyModal = () => {
    setIsOpenMonthlyModal(false)
  }

  const addSemesterPayment = async () => {
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })

      const payload = {
        name: fullName,
        email: currentStudent?.admissionRequestId?.email,
        studentId: currentStudent?._id,
        departmentId: currentStudent?.admissionRequestId?.department?._id,
        semesterRegistrationId: upcomingOrOngoingSemester?._id,
        contactNumber: currentStudent?.admissionRequestId?.contactNumber,
        fee: departmentWiseFeeData?.semesterFee,
      }

      const res = await semesterPayment(payload).unwrap()
      if (!res.url) {
        Swal.fire({
          title: 'something went wrong',
          icon: 'error',
        })
      }
      window.location.replace(res.url)
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
    setIsOpenSemesterModal(false)
  }

  const addMonthlyPayment = async () => {
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })

      const payload = {
        name: fullName,
        email: currentStudent?.admissionRequestId?.email,
        studentId: currentStudent?._id,
        departmentId: currentStudent?.admissionRequestId?.department?._id,
        semesterRegistrationId: upcomingOrOngoingSemester?._id,
        contactNumber: currentStudent?.admissionRequestId?.contactNumber,
        month: currentMonthName,
        year: currentYear,
      }

      const res = await monthlyPayment(payload).unwrap()
      if (!res.url) {
        Swal.fire({
          title: 'something went wrong',
          icon: 'error',
        })
      }
      window.location.replace(res.url)
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
    setIsOpenMonthlyModal(false)
  }

  return (
    <div>
      <SemesterFeeModal
        isOpen={isOpenSemesterModal}
        closeModal={closeSemesterModal}
        addPayButton={addSemesterPayment}
        upcomingOrOngoingSemester={upcomingOrOngoingSemester}
        departmentWiseFeeData={departmentWiseFeeData}
        isSemesterPaymentDone={isSemesterPaymentDone}
      />
      <MonthlyFeeModal
        isOpen={isOpenMonthlyModal}
        closeModal={closeMonthlyModal}
        addPayButton={addMonthlyPayment}
        upcomingOrOngoingSemester={upcomingOrOngoingSemester}
        departmentWiseFeeData={departmentWiseFeeData}
        currentStudent={currentStudent}
      />
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-center mb-6">
          Choose Payment Option
        </h2>

        <div className="mb-4">
          <button
            type="button"
            className="btn-primary"
            onClick={openMonthlyModal}
          >
            Monthly Fee
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Pay your monthly tuition fee securely and conveniently.
          </p>
        </div>

        <div>
  <button
    type="button"
    className="btn-primary relative"
    onClick={openSemesterModal}
  >
    Semester Fee
    {isSemesterPaymentDone ? (
      <span className="absolute top-[-5px] right-[-1px] inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-md ring-1 ring-green-600/20">
        Paid
      </span>
    ) : (
      <span className="absolute top-[-5px] right-[-1px] inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-red-50 text-red-700 rounded-md ring-1 ring-red-600/10">
        Pending
      </span>
    )}
  </button>
  <p className="text-sm text-gray-600 mt-2">
    Pay for the entire semester in one transaction and save time!
  </p>
</div>

      </div>
    </div>
  )
}

export default StudentPayment
