import React, { useState } from 'react';
import AgreementCard from './AgreementCard';
import Pagination from '../../Pagination/Pagination';
import useAgreement from '../../../hooks/useAgreement';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Agreement = () => {
    const [agree, refetch] = useAgreement();
    const axiosSecure = useAxiosSecure();
    const [currentPage, setCurrentPage] = useState(1);
    const apartmentsPerPage = 6;

    const indexOfLastApartment = currentPage * apartmentsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
    const currentApartments = agree.slice(indexOfFirstApartment, indexOfLastApartment);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    

    const handleMakeMember = (userId) => {
        const updatedAgreement = {
            role: 'member',
            user: userId,
        };
    
        axiosSecure.patch(`/agree/${userId}`, updatedAgreement)
            .then((res) => {
                console.log(res.data);
                if (res.data.message === 'Agreement updated successfully, and user role updated.') {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${userId} is a Member Now!`,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    // Use .then to ensure refetch is called after the patch operation is complete
                    refetch().then(() => {
                        // Additional logic after refetch is complete, if needed
                    });
                }
            })
            .catch((error) => {
                console.error("Error making user a member:", error);
                // Handle error as needed
            });
    };
    

    const handleDeleteUser = (userId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/agree/${userId}`)
                    .then((res) => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `User deleted successfully!`,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                        }
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                        // Handle error as needed
                    });
            }
        });
    };
    
    
   


    return (
        <div>
            <div className='max-w-[1300px] mx-auto'>
                {currentApartments.length > 0 ? (
                    <div className="flex justify-around py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {currentApartments.map((agree) => (
                                <AgreementCard
                                key={agree._id}
                                agree={agree}
                                handleMakeMember={() => handleMakeMember(agree._id)}
                                handleDeleteUser={() => handleDeleteUser(agree._id)}
                            />
                            
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            </div>
            <Pagination
                totalApartments={agree.length}
                apartmentsPerPage={apartmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Agreement;