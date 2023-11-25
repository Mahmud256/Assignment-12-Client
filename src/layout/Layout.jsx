import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../page/Footer/Footer';
import Navbar from '../components/Header/Navbar/Navbar';

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