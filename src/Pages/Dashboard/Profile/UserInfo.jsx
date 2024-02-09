const UserInfo = ({ presentUser }) => {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img
          src={presentUser?.data?.image}
          alt="User Avatar"
          className="w-20 h-20 rounded-full mx-auto mb-4"
        />
        <h2 className="text-2xl font-bold text-center mb-4">
          {presentUser?.data?.name}{" "}
          <span className="text-xs text-red-600">
            {presentUser?.data?.userId?.role}
          </span>
        </h2>
        <p className="text-sm font-semibold text-center mb-4">
          {presentUser?.data?.email}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
