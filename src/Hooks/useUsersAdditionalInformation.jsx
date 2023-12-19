import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useUsersAdditionalInformation = () => {
  const [userInfoData, setUserInfoData] = useState();
  const [axiosCreate] = useAxios();
  useEffect(() => {
    axiosCreate.get("/users-additional-information").then((res) => {
      setUserInfoData(res.data);
    });
  }, [axiosCreate]);
  return [userInfoData];
};

export default useUsersAdditionalInformation;
