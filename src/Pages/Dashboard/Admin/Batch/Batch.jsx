import { useState } from "react";
import {
  useAddBatchMutation,
  useGetBatchQuery,
  useUpdateBatchMutation,
} from "../../../../Redux/features/BatchApi/BatchApi";
import Modal from "../../../../Components/Dialog/BatchModal";
import SearchSvg from "../../../../Components/SearchSvg/SearchSvg";
import Swal from "sweetalert2";

const Batch = () => {
  const [batchNumber, setBatchNumber] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  const { data: batchData } = useGetBatchQuery(undefined);
  // console.log(batchData?.data);
  const [addBatch] = useAddBatchMutation();
  const [updateBatch] = useUpdateBatchMutation();
  // const [isAdmissionGoing, setIsAdmissionGoing] = useState(false);
  const postData = { batchNumber: Number(batchNumber)};
  // console.log(postData)
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const addBatchButton = async () => {
    try {
      Swal.fire({
        title: "plz wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const res = await addBatch(postData).unwrap();
      // console.log(res)
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
      // console.log(error);
    }
    setIsOpen(false);
  };
  const handleToggleAdmissionGoing = async(currentAdmissionStatus, batchId) => {
    const updatedAdmissionStatus = !currentAdmissionStatus;
    const data = {isAdmissionGoing:updatedAdmissionStatus}
    console.log(data)
   try {
    Swal.fire({
      title: "plz wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await updateBatch({ id: batchId, body: data }).unwrap()
    console.log(res)
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
        addBatchButton={addBatchButton}
        closeModal={closeModal}
        setBatchNumber={setBatchNumber}
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
            Add Batch
          </button>
        </div>
      </div>

      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mx-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center w-full">
          <tr>
            <th scope="col" className="px-6 py-3 text-center">
              Batch No
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="text-center">
          {batchData?.data.map((result) =>
            batchData.data ? (
              <tr
                key={result?._id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 font-bold text-lg">
                  {result?.batchNumber}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() =>
                      handleToggleAdmissionGoing(
                        result?.isAdmissionGoing,
                        result?._id
                      )
                    }
                    className={`btn-primary`}
                  >
                    {result?.isAdmissionGoing
                      ? "Admission Going"
                      : "Admission Closed"}
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

export default Batch;
