/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form'
import './AdmissionForm.css'
import useAuth from '../../Hooks/useAuth'
import Loader from '../../Components/Loader/Loader'
import Form from './Form'
import GetHostUrl from '../../Components/GetHostUrl/GetHostUrl'
import { useGetPresentUserWithAdditionalInfoQuery } from '../../Redux/features/User/UserApi'
import { useGetProgrammeQuery } from '../../Redux/features/Programme/Programme.api'
import { useGetDepartmentQuery } from '../../Redux/features/Department/department.api'
import { useGetBatchQuery } from '../../Redux/features/BatchApi/BatchApi'
import { useCreateAdmissionRequestMutation } from '../../Redux/features/Admission/Admission.api'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useGetSemesterRegistrationQuery } from '../../Redux/features/SemesterrRegistration/SemesterrRegistration.api'

const AdmissionForm = () => {
  const { data } = useGetSemesterRegistrationQuery()
  const semester = data?.data?.find((result) => result?.status === 'UPCOMING')
  const navigate = useNavigate()
  const { user, loading } = useAuth()
  const [createAdmissionRequest] = useCreateAdmissionRequestMutation()

  const { data: userData, isLoading: isUserDetailsLoading } =
    useGetPresentUserWithAdditionalInfoQuery(user.email)

  const { data: programData } = useGetProgrammeQuery(undefined)
  const { data: getDepartmentData } = useGetDepartmentQuery(undefined)
  const { data: batchData } = useGetBatchQuery()

  const name = userData?.data?.name?.split(' ')
  let lastName
  let firstName
  if (name[name?.length - 1]) {
    lastName = name[name?.length - 1]
    name.pop()
    firstName = name?.join(' ')
  }

  const defaultValues = {
    firstName,
    lastName,
    dateOfBirth: userData?.data?.dateOfBirth,
    gender: userData?.data?.gender,
    contactNumber: userData?.data?.contactNumber,
    email: userData?.data?.email,
    presentAddress: userData?.data?.presentAddress,
    permanentAddress: userData?.data?.permanentAddress,
    bloodGroup: userData?.data?.bloodGroup,
    program: '65a3bfbc890269eafebddd7e',
    department: '65a4025728dca38bae466a4a',
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues })

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
      data.userId = userData?.data?.userId?._id
      data.profileImage = await GetHostUrl(data.profileImage[0])
      data.sscCertificate = await GetHostUrl(data.sscCertificate[0])
      data.hscCertificate = await GetHostUrl(data.hscCertificate[0])
      const batchArray = batchData?.data?.filter(
        (batch) => batch?.deptId === data.department,
      )

      const batch = batchArray?.find((b) => b?.isAdmissionGoing === true)

      if (batch) {
        data.batch = batch?.batchNumber
      }
      data.semester = semester._id

      const { firstName, lastName, ...postData } = data

      const res = await createAdmissionRequest(postData).unwrap()
      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 2000,
      })
      navigate('/')
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }
  }

  if (loading || isUserDetailsLoading) {
    return <Loader />
  }

  return (
    <div className="">
      <div className="form-container">
        <h2 className="mb-4 text-3xl font-bold text-center">
          University Admission Form
        </h2>
        <Form
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
          firstName={firstName}
          lastName={lastName}
          userData={userData}
          programData={programData}
          getDepartmentData={getDepartmentData}
        />
      </div>
    </div>
  )
}

export default AdmissionForm
