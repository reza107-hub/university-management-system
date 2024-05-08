
const StudentManuallyAdmissionForm = ({
    handleSubmit,
    onSubmit,
    register,
    errors,
    programData,
    getDepartmentData,
  }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-7">
          <div className="mb-3 w-[20%]">
            <label htmlFor="firstName" className="col-sm-2 col-form-label">
              First Name
            </label>
            <div className="w-full">
              <input
                {...register('firstName', { required: true })}
                type="text"
                className="form-control w-full rounded-md text-black"
               
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
                {...register('lastName', { required: true })}
                type="text"
                className="form-control rounded-md w-full text-black"
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
              {`Father's Name`}
            </label>
            <div className="">
              <input
                {...register('fatherName', { required: true })}
                type="text"
                className="form-control w-full rounded-md text-black"
              />
              {errors.fatherName && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
  
          <div className="mb-3  w-[20%]">
            <label htmlFor="fatherOccupation" className="col-sm-2 col-form-label">
              {`Father's Occupation`}
            </label>
            <div className="">
              <input
                {...register('fatherOccupation', { required: true })}
                type="text"
                className="form-control w-full rounded-md text-black"
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
              {`Mother's Name`}
            </label>
            <div className="">
              <input
                {...register('motherName', { required: true })}
                type="text"
                className="form-control w-full rounded-md text-black"
              />
              {errors.motherName && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
  
          <div className="mb-3 w-[20%]">
            <label htmlFor="motherOccupation" className="col-sm-2 col-form-label">
              {`Mother's Occupation`}
            </label>
            <div className="">
              <input
                {...register('motherOccupation', { required: true })}
                type="text"
                className="form-control w-full rounded-md text-black"
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
                {...register('presentGuardianName', { required: true })}
                type="text"
                className="form-control w-full rounded-md text-black"
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
                {...register('presentGuardianContact', {
                  required: true,
                  pattern: /^[0-9]*$/,
                })}
                type="tel"
                className="form-control w-full rounded-md text-black"
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
                {...register('dateOfBirth', { required: true })}
                type="date"
                className="form-control w-full rounded-md text-black"
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
                {...register('gender', { required: true })}
                className="form-select w-full text-black"
              >
                <option defaultValue="male">Male</option>
                <option defaultValue="female">Female</option>
              </select>
              {errors.gender && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
        </div>
  
        <div className="flex justify-center gap-7">
          <div className="mb-3 w-[20%]">
            <label htmlFor="contactNumber" className="col-sm-2 col-form-label">
              Contact Number
            </label>
            <div className="">
              <input
                {...register('contactNumber', {
                  required: true,
                })}
                type="tel"
                className="form-control w-full rounded-md text-black"
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
                {...register('email', {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                type="email"
                className="form-control w-full rounded-md text-black"
              />
              {errors.email && (
                <span className="text-red-700">Invalid email address</span>
              )}
            </div>
          </div>
        </div>
  
        <div className="flex justify-center gap-7">
          <div className="mb-3 w-[20%]">
            <label htmlFor="presentAddress" className="col-sm-2 col-form-label">
              Present Address
            </label>
            <div className="">
              <textarea
                {...register('presentAddress', { required: true })}
                className="form-control w-full rounded-md text-black"
              ></textarea>
              {errors.presentAddress && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
  
          <div className="mb-3 w-[20%]">
            <label htmlFor="permanentAddress" className="col-sm-2 col-form-label">
              Permanent Address
            </label>
            <div className="">
              <textarea
                {...register('permanentAddress', { required: true })}
                className="form-control w-full rounded-md text-black"
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
                {...register('bloodGroup', { required: true })}
                className="form-select w-full text-black"
              >
                <option defaultValue="A+">A+</option>
                <option defaultValue="A-">A-</option>
                <option defaultValue="B+">B+</option>
                <option defaultValue="B-">B-</option>
                <option defaultValue="O+">O+</option>
                <option defaultValue="O-">O-</option>
                <option defaultValue="AB+">AB+</option>
                <option defaultValue="AB-">AB-</option>
              </select>
              {errors.bloodGroup && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
          </div>
  
          <div className="mb-3 w-[20%]">
            <label htmlFor="Program" className="col-sm-2 col-form-label">
              Program
            </label>
            <div className="">
              <select
                {...register('program', { required: true })}
                className="form-select w-full text-black"
              >
                {programData?.data.map((program) => (
                  <option key={program?._id} value={program?._id}>
                    {program?.name}
                  </option>
                ))}
                {/* Add more options as needed */}
              </select>
              {errors.program && (
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
                {...register('department', { required: true })}
                className="form-select w-full text-black"
              >
                {getDepartmentData?.data.map((department) => (
                  <option key={department._id} value={department._id}>
                    {department?.name}
                  </option>
                ))}
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
                {...register('yearOfRegistration', { required: true })}
                className="form-select w-full text-black"
              >
                <option defaultValue="2024">2024</option>
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
                {...register('nationality', { required: true })}
                className="form-select w-full text-black"
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
                {...register('profileImage', { required: true })}
                type="file"
                className="form-control w-full"
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
            <label htmlFor="sscCertificate" className="col-sm-2 col-form-label">
              SSC Certificate
            </label>
            <div className="">
              <input
                {...register('sscCertificate')}
                type="file"
                className="form-control rounded-md w-full"
              />
            </div>
          </div>
  
          <div className="mb-3 w-[20%]">
            <label htmlFor="hscCertificate" className="col-sm-2 col-form-label">
              HSC Certificate
            </label>
            <div className="">
              <input
                {...register('hscCertificate')}
                type="file"
                className="form-control rounded-md w-full"
              />
            </div>
          </div>
        </div>
          {/* ----------------- */}
        
          <div className="flex justify-center">
        <div className="mb-3 w-[20%]">
            <label htmlFor="waiver" className="col-sm-2 col-form-label">
              Waiver
            </label>
            <div className="">
              <input
                {...register('waiver')}
                type="number"
                className="form-control rounded-md w-full"
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
    );
};

export default StudentManuallyAdmissionForm;