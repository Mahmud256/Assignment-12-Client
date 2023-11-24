import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Header/Navbar';

const Layout = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Navbar></Navbar>
        </div>
    );
};

export default Layout;