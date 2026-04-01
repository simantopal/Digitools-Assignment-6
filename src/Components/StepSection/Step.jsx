import React from 'react';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import rocketImg from '../../assets/rocket.png';

const Step = () => {
    return (
        <div className='py-30 bg-base-100 mx-auto text-center px-8 sm:px-15 md:px-25 lg:px-50'>
    
    <div className='space-y-4 mb-10'>
        <h1 className='font-extrabold text-5xl'>Get Started in 3 Steps</h1>
        <p>Start using premium digital tools in minutes, not hours.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        
        <div className="card bg-base-200 shadow-sm justify-center rounded-2xl">
            <div className="badge badge-primary rounded-full mt-2 ml-2 badge-lg">01</div>
            <figure className="pt-10 mt-10">
                <img src={userImg} alt="user" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Create Account</h2>
                <p className='mb-20'>Sign up for free in seconds.</p>
            </div>
        </div>

        <div className="card bg-base-200 shadow-sm justify-center rounded-2xl">
            <div className="badge badge-primary rounded-full mt-2 ml-2 badge-lg">02</div>
            <figure className="pt-10 mt-10">
                <img src={packageImg} alt="package" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Choose Products</h2>
                <p className='mb-20'>Browse and select tools.</p>
            </div>
        </div>

        <div className="card bg-base-200 shadow-sm justify-center rounded-2xl">
            <div className="badge badge-primary rounded-full mt-2 ml-2 badge-lg">03</div>
            <figure className="pt-10 mt-10">
                <img src={rocketImg} alt="rocket" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Start Creating</h2>
                <p className='mb-20'>Start using tools instantly.</p>
            </div>
        </div>

    </div>
</div>
    );
};

export default Step;