import { useGetUserIsFacultyQuery } from '../Redux/features/faculty/FacultyApi'
import useAuth from './useAuth'

const useFaculty = () => {
  const { user, loading } = useAuth()
  const { data: isFaculty, isLoading: isFacultyLoading } =
    useGetUserIsFacultyQuery(user?.email, { skip: loading })

  return [isFaculty, isFacultyLoading]
}
export default useFaculty
