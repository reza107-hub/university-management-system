import { useState } from "react";
import ReUsable from "../../../../Components/Dialog/ReUsableModaal";

const AcademicSemester = () => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const academicSemesterContent = [
    {
      name: "Semester Name",
      type: "text",
      inputName: "name",
      id: "name",
    },
    {
      name: "Semester code",
      type: "text",
      inputName: "code",
      id: "code",
    },
    {
      name: "Semester Start Month",
      id: "startMonth",
      select: month,
    },
    {
      name: "Semester End Month",
      id: "endMonth",
      select: month,
    },
  ];

  let [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };
  return (
    <div>
      <ReUsable
        isOpen={isOpen}
        closeModal={closeModal}
        onSubmit={onSubmit}
        Content={academicSemesterContent}
      />
      <div>
        <button type="button" onClick={openModal} className="btn-primary">
          Add Department
        </button>
      </div>
    </div>
  );
};

export default AcademicSemester;
