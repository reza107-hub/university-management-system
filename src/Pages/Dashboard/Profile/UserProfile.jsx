import UserList from "../../../Components/UserList/UserList";
import useAuth from "../../../Hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  const [users] = UserList();
  let presentUser;
  users.map((profile) => {
    if (profile?.email === user?.email) {
      presentUser = profile;
    }
  });
  console.log(presentUser);
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={presentUser?.image}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">
          {presentUser?.name} <span className="text-xs text-red-600">{presentUser?.role}</span>
        </h2>
        <p className="text-sm font-semibold text-center mb-4">
          {presentUser?.email}
        </p>
        <p className="text-sm font-semibold text-center mb-4">
          {presentUser?.std_id}
        </p>
        <p className="text-sm font-semibold text-center mb-4">
          {presentUser?.details?.department}
        </p>
        <p className="text-sm font-semibold text-center mb-4">
          {presentUser?.details?.batchNumber}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
