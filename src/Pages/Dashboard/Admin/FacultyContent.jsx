import { useGetDepartmentQuery } from '../../../Redux/features/Department/department.api'

const FacultyContent = () => {
  const { data } = useGetDepartmentQuery()
  const department = data?.data.reduce((acc, item) => {
    if (item) {
      acc.push({
        _id: item._id,
        value: item.shortForm,
      })
    }
    return acc
  }, [])
  const facultyContent = [
    {
      name: 'Department',
      id: 'departmentId',
      select: department,
    },
    {
      name: 'Designation',
      id: 'designation',
      inputName: 'designation',
      type: 'text',
    },
  ]
  return [facultyContent]
}

export default FacultyContent
