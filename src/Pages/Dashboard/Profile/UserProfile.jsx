import { useState } from "react";
import ReUsable from "../../../Components/Dialog/ReUsableModaal";
import useAuth from "../../../Hooks/useAuth";
import {
  useGetPresentUserWithAdditionalInfoQuery,
  useUpdateUserWithAdditionalInfoMutation,
} from "../../../Redux/features/User/UserApi";
import AdditionalInfoForm from "./AdditionalInfoForm";
import UserInfo from "./UserInfo";
import { useForm } from "react-hook-form";
import { profileEditContent } from "./profile.edit.constant";
import GetHostUrl from "../../../Components/GetHostUrl/GetHostUrl";
import Swal from "sweetalert2";

const UserProfile = () => {
  const { updateUserProfile } = useAuth();
  const [updateData] = useUpdateUserWithAdditionalInfoMutation();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  const { data: userInfoData } = useGetPresentUserWithAdditionalInfoQuery(
    user?.email
  );

  const handleEditProfileModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  const { handleSubmit, register } = useForm();
  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      data.name = data.name === "" ? userInfoData?.data?.name : data.name;
      data.image =
        data.image.length === 0
          ? userInfoData?.data?.image
          : (data.image = await GetHostUrl(data.image[0]));

      await updateUserProfile(data.name, data.image);

      if (user?.photoURL === data.image || data?.displayName === data.name) {
        const res = await updateData({
          id: userInfoData?.data?._id,
          data,
        }).unwrap();
        Swal.fire({
          title: res.message,
          icon: "success",
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: "error",
      });
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <ReUsable
        isOpen={isOpen}
        closeModal={closeModal}
        handleSubmit={handleSubmit}
        register={register}
        Content={profileEditContent}
        onSubmit={onSubmit}
      />
      {userInfoData?.data?.userId?.hasAdditionalInfo === true ? (
        <>
          <UserInfo
            presentUser={userInfoData}
            handleEditProfile={handleEditProfileModal}
          />
        </>
      ) : (
        <>
          <AdditionalInfoForm />
        </>
      )}
    </div>
  );
};

export default UserProfile;
