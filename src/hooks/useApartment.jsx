import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

export const useApartment = () => {


    const axiosPublic = useAxiosPublic();
    const { data: apartment = [], isPending: loading, refetch } = useQuery({
        queryKey: ['apartment'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartment');
            return res.data;
        }
    })


    return [apartment, loading, refetch]
}
export default useApartment;