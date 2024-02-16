import EditSvg from "../../../Components/svg/EditSvg";

const UserInfo = ({ presentUser, handleEditProfile }) => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-md">
      <img
        src={presentUser?.data?.image}
        alt="User Avatar"
        className="h-48 rounded-full mx-auto mb-4"
      />
      <h2 className="text-2xl font-bold text-center mb-4 text-primary">
        {presentUser?.data?.name}{" "}
        <span className="text-xs text-red-600">
          {presentUser?.data?.userId?.role}
        </span>
      </h2>
      {presentUser?.data?.email && (
        <p className="text-sm font-semibold text-center mb-4 text-primary">
          <span className="font-semibold text-primary text-lg">Email:</span>{" "}
          {presentUser?.data?.email}
        </p>
      )}
      <div className="flex justify-end">
        <button onClick={handleEditProfile}>
          <EditSvg />
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
