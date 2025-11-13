import axios from "axios";
const instance = axios.create({
  baseURL: "https://plate-share-server-psi.vercel.app",
});
const useAxiosIns = () => {
  return instance;
};

export default useAxiosIns;
