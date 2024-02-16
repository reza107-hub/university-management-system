import { useGetAcademicSemesterQuery } from "../../../../Redux/features/AcademicSemester/AcademicSemester.api";

const SemesterRegistrationContent = () => {
  const { data } = useGetAcademicSemesterQuery(undefined);
  const academicSemester = data?.data.reduce((acc, item) => {
    if (item) {
      acc.push({
        _id: item._id,
        value: item.name,
      });
    }
    return acc;
  }, []);
  const semesterRegistrationContent = [
    {
      name: "Academic Semester",
      id: "academicSemester",
      select: academicSemester,
    },
    {
      name: "Min Credit",
      id: "minCredit",
      inputName: "minCredit",
      type: "number",
      step: ".01",
    },
    {
      name: "Max Credit",
      id: "maxCredit",
      inputName: "maxCredit",
      type: "number",
      step: ".01",
    },
  ];
  return [semesterRegistrationContent];
};

export default SemesterRegistrationContent;
