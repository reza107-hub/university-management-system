import { useEffect, useState } from "react";
import SearchSvg from "../../../../Components/SearchSvg/SearchSvg";
import Modal from "../../../../Components/Dialog/Modal";

import Swal from "sweetalert2";
import {
  useAddProgrammeMutation,
  useDeleteProgramMutation,
  useGetProgrammeQuery,
} from "../../../../Redux/features/Programme/Programme.api";

const Programs = () => {
  const [programmeName, setProgrammeName] = useState("");
  const [programmeShortName, setProgrammeShortName] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  const { data } = useGetProgrammeQuery(undefined);
  const [
    addProgramme,
    {
      isLoading,
      isError: isAddProgError,
      isSuccess: isAddProgSuccess,
      error: addProgrammeError,
    },
  ] = useAddProgrammeMutation();
  const [
    deleteProgramme,
    {
      isLoading: isDeleteProgrammeLoading,
      isSuccess: isDeleteProgrammeSuccess,
      isError: isDeleteProgrammeError,
      error: deleteProgrammeError,
    },
  ] = useDeleteProgramMutation();

  const postData = { name: programmeName, shortName: programmeShortName };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const addProgButton = () => {
    addProgramme(postData);
    setIsOpen(false);
  };
  const handleDeleteProgram = (id) => {
    deleteProgramme(id);
  };

  useEffect(() => {
    if (isAddProgSuccess) {
      Swal.fire({
        icon: "success",
        title: `Programmed Added Successfully`,
        showConfirmButton: true,
      });
    }
    if (isAddProgError) {
      Swal.fire({
        icon: "error",
        title: `${addProgrammeError.data.message}`,
        text: `${addProgrammeError.data.errorMessage}`,
        showConfirmButton: true,
      });
    }

    if (isDeleteProgrammeError) {
      Swal.fire({
        icon: "error",
        title: `${deleteProgrammeError.data.message}`,
        text: `${deleteProgrammeError.data.errorMessage}`,
        showConfirmButton: true,
      });
    }

    if (isDeleteProgrammeSuccess) {
      Swal.fire({
        icon: "success",
        title: `Programmed Deleted Successfully`,
        showConfirmButton: true,
      });
    }
  }, [
    isAddProgSuccess,
    isAddProgError,
    addProgrammeError,
    isDeleteProgrammeError,
    isDeleteProgrammeSuccess,
    isLoading,
    isDeleteProgrammeLoading,
    deleteProgrammeError,
  ]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <Modal
        isOpen={isOpen}
        addProgButton={addProgButton}
        setProgrammeName={setProgrammeName}
        setProgrammeShortName={setProgrammeShortName}
        closeModal={closeModal}
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
            Add Program
          </button>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Programmes
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Programmes Short Name
            </th>
            <th scope="col" className="px-6 py-3 text-center"></th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data?.data.map((result) =>
            data.data ? (
              <tr
                key={result?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">{result?.name}</td>
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.shortName}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDeleteProgram(result?._id)}
                    className={`btn-primary`}
                  >
                    Delete This Programme
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

export default Programs;
