import { useEffect, useState } from "react";
import DepartmentModel from "../../../../Components/Dialog/DepartmentModel";

import Swal from "sweetalert2";
import { useGetProgrammeQuery } from "../../../../Redux/features/Programme/Programme.api";
import {
  useAddDepartmentMutation,
  useGetDepartmentQuery,
} from "../../../../Redux/features/Department/department.api";
import SearchName from "../../../../Components/Search/SearchName";

const Department = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [params, setParams] = useState('')
  const [deptCode, setDeptCode] = useState("");
  const [deptName, setDeptName] = useState("");
  const [deptShortName, setDeptShortName] = useState("");
  const [deptProgramme, setDeptProgramme] = useState("");

  const { data } = useGetProgrammeQuery(undefined);

  const { data: getDepartmentData } = useGetDepartmentQuery(params);
  const SearchPlaceHolderName = 'Department'
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
        <SearchName setParams={setParams} SearchPlaceHolderName={SearchPlaceHolderName}/>
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
