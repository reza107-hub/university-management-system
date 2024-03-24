import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import Loader from '../Components/Loader/Loader'
import useFaculty from '../Hooks/useFaculty'

const FacultyRoutes = ({ children }) => {
  const { user, loading } = useAuth()
  const [isFaculty, isFacultyLoading] = useFaculty()
  const location = useLocation()

  if (loading || isFacultyLoading) {
    return <Loader />
  }

  if (user && isFaculty?.data === true) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default FacultyRoutes
