import React from 'react';

const Transform = () => {
    return (
        <div className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-30 flex items-center justify-center'>
    
            <div className='gap-8 text-center w-full items-center'>
                
                <div className='space-y-4'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl'>Ready to Transform Your Workflow?</h1>
                    <p className='text-sm sm:text-base md:text-xl'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>

                <div className='space-y-2 md:px-6 mt-10'>
                    <div className='space-x-4'>
                        <button className="btn btn-active rounded-full">Explore Products</button>
                        <button className="btn btn-outline rounded-full">View Pricing</button>
                    </div>
                    <p className='text-sm sm:text-base md:text-xl'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>

            </div>
        </div>
    );
};

export default Transform;