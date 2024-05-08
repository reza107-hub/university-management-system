import Swal from "sweetalert2";
import StudentManuallyAdmissionForm from "./StudentManuallyAdmissionForm";
import GetHostUrl from "../../../../Components/GetHostUrl/GetHostUrl";
import { useForm } from "react-hook-form";
import { useGetProgrammeQuery } from "../../../../Redux/features/Programme/Programme.api";
import { useGetDepartmentQuery } from "../../../../Redux/features/Department/department.api";
import { useGetBatchQuery } from "../../../../Redux/features/BatchApi/BatchApi";
// import { useCreateAdmissionRequestMutation } from "../../../../Redux/features/Admission/Admission.api";
import { useGetSemesterRegistrationQuery } from "../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api";
import { useNavigate } from "react-router-dom";
import { useCreateStudentManuallyMutation } from "../../../../Redux/features/student/student.api";

const AddStudentManually = () => {
    const { data } = useGetSemesterRegistrationQuery()
    const semester = data?.data?.find((result) => result?.status === 'UPCOMING')
    const navigate = useNavigate()
    // const [createAdmissionRequest] = useCreateAdmissionRequestMutation()
    const [createStudentManually] = useCreateStudentManuallyMutation()
    const { data: programData } = useGetProgrammeQuery(undefined)
    const { data: getDepartmentData } = useGetDepartmentQuery(undefined)
    const { data: batchData } = useGetBatchQuery(undefined)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm()
  
    const onSubmit = async (data) => {
      try {
        Swal.fire({
          title: 'wait...',
          allowEscapeKey: false,
          allowOutsideClick: false,
          didOpen: () => {
            Swal.showLoading()
          },
        })
        data.name = {
          firstName: data.firstName,
          lastName: data.lastName,
        }
        data.profileImage = await GetHostUrl(data.profileImage[0])
        data.sscCertificate = await GetHostUrl(data.sscCertificate[0])
        data.hscCertificate = await GetHostUrl(data.hscCertificate[0])
        const batchArray = batchData?.data?.filter(
          (batch) => batch?.deptId?._id === data.department,
        )
        const batch = batchArray?.find((b) => b?.isAdmissionGoing === true)
        data.batch = batch?._id
        data.semester = semester._id
        data.waiver = Number(data.waiver)
        console.log(data)
        const res = await createStudentManually(data).unwrap()
        Swal.fire({
          title: res.message,
          icon: 'success',
          timer: 1500,
        })
        navigate('/dashboard/students')
      
      } catch (error) {
        console.log(error)
        Swal.fire({
          title: error?.data?.message,
          text: error?.data?.errorMessage,
          icon: 'error',
        })
      }
    }
  
    return (
        <div>
        <StudentManuallyAdmissionForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          programData={programData}
          getDepartmentData={getDepartmentData}
        />
        </div>
    );
};

export default AddStudentManually;