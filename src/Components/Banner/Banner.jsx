import React from 'react';

const Banner = () => {
    return (
        <div className='flex items-center justify-between px-50 py-15 gap-15'>            
            <div className='space-y-4'>
                <a className="badge badge-soft badge-primary rounded-2xl">New: AI-Powered Tools Available</a>
                <h1 className='font-extrabold text-6xl'>Supercharge Your <br /> Digital Workflow</h1>
                <p className='text-lg'>Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
                </p>
                <div className='space-x-4'>
                    <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">Explore Products</button>
                    <button className="btn btn-outline btn-primary rounded-3xl"><img src="/src/assets/Play.png" alt="" />Watch Demo</button>
            </div>
            </div>
            <div>
                <img src="/src/assets/banner.png" alt="" />
            </div>
            
        </div>
        
    );
};

export default Banner;