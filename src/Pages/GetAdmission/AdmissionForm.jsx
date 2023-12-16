/* eslint-disable react/no-unescaped-entities */

import { useForm } from "react-hook-form";
import "./AdmissionForm.css";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
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
                  className="form-control w-full rounded-md"
                  id="firstName"
                />
                {errors.firstName && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control rounded-md w-full"
                  id="lastName"
                />
                {errors.lastName && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full rounded-md"
                  id="fatherName"
                />
                {errors.fatherName && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full rounded-md"
                  id="fatherOccupation"
                />
                {errors.fatherOccupation && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full rounded-md"
                  id="motherName"
                />
                {errors.motherName && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full rounded-md"
                  id="motherOccupation"
                />
                {errors.motherOccupation && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full rounded-md"
                  id="presentGuardianName"
                />
                {errors.presentGuardianName && (
                  <span className="text-danger">This field is required</span>
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
                  {...register("presentGuardianContact", { required: true })}
                  type="text"
                  className="form-control w-full rounded-md"
                  id="presentGuardianContact"
                />
                {errors.presentGuardianContact && (
                  <span className="text-danger">This field is required</span>
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
                  type="date"
                  className="form-control w-full rounded-md"
                  id="dateOfBirth"
                />
                {errors.dateOfBirth && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-select w-full"
                  id="gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && (
                  <span className="text-danger">This field is required</span>
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
                  {...register("contactNumber", { required: true })}
                  type="tel"
                  className="form-control w-full rounded-md"
                  id="contactNumber"
                />
                {errors.contactNumber && (
                  <span className="text-danger">This field is required</span>
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
                  type="email"
                  className="form-control w-full rounded-md"
                  id="email"
                />
                {errors.email && (
                  <span className="text-danger">Invalid email address</span>
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
                  className="form-control w-full rounded-md"
                  id="presentAddress"
                ></textarea>
                {errors.presentAddress && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full rounded-md"
                  id="permanentAddress"
                ></textarea>
                {errors.permanentAddress && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-select w-full"
                  id="bloodGroup"
                >
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
                  <span className="text-danger">This field is required</span>
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
                  className="form-control w-full  rounded-md"
                  id="age"
                />
                {errors.age && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-select w-full"
                  id="department"
                >
                  <option value="computerScience">Computer Science</option>
                  <option value="biology">Biology</option>
                  {/* Add more options as needed */}
                </select>
                {errors.department && (
                  <span className="text-danger">This field is required</span>
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
                  className="form-select w-full"
                  id="yearOfRegistration"
                >
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  {/* Add more options as needed */}
                </select>
                {errors.yearOfRegistration && (
                  <span className="text-danger">This field is required</span>
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
              <select
                {...register("nationality", { required: true })}
                className="form-select w-full"
                id="nationality"
              >
                <option value="us">United States</option>
                <option value="ca">Bangladesh</option>
                <option value="uk">United Kingdom</option>
                
              </select>
              {errors.nationality && (
                <span className="text-danger">This field is required</span>
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
                <span className="text-danger">This field is required</span>
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
