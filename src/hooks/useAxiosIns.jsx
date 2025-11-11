import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:3000/',
})
const useAxiosIns = () => {
    return instance;
};

export default useAxiosIns;