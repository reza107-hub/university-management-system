import { useState } from "react";
import SemesterFeeModal from "../../../../Components/Dialog/SemesterFeeModal";
import { useGetSemesterRegistrationQuery } from "../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { useGetAllStudentsQuery, useSemesterPaymentMutation } from "../../../../Redux/features/student/student.api";
import { useGetDepartmentWiseStudentFeeQuery } from "../../../../Redux/features/Department/department.api";

const StudentPayment = () => {
  const { user } = useAuth()
  // console.log(user.email)
  let [isOpen, setIsOpen] = useState(false)
  const [semesterPayment] = useSemesterPaymentMutation()
  const {data:semesterRegistrationData} = useGetSemesterRegistrationQuery(undefined)
  const{data:AllStudentsData} = useGetAllStudentsQuery(undefined)
  const{data:departmentWiseStudentFeeData} = useGetDepartmentWiseStudentFeeQuery(undefined)
const upcomingOrOngoingSemester = semesterRegistrationData?.data?.find((i)=>i.status==='UPCOMING'|'ONGOING')
const currentStudent = AllStudentsData?.data?.find((i)=>i.admissionRequestId.email === user.email)
const semesterFeeTotalAmountData = departmentWiseStudentFeeData?.data?.find((i)=>i?.departmentId?._id===currentStudent?.admissionRequestId?.department?._id)

const fullName = currentStudent?.admissionRequestId?.name?.firstName + " " + currentStudent?.admissionRequestId?.name?.lastName

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }


  const addPayButton = async () => {
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
        name:fullName,
        email:currentStudent?.admissionRequestId?.email,
        studentId:currentStudent?._id,
        departmentId:currentStudent?.admissionRequestId?.department?._id,
        semesterRegistrationId:upcomingOrOngoingSemester?._id,
        fee:semesterFeeTotalAmountData?.semesterFee,
        contactNumber:currentStudent?.admissionRequestId?.contactNumber
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
    setIsOpen(false)
  }
  return (
    <div>
      <SemesterFeeModal 
      isOpen={isOpen}
      closeModal={closeModal}
      upcomingOrOngoingSemester={upcomingOrOngoingSemester}
      addPayButton={addPayButton}
      semesterFeeTotalAmountData={semesterFeeTotalAmountData}
      
      />
      <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-6">Choose Payment Option</h2>
      
      <div className="mb-4">
        <button type="button" className="btn-primary">
          Monthly Fee
        </button>
        <p className="text-sm text-gray-600 mt-2">Pay your monthly tuition fee securely and conveniently.</p>
      </div>
      
      <div>
        <button type="button" className="btn-primary"  onClick={openModal}>
          Semester Fee
        </button>
        <p className="text-sm text-gray-600 mt-2">Pay for the entire semester in one transaction and save time!</p>
      </div>
    </div>
    </div>
  );
};

export default StudentPayment;
