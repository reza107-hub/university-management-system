import Swal from "sweetalert2";
import UserList from "../../../Components/UserList/UserList";
import useUsersAdditionalInformation from "../../../Hooks/useUsersAdditionalInformation";
import useAxios from "../../../Hooks/useAxios";

const ManageUsers = () => {
  const [axiosCreate] = useAxios();
  const [users, refetch] = UserList();
  const [userInfoData] = useUsersAdditionalInformation();

  let finalUserListWithIfo = [];

  const date = new Date();

  users?.forEach((element) => {
    // console.log(element);
    const infoData = {};
    userInfoData?.map((userInfo) => {
      if (element._id === userInfo.userId) {
        infoData.userId = userInfo.userId;
        infoData.image = userInfo?.image;
        infoData.name = userInfo?.name;
        infoData.email = element?.email;
        infoData.role = element?.role;
        infoData.gender = userInfo?.gender;
        infoData.dateOfBirth = userInfo?.dateOfBirth;
        infoData.contactNumber = userInfo?.contactNumber;
        infoData.presentAddress = userInfo?.presentAddress;
        infoData.permanentAddress = userInfo?.permanentAddress;
        infoData.isDeleted = false;
        infoData.createdAt = date;
        infoData.updatedAt = date;

        finalUserListWithIfo.push(infoData);
      }
    });
  });

  const handleMakeAdmin = (user) => {
    console.log(user);
    axiosCreate.patch(`/users/admin/${user.userId}`,user).then((response) => {
      if (response.data) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleDeleteAdmin = (user) => {
    fetch(`http://localhost:5000/users/remove/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is remove from Admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <label className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                makeAdmin
              </th>
              <th scope="col" className="px-6 py-3">
                deleteAdmin
              </th>
            </tr>
          </thead>
          <tbody>
            {finalUserListWithIfo?.map((user) => (
              <tr
                key={user?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user?.image}
                    alt={`Profile of ${user?.name}`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{user?.name}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4">
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      // disabled={user?.role}
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn-primary`}
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td className="px-6 py-4">
                  {user?.role === "admin" ? (
                    <button
                      onClick={() => handleDeleteAdmin(user)}
                      className={`btn-primary`}
                    >
                      Delete Admin
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
