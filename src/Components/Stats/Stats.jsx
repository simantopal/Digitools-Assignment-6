import React from 'react';

const Stats = () => {
    return (
        <div className='w-100% h-62 bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-50 py-15 flex items-center justify-center'>
            <div className='flex justify-around text-center w-full relative items-center'>
                <div className='space-y-3'>
                    <h1 className='font-bold text-6xl'>50K+</h1>
                    <p className='text-2xl'>Active Users</p>
                </div>

                <div className="divider divider-horizontal"></div>

                <div className='space-y-3'>
                    <h1 className='font-bold text-6xl'>200+</h1>
                    <p className='text-2xl'>Premium Tools</p>
                </div>

                <div className="divider divider-horizontal"></div>

                <div className='space-y-3'>
                    <h1 className='font-bold text-6xl'>4.9</h1>
                    <p className='text-2xl'>Rating</p>
                </div>
            </div>
        </div>
    );
};

export default Stats;