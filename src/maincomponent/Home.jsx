import React from 'react';
import banner from '../assets/banner.jpg'
import Heading from './Heading';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Home = () => {
    const categories = useLoaderData()

    return (
        <div className=''>
            <Helmet><title>Gadget Heaven</title></Helmet>
            <div className='border-1 p-1 rounded-2xl mb-72'>
                <div className='rounded-2xl relative w-full bg-fuchsia-700 py-16 mx-auto flex flex-col justify-center items-center'>
                    <div className='max-w-3xl text-center py-32 mx-auto flex flex-col justify-center items-center gap-7'>
                        <div>
                            <h1 className='text-white font-extrabold text-4xl'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        </div>
                        <div>
                            <p className='text-[#FFFFFF] max-w-lg font-light'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        </div>
                        <div>
                           <NavLink to='/dashboard'> <button className='p-2 font-semibold border-2 rounded-3xl px-6 bg-white text-[#9538E2]'>Shop Now</button></NavLink>
                        </div>
                    </div>
                </div>
                <div className='absolute -bottom-80 left-1/2 transform -translate-x-1/2 p-2 rounded-xl bg-gray-100 shadow-lg z-10 max-w-xl'>
                    <img src={banner} className='rounded-xl border-2' />
                </div>
            </div>
            <div className='text-center mb-14'>
                <h1 className='text-3xl font-bold'>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className='flex gap-2'>
                <div className='w-1/5'>
                    <Heading categories={categories}></Heading>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Home;