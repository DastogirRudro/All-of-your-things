import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";
import { toast, ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet-async';
import 'react-toastify/dist/ReactToastify.css';
import { addFavorite, addlove, getAllfavorites, getAlllove } from '../Localstorage/utilities';

const Details = () => {
    const alldata = useLoaderData()
    console.log(alldata)
    const { id } = useParams()
    const [details, setdetails] = useState()
    const[isfavorite, setisfavorite]= useState(false)
    const[islove,setlove]= useState(false)

    useEffect(() => {
        const singledata = alldata.find(details => details.product_id == id)
        setdetails(singledata)
        const loves =getAlllove()
        const isExists = loves.find(item => item.product_id == singledata.product_id)
        if(isExists){
            setlove(true)
        }
        const favorites = getAllfavorites()
        const isExist = favorites.find(item => item.product_id == singledata.product_id)
        if(isExist) {
            setisfavorite(true)
        }
    }, [id, alldata])
    
    const { product_id, specification, product_title, description, product_image, category, rating, price } = details || {}
    //love section for it
    
    //local storage 
    const handleFavorite = (details) => {
          addFavorite(details)
          setisfavorite(true)
    }
    // local storage for love
    const handlelove = (details) => {
        addlove(details)
        setlove(true)
    }

    return (
        <div className='mt-28 mb-96 md:relative'>
            <Helmet><title>Details | Gadget-Heaven</title></Helmet>
            <div className='text-center z-10 items-center bg-fuchsia-700 pt-12 pb-64'>
                <div className='max-w-3xl mx-auto space-y-2'>
                    <h1 className='text-white font-bold text-5xl'>Product Details</h1>
                    <p className='text-gray-300 '>Explore the latest gadget that will take your experience to the next level.From smart devices to the coolest accessories, we have it all</p>
                </div>
            </div>
            <div className='right-36 md:absolute z-40 -bottom-64 max-w-4xl mx-auto px-16 bg-white border-1 rounded-2xl py-16'>
                <div className='flex gap-20'>
                    <div className='w-1/3'>
                        <img src={product_image} />
                    </div>
                    <div className='space-y-3'>
                        <h2>{product_title} </h2>
                        <p>Price: {price}</p>
                        <button className='border-green-500 border-2 px-2 text-sm rounded-xl'>In stock</button>
                        <p>{description}</p>
                        <h2>Specification: {specification && specification.map((descript, index) => (
                            <li className='mx-1 list-decimal' key={index}>{descript}</li>
                        ))}</h2>
                        <p>Rating</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                             />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  defaultChecked/>
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> {rating}

                        </div>
                        <div className='flex gap-4 items-center '>

                            <button className='btn px-5 text-bold text-gray-100 bg-fuchsia-700 rounded-3xl' disabled={isfavorite} onClick={()=>handleFavorite(details)} >Add To Cart <CiShoppingCart className='text-xl font-bol' />
                             </button>


                            <p onClick={()=>handlelove(details)} disabled={islove} className='bg-gray-200 p-3 text-lg rounded-full hover:cursor-pointer'><GiSelfLove /></p>

                        </div>
                    </div>
                    <ToastContainer position="bottom-center" autoClose={2000} hideProgressBar={false} closeOnClick />
                </div>
            </div>
        </div>
    );
};

export default Details;