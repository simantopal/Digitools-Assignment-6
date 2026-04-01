import React from 'react';
import banner from '../../assets/banner.png';

const Banner = () => {
    return (
        <div className='flex flex-col lg:flex-row items-center justify-between py-10 md:py-16 px-4 sm:px-8 md:px-10 lg:px-50 gap-10 mx-auto'>
    
    <div className='space-y-4 text-center lg:text-left'>
        <a className="badge badge-soft badge-primary rounded-2xl">
            New: AI-Powered Tools Available
        </a>

        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>
            Supercharge Your <br className='hidden md:block' /> Digital Workflow
        </h1>

        <p className='text-sm sm:text-base md:text-lg'>
            Access premium AI tools, design assets, templates, and productivity <br className='hidden md:block' />
            software—all in one place. Start creating faster today.
        </p>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start'>
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-3xl">
                Explore Products
            </button>

            <button className="btn btn-outline btn-primary rounded-3xl flex items-center gap-2">
                <img src="/src/assets/Play.png" alt="" className='w-4 h-4' />
                Watch Demo
            </button>
        </div>
    </div>
    <div className='w-full max-w-md lg:max-w-lg'>
        <img src={banner} alt="banner" className='w-full h-auto' />
    </div>
</div>
        
    );
};

export default Banner;