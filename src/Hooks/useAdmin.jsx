import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  // use axios secure with react query
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        ` https://summer-camp-school-server-roan.vercel.app/users/admin/${user?.email}`
      );
      return res.json();
    },
  });
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
