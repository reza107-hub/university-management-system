import axios from "axios";

const axiosCreate = axios.create({
  baseURL: "http://localhost:5000/api",
});

const useAxios = () => {
  return [axiosCreate];
};

export default useAxios;
