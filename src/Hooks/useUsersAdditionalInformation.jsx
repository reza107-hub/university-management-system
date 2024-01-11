
import { useQuery } from "@tanstack/react-query";

const useUsersAdditionalInformation = () => {
  const { data: userInfoData = [], refetch } = useQuery({
    queryKey: ["userInfoData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/userAdditionalInfo");
      const data = await res.json();
      return data?.data;
    },
  });
  return [userInfoData, refetch];
};

export default useUsersAdditionalInformation;
