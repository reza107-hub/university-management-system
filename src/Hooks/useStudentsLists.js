import { useQuery } from "@tanstack/react-query";
import { fetchUrl } from "../Components/BaseUrl/fetchUrl";

const useStudentsLists = () => {
    const { data: students = [], refetch } = useQuery({
        queryKey: ["students"],
        queryFn: async () => {
            const res = await fetch(fetchUrl+'/students');
            return res.json();
        },
    });
    return [students, refetch];
};

export default useStudentsLists;
