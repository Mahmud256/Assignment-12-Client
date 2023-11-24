import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';
import Footer from '../page/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;