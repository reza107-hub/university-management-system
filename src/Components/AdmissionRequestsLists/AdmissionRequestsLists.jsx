import { useQuery } from "@tanstack/react-query";

const AdmissionRequestsLists = () => {
  const { data: lists = [], refetch } = useQuery({
    queryKey: ["lists"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/api/admission-request");
      return res.json();
    },
  });
  return [lists, refetch];
};

export default AdmissionRequestsLists;
