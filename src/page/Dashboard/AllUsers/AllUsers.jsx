import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

 
        const handleMakeAdmin = user => {
            if (user.role !== 'admin') {
                // Display an error message or handle it as needed
                Swal.fire({
                    icon: 'error',
                    title: 'Access Denied',
                    text: 'You do not have permission to perform this action.',
                });
                console.error('User does not have admin role');
                return;
            }
            console.log(user);
            axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${user.name} is an Admin Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
        }
    




    const handleMakeMember = (user) => {
        console.log(user);
        axiosSecure.patch(`/users/member/${user._id}`)
            .then((res) => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${user.name} is a Member Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => {
                console.error("Error making user a member:", error);
                // Handle error as needed
            });
    }

    const handleDeleteUser = (user) => {
        const isMember = user.role === 'member';
    
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: isMember ? 'Yes, USER it!' : 'Yes, delete it!',
        }).then((result) => {
            console.log(result);
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                refetch().then(() => {
                        // if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: isMember ? `${user.name} is a USER Now!` : 'Deleted!',
                                text: isMember
                                    ? 'Your file has been create Normal user.'
                                    : 'Your file has been deleted.',
                                icon: 'success',
                            });
                        // }
                    });
            }
        });
    };
    



    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                {users.map((user, index) => (
                    <tr key={user._id}>
                        <th>{index + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            {user.role === 'admin' ? 'Admin' : user.role === 'member' ? 'Member' : (
                                <>
                                    <button
                                        onClick={() => handleMakeAdmin(user)}
                                        className="btn btn-lg bg-orange-500"
                                    >
                                        <FaUsers className="text-white text-2xl" />
                                    </button>
                                    <button
                                        onClick={() => handleMakeMember(user)}
                                        className="btn btn-lg bg-blue-500"
                                    >
                                        Make Member
                                    </button>
                                </>
                            )}
                        </td>
                        <td>
                            <button
                                onClick={() => handleDeleteUser(user)}
                                className="btn btn-ghost btn-lg">
                                <FaTrashAlt className="text-red-600"></FaTrashAlt>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;