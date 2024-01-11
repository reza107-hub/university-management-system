/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import "./AdmissionForm.css";
import GetHostUrl from "../../Components/GetHostUrl/GetHostUrl";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import UserList from "../../Components/UserList/UserList";
import useUsersAdditionalInformation from "../../Hooks/useUsersAdditionalInformation";

const AdmissionForm = () => {
  const date = new Date()
  const { user } = useAuth();
  const [users] = UserList();
  const [userInfoData] = useUsersAdditionalInformation();

  const presentUser = users?.find((data) => data?.email === user?.email);

  const presentUserWithInfo = userInfoData?.find(
    (data) => data?.email === presentUser?.email
  );

  const mergedUserInfo = {
    ...presentUser,
    ...presentUserWithInfo,
  };

  const navigate = useNavigate();
  let batchNumber;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const imageUrl = await GetHostUrl(data.profileImage[0]);
    const sscCertificateUrl = await GetHostUrl(data.sscCertificate[0]);
    const hscCertificateUrl = await GetHostUrl(data.hscCertificate[0]);

    if (data?.department === "CSE") {
      batchNumber = 61;
    } else if (data?.department === "SE") {
      batchNumber = 11;
    }

    const admissionRequestData = {
      name: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      father: {
        name: data.fatherName,
        occupation: data.fatherOccupation,
      },
      mother: {
        name: data.motherName,
        occupation: data.motherOccupation,
      },
      presentGuardian: {
        name: data.presentGuardianName,
        contact: data.presentGuardianContact,
      },
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      contactNumber: data.contactNumber,
      email: data.email,
      presentAddress: data.presentAddress,
      permanentAddress: data.permanentAddress,
      bloodGroup: data.bloodGroup,
      age: data.age,
      programme: data.programme,
      department: data.department,
      batchNumber,
      nationality: data.nationality,
      yearOfRegistration: data?.yearOfRegistration,
      image: imageUrl,
      sscCertificate: sscCertificateUrl,
      hscCertificate: hscCertificateUrl,
      createdAt:date,
      updatedAt:date
    };

    axios
      .post("http://localhost:5000/api/admission-request", admissionRequestData)
      .then((res) => {
        if (res.data) {
          Swal.fire({
            title: res.data.message,
            icon: "success",
            confirmButtonText: "OK",
          });
          navigate("/");
        }
      })
      .catch((err) => {
        Swal.fire({
          title: `${err.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="container mt-5 ">
      <div className="form-container w-[90%] mx-auto">
        <h2 className="mb-4 text-3xl font-bold text-center">
          University Admission Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="firstName" className="col-sm-2 col-form-label">
                First Name
              </label>
              <div className="w-full">
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md text-black"
                  id="firstName"
                />
                {errors.firstName && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label htmlFor="lastName" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="w-full">
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  className="form-control rounded-md w-full text-black"
                  id="lastName"
                />
                {errors.lastName && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="fatherName" className="col-sm-2 col-form-label">
                Father's Name
              </label>
              <div className="">
                <input
                  {...register("fatherName", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md text-black"
                  id="fatherName"
                />
                {errors.fatherName && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3  w-[20%]">
              <label
                htmlFor="fatherOccupation"
                className="col-sm-2 col-form-label"
              >
                Father's Occupation
              </label>
              <div className="">
                <input
                  {...register("fatherOccupation", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md text-black"
                  id="fatherOccupation"
                />
                {errors.fatherOccupation && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="motherName" className="col-sm-2 col-form-label">
                Mother's Name
              </label>
              <div className="">
                <input
                  {...register("motherName", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md text-black"
                  id="motherName"
                />
                {errors.motherName && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label
                htmlFor="motherOccupation"
                className="col-sm-2 col-form-label"
              >
                Mother's Occupation
              </label>
              <div className="">
                <input
                  {...register("motherOccupation", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md text-black"
                  id="motherOccupation"
                />
                {errors.motherOccupation && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label
                htmlFor="presentGuardianName"
                className="col-sm-2 col-form-label"
              >
                Present Guardian Name
              </label>
              <div className="">
                <input
                  {...register("presentGuardianName", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md text-black"
                  id="presentGuardianName"
                />
                {errors.presentGuardianName && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label
                htmlFor="presentGuardianContact"
                className="col-sm-2 col-form-label"
              >
                Present Guardian Contact No
              </label>
              <div className="">
                <input
                  {...register("presentGuardianContact", {
                    required: true,
                    pattern: /^[0-9]*$/,
                  })}
                  type="tel"
                  className="form-control w-full rounded-md text-black"
                  id="presentGuardianContact"
                />
                {errors.presentGuardianContact && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="dateOfBirth" className="col-sm-2 col-form-label">
                Date of Birth
              </label>
              <div className="">
                <input
                  {...register("dateOfBirth", { required: true })}
                  defaultValue={mergedUserInfo?.dateOfBirth}
                  type="date"
                  className="form-control w-full rounded-md text-black"
                  id="dateOfBirth"
                />
                {errors.dateOfBirth && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
            <div className="mb-3 w-[20%]">
              <label htmlFor="gender" className="col-sm-2 col-form-label">
                Gender
              </label>
              <div className="">
                <select
                  {...register("gender", { required: true })}
                  className="form-select w-full text-black"
                  id="gender"
                >
                  <option value={mergedUserInfo?.gender}>
                    {mergedUserInfo?.gender}
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label
                htmlFor="contactNumber"
                className="col-sm-2 col-form-label"
              >
                Contact Number
              </label>
              <div className="">
                <input
                  {...register("contactNumber", {
                    required: true,
                  })}
                  defaultValue={mergedUserInfo?.contactNumber}
                  type="tel"
                  className="form-control w-full rounded-md text-black"
                  id="contactNumber"
                />
                {errors.contactNumber && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="">
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  readOnly
                  defaultValue={user?.email}
                  type="email"
                  className="form-control w-full rounded-md text-black"
                  id="email"
                />
                {errors.email && (
                  <span className="text-red-700">Invalid email address</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label
                htmlFor="presentAddress"
                className="col-sm-2 col-form-label"
              >
                Present Address
              </label>
              <div className="">
                <textarea
                  {...register("presentAddress", { required: true })}
                  defaultValue={mergedUserInfo?.presentAddress}
                  className="form-control w-full rounded-md text-black"
                  id="presentAddress"
                ></textarea>
                {errors.presentAddress && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label
                htmlFor="permanentAddress"
                className="col-sm-2 col-form-label"
              >
                Permanent Address
              </label>
              <div className="">
                <textarea
                  {...register("permanentAddress", { required: true })}
                  defaultValue={mergedUserInfo?.permanentAddress}
                  className="form-control w-full rounded-md text-black"
                  id="permanentAddress"
                ></textarea>
                {errors.permanentAddress && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="bloodGroup" className="col-sm-2 col-form-label">
                Blood Group
              </label>
              <div className="">
                <select
                  {...register("bloodGroup", { required: true })}
                  className="form-select w-full text-black"
                  id="bloodGroup"
                >
                  <option value={mergedUserInfo?.bloodGroup}>
                    {mergedUserInfo?.bloodGroup}
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                </select>
                {errors.bloodGroup && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%] ">
              <label htmlFor="age" className="col-sm-2 col-form-label">
                Age
              </label>
              <div className="">
                <input
                  {...register("age", { required: true })}
                  type="number"
                  className="form-control w-full  rounded-md text-black"
                  id="age"
                />
                {errors.age && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="Programme" className="col-sm-2 col-form-label">
                Programme
              </label>
              <div className="">
                <select
                  {...register("programme", { required: true })}
                  className="form-select w-full text-black"
                  id="programme"
                >
                  <option value="BSC">BSC</option>
                  {/* Add more options as needed */}
                </select>
                {errors.programme && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%]">
              <label htmlFor="department" className="col-sm-2 col-form-label">
                Department
              </label>
              <div className="">
                <select
                  {...register("department", { required: true })}
                  className="form-select w-full text-black"
                  id="department"
                >
                  <option value="CSE">CSE</option>
                  <option value="SE">SE</option>
                  {/* Add more options as needed */}
                </select>
                {errors.department && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label
                htmlFor="yearOfRegistration"
                className="col-sm-2 col-form-label"
              >
                Year of Registration
              </label>
              <div className="">
                <select
                  {...register("yearOfRegistration", { required: true })}
                  className="form-select w-full text-black"
                  id="yearOfRegistration"
                >
                  <option value="2024">2024</option>
                  {/* Add more options as needed */}
                </select>
                {errors.yearOfRegistration && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>
          {/* --------------------- */}
          <div className="flex justify-center gap-7">
            <div className="mb-3 row w-[20%]">
              <label htmlFor="nationality" className="col-sm-2 col-form-label">
                Nationality
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  {...register("nationality", { required: true })}
                  className="form-select w-full text-black"
                  id="nationality"
                ></input>
                {errors.nationality && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>

            <div className="mb-3 row w-[20%]">
              <label htmlFor="profileImage" className="col-sm-2 col-form-label">
                Profile Image
              </label>
              <div className="col-sm-10">
                <input
                  {...register("profileImage", { required: true })}
                  type="file"
                  className="form-control w-full"
                  id="profileImage"
                />
                {errors.profileImage && (
                  <span className="text-red-700">This field is required</span>
                )}
              </div>
            </div>
          </div>

          {/* ------------ */}
          <div className="flex justify-center gap-7">
            <div className="mb-3 w-[20%] ">
              <label
                htmlFor="sscCertificate"
                className="col-sm-2 col-form-label"
              >
                SSC Certificate
              </label>
              <div className="">
                <input
                  {...register("sscCertificate")}
                  type="file"
                  className="form-control rounded-md w-full"
                  id="sscCertificate"
                />
              </div>
            </div>

            <div className="mb-3 w-[20%]">
              <label
                htmlFor="hscCertificate"
                className="col-sm-2 col-form-label"
              >
                HSC Certificate
              </label>
              <div className="">
                <input
                  {...register("hscCertificate")}
                  type="file"
                  className="form-control rounded-md w-full"
                  id="hscCertificate"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <div className=" offset-sm-2 text-center">
              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdmissionForm;
