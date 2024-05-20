import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import Loader from '../Components/Loader/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <Loader />
  }

  if (!user?.emailVerified) {
    return <Navigate to="/verify-email" ></Navigate>
  }
  if (user) {
    return children
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
