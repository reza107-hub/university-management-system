import { useEffect, useState } from "react";
import ReUsable from "../../../../Components/Dialog/ReUsableModaal";
import { academicSemesterContent } from "./AcademicSemester.constant";

import Table from "../../../../Components/Table/Table";

import Swal from "sweetalert2";
import {
  useAddAcademicSemesterMutation,
  useGetAcademicSemesterQuery,
} from "../../../../Redux/features/AcademicSemester/AcademicSemester.api";
import SearchName from "../../../../Components/Search/SearchName";

const AcademicSemester = () => {
  const [params, setParams] = useState('')
  const [
    addAcademicSemester,
    { data: academicSemesterData, error: academicSemesterError },
  ] = useAddAcademicSemesterMutation();

  const { data: getAcademicSemesterData } =
    useGetAcademicSemesterQuery(params);

  let [isOpen, setIsOpen] = useState(false);
  let [isOpenForUpdate, setIsOpenForUpdate] = useState(false);
  const SearchPlaceHolderName = 'Academic semester'
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    addAcademicSemester(data);
    closeModal();
  };

  // update section
  const openModalForUpdate = () => {
    setIsOpenForUpdate(true);
  };
  const closeModalForUpdate = () => {
    setIsOpenForUpdate(false);
  };
  // pending
  const onSubmitForUpdate = (data) => {
    console.log(data);
    closeModalForUpdate();
  };
  useEffect(() => {
    if (academicSemesterData?.success === true) {
      Swal.fire({
        icon: "success",
        title: academicSemesterData?.message,
      });
    }
    if (academicSemesterError?.data?.success === false) {
      Swal.fire({
        icon: "error",
        title: academicSemesterError?.data?.message,
      });
    }
  }, [academicSemesterData, academicSemesterError]);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <ReUsable
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={onSubmit}
        Content={academicSemesterContent}
      />
      {/* this is for update */}
      <ReUsable
        isOpen={isOpenForUpdate}
        closeModal={closeModalForUpdate}
        onSubmit={onSubmitForUpdate}
        Content={academicSemesterContent}
      />
      <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
        <label className="sr-only">Search</label>
        <SearchName setParams={setParams} SearchPlaceHolderName={SearchPlaceHolderName}/>
        <div>
          <button type="button" onClick={openModal} className="btn-primary">
            Add Academic Semester
          </button>
        </div>
      </div>
      {/* TAble */}
      <Table Content={academicSemesterContent}>
        {getAcademicSemesterData?.data?.map((semester) => (
          <tr
            key={semester?._id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td className="px-6 py-4 font-bold text-lg">{semester?.name}</td>
            <td className="px-6 py-4 font-bold text-lg">{semester?.code}</td>
            <td className="px-6 py-4 font-bold text-lg">{semester?.year}</td>
            <td className="px-6 py-4 font-bold text-lg">
              {semester?.startMonth}
            </td>
            <td className="px-6 py-4 font-bold text-lg">
              {semester?.endMonth}
            </td>
            <td className="px-6 py-4">
              <button onClick={openModalForUpdate} className={`btn-primary`}>
                Update
              </button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default AcademicSemester;
