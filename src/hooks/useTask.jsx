import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/tasks/${user?.email}`)
            return res.data;
        }
    })
    return [tasks, refetch];
};

export default useTask;