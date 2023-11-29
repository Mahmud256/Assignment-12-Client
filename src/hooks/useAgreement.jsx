import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

export const useAgreement = () => {


    const axiosPublic = useAxiosPublic();
    const { data: agreement = [],  refetch } = useQuery({
        queryKey: ['agree'],
        queryFn: async () => {
            const res = await axiosPublic.get('/agree');
            return res.data;
        }
    })


    return [agreement, refetch]
}
export default useAgreement;
