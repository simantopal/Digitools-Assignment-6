import React from 'react';

const Navbar = ({cart}) => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-50">
            <div className="flex-none">
                <a className="font-bold text-xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">DigiTools</a>
            </div>
                
            <div className='flex flex-1 font-semibold gap-8 justify-center'>
                <h2>Products</h2>
                <h2>Features</h2>
                <h2>Pricing</h2>
                <h2>Testimonials</h2>
                <h2>FAQ</h2>
            </div>
                
            <div className="flex items-center gap-4">
                <div className="">
                    <div role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                            <span className="badge badge-sm indicator-item">{cart}</span>
                        </div>
                    </div>
                </div>
                <p className='font-semibold'>Login</p>
                <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">Get Started</button>
            </div>
        </div>
        
    );
};

export default Navbar;