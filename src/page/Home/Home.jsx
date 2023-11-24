import React from 'react';
import Banner from '../Banner/Banner';
import BuildingDetails from '../BuildingDetails/BuildingDetails';
import CouponsSection from '../CouponsSection/CouponsSection';
import LocationSection from '../Map/LocationSection';



const Home = () => {

    return (
        <div>           
            <Banner></Banner>
            <BuildingDetails></BuildingDetails>
            <CouponsSection></CouponsSection>
            <LocationSection></LocationSection>
        </div>
    );
};

export default Home;