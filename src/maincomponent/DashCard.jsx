import React, { useState } from 'react';
import { TbAdjustments } from "react-icons/tb";
const DashCard = ({ gadget }) => {
    const { product_id, description, product_title, product_image, price } = gadget || {}

    return (
        <div>
            <div className='max-w-5xl mx-auto px-16'>
             
                <div className='flex bg-white rounded-2xl justify-center items-center  gap-2  px-4 py-3 shadow-md'>
                    <div className=''>
                        <img src={product_image} className='w-72 h-44 rounded-md p-2' />
                    </div>
                    <div>
                        <h1 className='font-bold text-xl'>{product_title}</h1>
                        <h1 className='my-2'> ${price}</h1>
                        <h1> {description} </h1>
                        <button
                            className='btn w-1/2 my-2 text-blue-600 border-blue-500 border-2 px-6 rounded-2xl font-bold' >
                            Add to Card
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashCard;