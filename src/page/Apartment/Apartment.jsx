import React, { useState } from 'react';
import ApartmentCard from './ApartmentCard';
import useApartment from '../../hooks/useApartment';
import Pagination from '../Pagination/Pagination';

const Apartment = () => {
    const [apartment] = useApartment();
    const [currentPage, setCurrentPage] = useState(1);
    const apartmentsPerPage = 6;

    const indexOfLastApartment = currentPage * apartmentsPerPage;
    const indexOfFirstApartment = indexOfLastApartment - apartmentsPerPage;
    const currentApartments = apartment.slice(indexOfFirstApartment, indexOfLastApartment);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div>
            <h2 className='text-center text-3xl font-bold mb-8'>GULSHAN DREAM NEST ROOM</h2>
            <div className='grid md:grid-cols-2 gap-4 m-16'>
                {currentApartments.map(room => 
                    <ApartmentCard 
                        key={room._id} 
                        room={room} 
                    />
                )}
            </div>
            <Pagination
                totalApartments={apartment.length}
                apartmentsPerPage={apartmentsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Apartment;
