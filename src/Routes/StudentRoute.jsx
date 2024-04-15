import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import Loader from '../Components/Loader/Loader'
import useStudent from '../Hooks/useStudent'

const StudentRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const [isStudent, isStudentLoading] = useStudent()
  const location = useLocation()

  if (loading || isStudentLoading) {
    return <Loader />
  }

  if (user && isStudent?.data === true) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default StudentRoute
