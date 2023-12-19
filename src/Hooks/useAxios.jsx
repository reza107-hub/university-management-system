import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  return [axiosCreate];
};

export default useAxios;
