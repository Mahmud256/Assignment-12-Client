import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

export const useAnnouncement = () => {


    const axiosPublic = useAxiosPublic();
    const { data: announcement = [], isPending: loading, refetch } = useQuery({
        queryKey: ['announcement'],
        queryFn: async () => {
            const res = await axiosPublic.get('/announcement');
            return res.data;
        }
    })


    return [announcement, loading, refetch]
}
export default useAnnouncement;