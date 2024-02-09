import { useForm } from "react-hook-form";
import "./AdmissionForm.css";
import useAuth from "../../Hooks/useAuth";
import Loader from "../../Components/Loader/Loader";
import { useGetDepartmentQuery, useGetProgrammeQuery } from "../../Redux/api";
import Form from "./Form";
import GetHostUrl from "../../Components/GetHostUrl/GetHostUrl";
import { useGetPresentUserWithAdditionalInfoQuery } from "../../Redux/User/UserApi";

const AdmissionForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user, loading } = useAuth();

  const { data: userData, isLoading: isUserDetailsLoading } =
    useGetPresentUserWithAdditionalInfoQuery(user.email);

  const { data: programData } = useGetProgrammeQuery(undefined);
  const { data: getDepartmentData } = useGetDepartmentQuery(undefined);

  if (loading || isUserDetailsLoading) {
    return <Loader />;
  }

  const name = userData?.data?.name?.split(" ");
  const lastName = name[name?.length - 1];
  name.pop();
  const firstName = name?.join(" ");

  const onSubmit = async (data) => {
    const imageUrl = await GetHostUrl(data.profileImage[0]);
    const sscCertificateUrl = await GetHostUrl(data.sscCertificate[0]);
    const hscCertificateUrl = await GetHostUrl(data.hscCertificate[0]);
    data.profileImage = imageUrl;
    data.sscCertificate = sscCertificateUrl;
    data.hscCertificate = hscCertificateUrl;
    console.log(data);
  };

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
  );
};

export default AdmissionForm;
