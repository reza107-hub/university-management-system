const UserInfo = ({ presentUser, presentUserWithInfo, user }) => {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={presentUserWithInfo?.image}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">
          {user?.displayName}{" "}
          <span className="text-xs text-red-600">{presentUser?.role}</span>
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

export default UserInfo;
