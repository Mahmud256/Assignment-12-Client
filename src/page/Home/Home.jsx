import React from 'react';
import Banner from '../Banner/Banner';
import BuildingDetails from '../BuildingDetails/BuildingDetails';
import CouponsSection from '../CouponsSection/CouponsSection';



const Home = () => {

    return (
        <div>           
            <Banner></Banner>
            <BuildingDetails></BuildingDetails>
            <CouponsSection></CouponsSection>
        </div>
    );
};

export default Home;