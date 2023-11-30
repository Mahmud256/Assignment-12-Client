import React, { useState } from 'react';

import CouponCard from './CouponCard';
import { useLoaderData } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';

const Coupon = () => {
    const loadedCoupons = useLoaderData();
    const [coupons, setCoupons] = useState(loadedCoupons);
    console.log("cr:",coupons);
    const [currentPage, setCurrentPage] = useState(1);
    const apartmentsPerPage = 6;

    const indexOfLastApartment = currentPage * apartmentsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
    const currentApartments = coupons.slice(indexOfFirstApartment, indexOfLastApartment);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };
    return (
        <div>
            <div className='max-w-[1300px] mx-auto'>

                {/* Input field for selecting difficulty level */}
                

                {currentApartments.length > 0 ? (
                    <div className="flex justify-around py-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                            {currentApartments.map((coupon) => (
                                <CouponCard
                                key={coupon._id} 
                                coupon={coupon} 
                                setCoupons={setCoupons}
                            />
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="text-center h-screen flex flex-col justify-center items-center">No Data found</p>
                )}
            </div>
            <Pagination
                totalApartments={coupons.length}
                apartmentsPerPage={apartmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Coupon;