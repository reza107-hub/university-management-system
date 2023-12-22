import UserList from "../../../Components/UserList/UserList";
import useAuth from "../../../Hooks/useAuth";
import useUsersAdditionalInformation from "../../../Hooks/useUsersAdditionalInformation";
import AdditionalInfoForm from "./AdditionalInfoForm";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const { user } = useAuth();
  const [users] = UserList();
  const [userInfoData] = useUsersAdditionalInformation();

  const presentUser = users.find(
    (userFromDb) => userFromDb?.email === user?.email
  );
  const presentUserWithInfo = userInfoData?.find(
    (additionalInfo) => additionalInfo?.email === presentUser?.email
  );
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      {presentUser?.hasAdditionalInfo === true ? (
        <>
          <UserInfo
            presentUser={presentUser}
            presentUserWithInfo={presentUserWithInfo}
            user={user}
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
