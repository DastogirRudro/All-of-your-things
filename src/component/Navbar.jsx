import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { GiSelfLove } from "react-icons/gi";

const Navbar = () => {
    

    const [favorites, setFavorites] = useState([]);
    const[loves,setloves] = useState([])

    useEffect(() => {
        // Get data from local storage
        const storedFavorites = localStorage.getItem('favorites');
        
        // Parse and set to state if data exists
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []); 
    useEffect(() => {
        // Get data from local storage
        const storedLove = localStorage.getItem('loves');
        
        // Parse and set to state if data exists
        if (storedLove) {
            setloves(JSON.parse(storedLove));
        }
    }, []); 
    console.log(favorites)
    console.log(loves)
    
    return (
        <div className='max-w-6xl shadow-sm top-0 left-0 right-0 backdrop-blur-sm mx-auto z-50 fixed border-b-1'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn  lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mx-4 m-4 rounded-box z-[1] mt-3 w-52 p-2 shadow">

                            <li className='text-[#0B0B0BB3]'><NavLink to="/" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Home</NavLink></li>

                            <li className='text-[#0B0B0BB3] mx-4'><NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Statistics</NavLink></li>

                            <li className='text-[#0B0B0BB3]'><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Dashboard</NavLink></li>

                            <li className='text-[#0B0B0BB3]'><NavLink to="/bestproduct" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Dashboard</NavLink></li>

                        </ul>
                    </div>
                    <a className="text-2xl font-bold">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex gap-4">
                    <ul className="menu-horizontal p-4 m-4">

                        <li className='text-[#0B0B0BB3]'><NavLink to="/" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Home</NavLink></li>

                        <li className='text-[#0B0B0BB3] mx-4'><NavLink to="/statistics" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Statistics</NavLink></li>

                        <li className='text-[#0B0B0BB3]'><NavLink to="/dashboard" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Dashboard</NavLink></li>

                        <li className='text-[#0B0B0BB3] mx-4'><NavLink to="/bestproduct" className={({ isActive }) => isActive ? 'text-gray-900 font-bold border-b-2' : 'text-[#0B0B0BB3]'}>Best Product</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <button className='p-2 flex text-xl border-2 bg-white rounded-full'>
                        <CiShoppingCart className='text-xl font-bold'/>
                        <p className='text-sm'>{favorites.length}</p>
                        </button>

                        <button className='p-2 flex text-xl border-2 bg-white rounded-full'>
                        <GiSelfLove className='text-xl font-bold'/>
                        <p className='text-sm'>{loves.length}</p>
                        </button>
                        
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;