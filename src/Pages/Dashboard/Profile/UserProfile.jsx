import useAuth from "../../../Hooks/useAuth";
import { useGetPresentUserWithAdditionalInfoQuery } from "../../../Redux/features/User/UserApi";
import AdditionalInfoForm from "./AdditionalInfoForm";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const { user } = useAuth();

  const { data: userInfoData } = useGetPresentUserWithAdditionalInfoQuery(
    user?.email
  );

  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {userInfoData?.data?.userId?.hasAdditionalInfo === true ? (
        <>
          <UserInfo presentUser={userInfoData} />
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
