
import { useGetUserIsStudentQuery } from '../Redux/features/student/student.api'
import useAuth from './useAuth'

const useStudent = () => {
  const { user, loading } = useAuth()
  const { data: isStudent, isLoading: isStudentLoading } = useGetUserIsStudentQuery(
    user?.email,
    { skip: loading },
  )
console.log(isStudent)
  return [isStudent, isStudentLoading]
}
export default useStudent
