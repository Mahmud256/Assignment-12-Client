import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMember = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isMember, isPending: isMemberLoading } = useQuery({
        queryKey: [user?.email, 'isMember'],
        enabled: !loading,
        queryFn: async () => {
            console.log('asking or checking is member', user)
            const res = await axiosSecure.get(`/users/member/${user.email}`);
            // console.log(res.data);
            return res.data?.member;
        }
    })
    return [isMember, isMemberLoading]
};

export default useMember;