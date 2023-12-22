import axios from 'axios';

const axiosPublic = axios.create({
    baseURL: 'https://scic-am8-server.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;