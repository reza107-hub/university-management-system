import { useState } from "react";
import Modal from "../../../../Components/Dialog/Modal";

import Swal from "sweetalert2";
import {
  useAddProgrammeMutation,
  useDeleteProgramMutation,
  useGetProgrammeQuery,
} from "../../../../Redux/features/Programme/Programme.api";
import SearchName from "../../../../Components/Search/SearchName";

const Programs = () => {
  const [programmeName, setProgrammeName] = useState("");
  const [programmeShortName, setProgrammeShortName] = useState("");
  const [params, setParams] = useState("");
  let [isOpen, setIsOpen] = useState(false);
  const { data } = useGetProgrammeQuery(params);
  const SearchPlaceHolderName = "program";
  const [addProgramme] = useAddProgrammeMutation();
  const [deleteProgramme] = useDeleteProgramMutation();

  const postData = { name: programmeName, shortName: programmeShortName };

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const addProgButton = async () => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await addProgramme(postData).unwrap();
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
    setIsOpen(false);
  };
  const handleDeleteProgram = async (id) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await deleteProgramme(id).unwrap();
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
      <Modal
        isOpen={isOpen}
        addProgButton={addProgButton}
        setProgrammeName={setProgrammeName}
        setProgrammeShortName={setProgrammeShortName}
        closeModal={closeModal}
      />
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>
        <SearchName
          setParams={setParams}
          SearchPlaceHolderName={SearchPlaceHolderName}
        />
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
