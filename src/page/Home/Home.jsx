import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import BuildingDetails from '../BuildingDetails/BuildingDetails';



const Home = () => {

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Banner></Banner>
            <BuildingDetails></BuildingDetails>
        </div>
    );
};

export default Home;