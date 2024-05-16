import { Link, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { saveAs } from 'file-saver'
import {
  useCreateStudentMutation,
  useDenyStudentMutation,
} from '../../../../Redux/features/student/student.api'
import ReUsable from '../../../../Components/Dialog/ReUsableModaal'
import { denyStudentContent } from './StudentDeny'
import { useForm } from 'react-hook-form'
import { useGetSingleAdmissionRequestQuery } from '../../../../Redux/features/Admission/Admission.api'

const AdmissionDetails = () => {
  const { Id } = useParams()
  const { data } = useGetSingleAdmissionRequestQuery(Id)
  const [denyStudent] = useDenyStudentMutation()
  const navigate = useNavigate()
  const [createStudent] = useCreateStudentMutation()
  // eslint-disable-next-line no-unused-vars
  const [waiverNumber, setWaiverNumber] = useState()
  const details = data?.data
  let [isOpen, setIsOpen] = useState(false)
  let [id, setId] = useState('')

  const downloadPhoto = (photoUrl) => {
    saveAs(photoUrl, 'profile.jpg')
  }

  const assignWaiver = () => {
    Swal.fire({
      title: 'Enter Waiver Number:',
      input: 'number',
      showCancelButton: true,
      confirmButtonText: 'Approve',
      cancelButtonText: 'Cancel',
      preConfirm: (number) => {
        setWaiverNumber(number)
      },
    }).then((result) => {
      if (result.isConfirmed) {
        // Use a callback function
        setWaiverNumber(async (waiverNumber) => {
          const data = {
            admissionRequestId: details?._id,
            waiver: Number(waiverNumber),
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
            const res = await createStudent(data).unwrap()
            Swal.fire({
              title: res.message,
              icon: 'success',
            })
          
          } catch (error) {
            Swal.fire({
              title: error?.data?.message,
              text: error?.data?.errorMessage,
              icon: 'error',
            })
          }
        })
      }
    })
  }

  const { handleSubmit, register, reset } = useForm()

  const closeModal = () => {
    setIsOpen(false)
  }

  const denyStudentModal = (id) => {
    setId(id)
    setIsOpen(true)
  }

  const onSubmit = async (data) => {
    data.id = id
    data.email = details?.email
    try {
      Swal.fire({
        title: 'wait...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        },
      })
      const res = await denyStudent(data).unwrap()
      Swal.fire({
        title: res.message,
        icon: 'success',
        timer: 1500,
      })
      navigate(`/dashboard/admission-requests-lists`)
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: 'error',
      })
    }

    setIsOpen(false)
    reset()
  }

  return (
    <div className="w-4/5 mx-auto">
      <ReUsable
        Content={denyStudentContent}
        handleSubmit={handleSubmit}
        register={register}
        onSubmit={onSubmit}
        isOpen={isOpen}
        closeModal={closeModal}
      />
      <div className="flex justify-between">
        <div>
          <img className="h-48" src={details?.profileImage} alt="" />
          {details?.profileImage && (
            <button
              className="mt-3 btn-primary text-white p-2 text-xs"
              onClick={() => downloadPhoto(details?.profileImage)}
            >
              Download Photo
            </button>
          )}
        </div>
        <div className="space-x-3">
          <button onClick={assignWaiver} className="btn-primary">
            Approve
          </button>
          <button
            onClick={() => denyStudentModal(details?._id)}
            className="btn-primary"
          >
            Deny
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <p className="pt-5">
          <span className="font-bold text-primary">Name:</span>{' '}
          <span className="font-semibold">
            {details?.name?.firstName + ' ' + details?.name?.lastName}
          </span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Batch: </span>
          <span className="font-semibold">{details?.batch?.batchNumber}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Father Name:</span>{' '}
          <span className="font-semibold">{details?.fatherName}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Father Occupation:</span>{' '}
          <span className="font-semibold">{details?.fatherOccupation}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Mother Name:</span>{' '}
          <span className="font-semibold">{details?.motherName}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Mother Occupation:</span>{' '}
          <span className="font-semibold">{details?.motherOccupation}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Present Guardian Name:</span>{' '}
          <span className="font-semibold">{details?.presentGuardianName}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">
            Present Guardian Contact No:
          </span>{' '}
          <span className="font-semibold">
            {details?.presentGuardianContact}
          </span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Date of Birth:</span>{' '}
          <span className="font-semibold">{details?.dateOfBirth}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Gender:</span>{' '}
          <span className="font-semibold">{details?.gender}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Contact Number:</span>{' '}
          <span className="font-semibold">{details?.contactNumber}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Email:</span>{' '}
          <span className="font-semibold">{details?.email}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Present Address:</span>{' '}
          <span className="font-semibold">{details?.presentAddress}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Permanent Address:</span>{' '}
          <span className="font-semibold">{details?.permanentAddress}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Blood Group:</span>{' '}
          <span className="font-semibold">{details?.bloodGroup}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Applied Department:</span>{' '}
          <span className="font-semibold">{details?.department?.name}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Nationality:</span>{' '}
          <span className="font-semibold">{details?.nationality}</span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">SSC Certificate:</span>{' '}
          <span className="font-semibold underline hover:text-red-500">
            <Link to={details?.sscCertificate} target="_blank">
              See Pdf
            </Link>
          </span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">HSC Certificate:</span>{' '}
          <span className="font-semibold underline hover:text-red-500">
            <Link to={details?.hscCertificate} target="_blank">
              See Pdf
            </Link>
          </span>
        </p>
        <p className="pt-5">
          <span className="font-bold text-primary">Transcript</span>{' '}
          <span className="font-semibold underline hover:text-red-500">
            <Link to={details?.transcript} target="_blank">
              See Pdf
            </Link>
          </span>
        </p>
      </div>
    </div>
  )
}

export default AdmissionDetails
