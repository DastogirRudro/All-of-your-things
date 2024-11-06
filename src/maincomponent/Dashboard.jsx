import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TbAdjustments } from "react-icons/tb";
import { getAllfavorites, getAlllove } from '../Localstorage/utilities';
import DashCard from './DashCard';
import Dashcardsecond from './Dashcardsecond';
import group from '../assets/Group.png'
const Dashboard = () => {
    const [gadget, setGadget] = useState([])
    const [love, setlove] = useState([])
    const [totalCost, setTotalCost] = useState(0);
    const [view, setView] = useState('gadget');
    useEffect(() => {
        const favorites = getAllfavorites()
        setGadget(favorites)
        const loves = getAlllove()
        setlove(loves)
        const total = favorites.reduce((sum, gadget) => sum + gadget.price, 0);
        setTotalCost(total);
    }, [])

    const handleSortByPrice = () => {
        const sortedGadgets = [...gadget].sort((a, b) => b.price - a.price);
        setGadget(sortedGadgets);
    };
    console.log(gadget)
    console.log(love)
    const { product_id, product_title, product_image, category, rating, price } = gadget || {}






    const path = useParams()
    console.log(path)
    return (
        <div className='mt-28'>
            <Helmet> <title>Dashboard | Gadget-Heaven</title> </Helmet>
            <div className='bg-fuchsia-600'>
                <div className='py-16 max-w-2xl mx-auto flex text-center flex-col gap-4 justify-center items-center'>
                    <h1 className='font-bold text-white text-4xl'>Dashboard</h1>
                    <p className='font-md text-gray-200'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories , we have it all !</p>
                    <div className='flex gap-5 items-center'>
                        <button onClick={() => setView('gadget')} className={`font-semibold text-white border-2 rounded-3xl px-8 p-2 ${view === 'gadget' ? 'bg-gray-300 text-black' : ''}`}>Cart</button>
                        <button onClick={() => setView('love')} className={`font-semibold text-white border-2 rounded-3xl px-8 p-2 ${view === 'love' ? 'bg-gray-300 text-black' : ''}`}>Wishlist</button>
                    </div>
                </div>
            </div>
            <div className='flex max-w-5xl mx-auto my-6 justify-between items-center'>
                <div>
                    <h1 className='font-bold text-xl'>Cart/Wishlist</h1>
                </div>
                <div className='flex gap-4 justify-between items-center'>
                    <h1 className='font-bold text-xl'>Totall cost: {totalCost}</h1>
                    <button onClick={handleSortByPrice} className='p-3 px-4 flex rounded-xl border-2 font-semibold border-xl gap-2 items-center border-violet-600'>Sort by Price Cart<TbAdjustments className='text-lg' /></button>
                    {/* <button className='px-6 p-4 rounded-xl bg-fuchsia-600 text-white font-semibold'>Purchase</button> */}
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                   
                    <button className="btn px-6 p-4 rounded-xl bg-fuchsia-600 text-white font-semibold" onClick={() => document.getElementById('my_modal_5').showModal()}>Purchase</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box flex space-y-2 flex-col items-center justify-center">
                            <img className='flex items-center justify-center' src={group} alt="" />
                            <p className='font-bold text-2xl border-b-2 border-gray-500 pb-6'>Payment Successfully</p>
                            <p className="py-1 font-semibold">Thanks for purchasing.</p>
                            <p className='text-md pb-3'>Total: {totalCost}</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                   <NavLink to="/"> <button className="btn">Close</button></NavLink>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            {/* <div className='flex flex-col gap-5 mt-8'>
                {
                    gadget.map(gadget => <DashCard gadget={gadget} key={gadget.product_id}></DashCard>)
                    
                }
            </div>
            <div className='flex flex-col gap-5 mt-4'>
                {
                    love.map(love => <Dashcardsecond love={love} key={love.product_id}></Dashcardsecond>)
                    
                }
            </div> */}
            <div className='flex flex-col gap-5 mt-8'>
                {view === 'gadget' && (
                    gadget.map(gadget => <DashCard gadget={gadget} key={gadget.product_id} />)
                )}
                {view === 'love' && (
                    love.map(love => <Dashcardsecond love={love} key={love.product_id} />)
                )}
            </div>

        </div>
    );
};

export default Dashboard;