import { Navigate, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import Loader from '../Components/Loader/Loader'

const PrivateRoute = ({ children }) => {
  const { user, loading, verifyEmail } = useAuth()
  const location = useLocation()

  if (loading) {
    return <Loader />
  }

  if (!user?.emailVerified){
    verifyEmail()
    return (
      <p className="text-red-600 text-bold text-2xl flex justify-center items-center">
        Check your Email, an email sent to your email and verify it
      </p>
    )
  }
    if (user) {
      return children
    }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
}

export default PrivateRoute
