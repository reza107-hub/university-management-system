import Swal from "sweetalert2";
import { useGetUserWithAdditionalInfoQuery } from "../../../Redux/features/User/UserApi";
import { useCreateAdminMutation } from "../../../Redux/features/admin/admin.api";
import { useCreateFacultyMutation } from "../../../Redux/features/faculty/FacultyApi";
import { useState } from "react";
import SearchName from "../../../Components/Search/SearchName";

const ManageUsers = () => {
  const [params, setParams] = useState('')
  
  const { data: userInfoData } = useGetUserWithAdditionalInfoQuery(params);
  const [createAdmin] = useCreateAdminMutation();
 const [crateFaculty] = useCreateFacultyMutation()

const SearchPlaceHolderName = 'users'

  const handleMakeAdmin = async (user) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await createAdmin(user).unwrap();
      Swal.fire({
        title: res.message,
        icon: "success",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: "error",
      });
    }
  };
  const handleMakeFaculty = async (user) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await crateFaculty(user).unwrap();
      Swal.fire({
        title: res.message,
        icon: "success",
        timer: 1500,
      });
    } catch (error) {
      Swal.fire({
        title: error?.data?.message,
        text: error?.data?.errorMessage,
        icon: "error",
      });
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>
        <SearchName setParams={setParams} SearchPlaceHolderName={SearchPlaceHolderName}/>
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
          {userInfoData?.data?.map((user) =>
            user?.userId?.role === "user" ? (
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
                  {user?.role === "admin" ? (
                    <></>
                  ) : (
                    <>
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className={`btn-primary`}
                    >
                      Make Admin
                    </button>
                    <button
                      onClick={() => handleMakeFaculty(user)}
                      className={`btn-primary`}
                    >
                      Make faculty
                    </button>
                    </>
                  )}
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

export default ManageUsers;
