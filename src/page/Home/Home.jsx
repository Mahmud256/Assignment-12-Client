import React from 'react';
import BuildingDetails from '../BuildingDetails/BuildingDetails';
import CouponsSection from '../CouponsSection/CouponsSection';
import LocationSection from '../Map/LocationSection';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../components/Header/Banner/Banner';



const Home = () => {

    const allservice = useLoaderData();

    return (
        <div>           
            <Banner></Banner>
            <div className='Allserv'>
               <BuildingDetails allservice={allservice}></BuildingDetails>
            </div>
            <CouponsSection></CouponsSection>
            <LocationSection></LocationSection>
        </div>
    );
};

export default Home;