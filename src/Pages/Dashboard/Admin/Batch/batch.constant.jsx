import { useGetDepartmentQuery } from "../../../../Redux/features/Department/department.api";

const BatchConstant = () => {
  const { data } = useGetDepartmentQuery();
  const department = data?.data.reduce((acc, item) => {
    if (item) {
      acc.push({
        _id: item._id,
        value: item.shortForm,
      });
    }
    return acc;
  }, []);
  const batchContent = [
    {
      name: "Batch No.",
      type: "number",
      inputName: "batchNumber",
      id: "batchNumber",
    },
    {
      name: "Department",
      id: "deptId",
      select: department,
    },
  ];
  return [batchContent];
};

export default BatchConstant;
