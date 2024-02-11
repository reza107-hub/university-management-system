import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { useGetPresentUserWithAdditionalInfoQuery } from "../Redux/features/User/UserApi";
import Loader from "../Components/Loader/Loader";

const AdditionalInfoRequireRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const { data: userData, isLoading: isUserDetailsLoading } =
    useGetPresentUserWithAdditionalInfoQuery(user.email);

  const location = useLocation();
  if (loading || isUserDetailsLoading) {
    return <Loader />;
  }
  if (user && userData?.data?.userId?.hasAdditionalInfo === true) {
    return children;
  }
  return (
    <Navigate
      to="/dashboard/profile"
      state={{ from: location }}
      replace
    ></Navigate>
  );
};

export default AdditionalInfoRequireRoutes;
