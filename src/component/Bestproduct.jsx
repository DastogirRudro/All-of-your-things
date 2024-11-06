import React from 'react';
import { Helmet } from 'react-helmet-async';
import { NavLink, useLoaderData } from 'react-router-dom';

const Bestproduct = () => {
    const best = useLoaderData()
    console.log(best)
    const laptopXSeries = best.filter(product => product.product_id === 8);
    
    
    const [{ product_id, specification, product_title, description, product_image, category, rating, price} ] = laptopXSeries || {}
    console.log(product_id)

    return (
        <div className='mt-28'>
            <Helmet><title>bestproduct | Gadget Heaven</title></Helmet>
            <div className='bg-fuchsia-600 py-24 text-center'>
                <div className='max-w-3xl mx-auto space-y-8'>
                    <h1 className='text-white font-bold text-5xl'>Hey, Welcome you are in Our best product</h1>
                    <p className='text-gray-200 text-md'>This is our accessories product all you need you can find here, All of our goods calim to a best product but here you just see our best product. you can buy it with a lower price</p>
                </div>
            </div>
            <div className='flex  text-center flex-col space-y-8 items-center justify-center max-w-3xl mt-12  mx-auto'>
                <div >
                    <img src={product_image} className='rounded-lg shadow-md' alt="" />
                </div>
                <div className='space-y-4'>
                    <p className='font-bold text-2xl'>{category}</p>
                    <p className='text-xl font-bold '>{product_title}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold text-xl'>{description}</p>
                    <p className='font-bold'>Rating: {rating}</p>
                    <NavLink to='/'> <button className='px-4 p-1 bg-green-100 rounded-2xl border-2 border-gray-500 font-semibold mt-4 hover:bg-green-500'>Choose it</button></NavLink>
                </div>
            </div>
        </div>

    );
};

export default Bestproduct;