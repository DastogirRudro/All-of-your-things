import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="footer mt-16 bg-white text-base-content border-base-300 px-10 py-4">
                <div className='text-center container mx-auto flex flex-col items-center justify-center pt-16 pb-12 border-b-2'>
                    <h1 className='text-[#09080F] font-bold text-3xl'>Gadget Heaven</h1>
                    <p className='text-[#09080F99] text-lg'>Leading the way in cutting-edge technology and innovation.</p>
                </div>
            </footer>

            <footer className="footer flex flex-col gap-2 md:flex-row justify-around px-28 items-center bg-white text-base-content p-10">
                <nav className='text-center flex flex-col justify-center items-center'>
                    <h6 className="text-xl mb-4 text-[#09080F] font-bold">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className='text-center flex flex-col justify-center items-center'>
                    <h6 className="text-xl mb-4 text-[#09080F] font-bold">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className='text-center flex flex-col justify-center items-center'>
                    <h6 className="text-xl mb-4 text-[#09080F] font-bold">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </footer>

        </>
    );
};

export default Footer;