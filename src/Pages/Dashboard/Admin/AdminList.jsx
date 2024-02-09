import Swal from "sweetalert2";
import {
  useDeleteAnAdminMutation,
  useGetAdminListQuery,
} from "../../../Redux/User/UserApi";
import { useEffect } from "react";
import SearchSvg from "../../../Components/SearchSvg/SearchSvg";

const AdminList = () => {
  const { data: adminListData } = useGetAdminListQuery(undefined);
  const [deleteAdmin, { data: deleteAdminData, error: deleteAdminError }] =
    useDeleteAnAdminMutation();

  const data = adminListData?.data;

  useEffect(() => {
    if (deleteAdminData?.success === true) {
      Swal.fire({
        icon: "success",
        title: deleteAdminData?.message,
      });
    }
    if (deleteAdminError?.data?.success === false) {
      Swal.fire({
        icon: "error",
        title: deleteAdminError?.data?.message,
      });
    }
  }, [deleteAdminData, deleteAdminError]);

  const handleDeleteAdmin = (user) => {
    deleteAdmin(user);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <SearchSvg />
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
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.map((user) =>
            user?.userId?.role === "admin" ? (
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
                <td className="px-6 py-4">{user?.userId?.role}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteAdmin(user)}
                    className={`btn-primary`}
                  >
                    Remove Admin
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={user?._id}></tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
