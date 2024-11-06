import React from 'react';
import Navbar from './component/Navbar';
import Footer from './component/Footer';

import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

const Root = () => {
    return (
        
        <div className='bg-gray-100'>
            <HelmetProvider>

            <div className=''>
            <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>

            </HelmetProvider>
        </div>
    );
};

export default Root;