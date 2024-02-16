import { useState } from "react";
import ReUsable from "../../../../Components/Dialog/ReUsableModaal";
import { useForm } from "react-hook-form";
import SemesterRegistrationContent from "./SemesterRegistranContent";
import {
  useCreateSemesterRegistrationMutation,
  useGetSemesterRegistrationQuery,
  useUpdateStatusSemesterRegistrationMutation,
} from "../../../../Redux/features/SemesterrRegistration/SemesterrRegistration.api";
import Swal from "sweetalert2";
import Table from "../../../../Components/Table/Table";

const SemesterRegistration = () => {
  const [updateStatus] = useUpdateStatusSemesterRegistrationMutation();
  const { data: semesterRegistrationData } =
    useGetSemesterRegistrationQuery(undefined);
  const [createSemesterRegistration] = useCreateSemesterRegistrationMutation();
  const [semesterRegistrationContent] = SemesterRegistrationContent();
  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: "wait...",
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      data.minCredit = Number(data.minCredit);
      data.maxCredit = Number(data.maxCredit);
      const res = await createSemesterRegistration(data).unwrap();
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
    reset();
    closeModal();
  };

  const handleStatus = (id, status) => {
    if (status !== "") {
      const body = { status };
      updateStatus({ id, body });
    }
  };
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <ReUsable
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={onSubmit}
        Content={semesterRegistrationContent}
        handleSubmit={handleSubmit}
        register={register}
      />

      <div className="flex items-center justify-end flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <div>
          <button type="button" onClick={openModal} className="btn-primary">
            Add Academic Semester
          </button>
        </div>
      </div>
      {/* TAble */}
      {
        <Table Content={semesterRegistrationContent}>
          {semesterRegistrationData?.data?.map((semester) => (
            <tr
              key={semester?._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-bold text-lg">
                {semester?.academicSemester?.name}{" "}
                <span
                  className={`text-xs font-semibold ${
                    semester?.status === "UPCOMING"
                      ? "text-green-700"
                      : semester?.status === "ONGOING"
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                >
                  ({semester?.status})
                </span>
              </td>
              <td className="px-6 py-4 font-bold text-lg">
                {semester?.minCredit}
              </td>
              <td className="px-6 py-4 font-bold text-lg">
                {semester?.maxCredit}
              </td>
              <td className="px-6 py-4">
                <select
                  defaultValue={semester?.status}
                  name="Status"
                  onClick={(e) => handleStatus(semester?._id, e.target.value)}
                >
                  <option value="">{semester?.status}</option>
                  <option value="ONGOING">On going</option>
                  <option value="ENDED">Ended</option>
                </select>
              </td>
            </tr>
          ))}
        </Table>
      }
    </div>
  );
};

export default SemesterRegistration;
