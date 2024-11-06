import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Card = ({ gadget }) => {
    // const navigate = useNavigate()
    
    const { product_id, product_title, product_image, category, rating, price } = gadget || {}
    return (
        <div>
            <div className='flex flex-col items-center rounded-md gap-3 bg-white px-4 py-3 shadow-md'>
                <img src={product_image} className='w-72 h-56 rounded-md p-2' />
                <h1 className='font-bold text-xl'>{product_title}</h1>
                <h1 className='my-2'>Price: ${price}</h1>
                <NavLink
                    to={`/details/${product_id}`}
                    className='btn w-1/2 text-blue-600 border-blue-500 border-2 px-6 rounded-2xl font-bold' >
                    View Details
                </NavLink>
                
            </div>
        </div>
    );
};

export default Card; 