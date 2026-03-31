import React from 'react';

const Stats = () => {
    return (
        <div className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 flex items-center justify-center'>
    
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center w-full items-center'>
                
                <div className='space-y-2'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>50K+</h1>
                    <p className='text-sm sm:text-base md:text-xl'>Active Users</p>
                </div>

                <div className='space-y-2 md:border-x md:border-white/30 md:px-6'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>200+</h1>
                    <p className='text-sm sm:text-base md:text-xl'>Premium Tools</p>
                </div>

                <div className='space-y-2'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>4.9</h1>
                    <p className='text-sm sm:text-base md:text-xl'>Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;