import { useEffect, useState } from "react";
import DepartmentModel from "../../../../Components/Dialog/DepartmentModel";
import SearchSvg from "../../../../Components/SearchSvg/SearchSvg";
import {
  useAddDepartmentMutation,
  useGetDepartmentQuery,
  useGetProgrammeQuery,
} from "../../../../Redux/api";
import Swal from "sweetalert2";

const Department = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [deptCode, setDeptCode] = useState("");
  const [deptName, setDeptName] = useState("");
  const [deptShortName, setDeptShortName] = useState("");
  const [deptProgramme, setDeptProgramme] = useState("");

  const { data } = useGetProgrammeQuery(undefined);

  const { data: getDepartmentData } = useGetDepartmentQuery(undefined);

  const [
    addDepartment,
    {
      isError: isAddDeptError,
      isSuccess: isAddDeptSuccess,
      error: AddDeptError,
    },
  ] = useAddDepartmentMutation();

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const departmentData = {
    code: deptCode,
    name: deptName,
    shortForm: deptShortName,
    program: deptProgramme,
  };
  const addDeptButton = () => {
    addDepartment(departmentData);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isAddDeptSuccess) {
      Swal.fire({
        icon: "success",
        title: `Programmed Added Successfully`,
        showConfirmButton: true,
      });
    }

    if (isAddDeptError) {
      Swal.fire({
        icon: "error",
        title: `${AddDeptError.data.message}`,
        text: `${AddDeptError.data.errorMessage}`,
        showConfirmButton: true,
      });
    }
  }, [isAddDeptSuccess, isAddDeptError, AddDeptError]);
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <DepartmentModel
        isOpen={isOpen}
        addDeptButton={addDeptButton}
        setDeptCode={setDeptCode}
        setDeptName={setDeptName}
        setDeptShortName={setDeptShortName}
        setDeptProgramme={setDeptProgramme}
        closeModal={closeModal}
        data={data}
      />
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
        <div>
          <button type="button" onClick={openModal} className="btn-primary">
            Add Department
          </button>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Department code
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Department Name
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Department Short Form
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Programme
            </th>
            <th scope="col" className="px-6 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {getDepartmentData?.data.map((result) =>
            getDepartmentData.data ? (
              <tr
                key={result?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{result?.code}</td>
                <td className="px-6 py-4 font-bold text-lg">{result?.name}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.shortForm}
                </td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.program?.name}
                </td>
                <td className="px-6 py-4">
                  <button
                    // onClick={() => handleDeleteProgram(result?._id)}
                    className={`btn-primary`}
                  >
                    Delete This Department
                  </button>
                </td>
              </tr>
            ) : (
              <tr key={result._id}></tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Department;
