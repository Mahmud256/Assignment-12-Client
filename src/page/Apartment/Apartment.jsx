import React from 'react';
import ApartmentCard from './ApartmentCard';
import useApartment from '../../hooks/useApartment';

const Apartment = () => {
    const [apartment] = useApartment();

    return (
        <div>
            <h2 className='text-center text-3xl font-bold mb-8'>GULSHAN DREAM NEST ROOM</h2>
            <div className='grid md:grid-cols-2 gap-4 m-16'>
                {apartment.map(item => 
                    <ApartmentCard 
                        key={item._id} 
                        item={item} 
                    />
                )}
            </div>
        </div>
    );
};

export default Apartment;
