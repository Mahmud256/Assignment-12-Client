import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


export const useCoupon = () => {


    const axiosPublic = useAxiosPublic();
    const { data: coupon = [], isPending: loading, refetch } = useQuery({
        queryKey: ['coupon'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupon');
            return res.data;
        }
    })


    return [coupon, loading, refetch]
}
export default useCoupon;