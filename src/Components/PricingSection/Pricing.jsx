import React from 'react';

const Pricing = () => {
    return (
        <div className='px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-20 space-y-10'>
    
    <div className='space-y-4 text-center'>
        <h1 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>
            Simple, Transparent Pricing
        </h1>
        <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        
        {/* Card 1 */}
        <div className="card w-full max-w-sm mx-auto bg-base-50 shadow-sm rounded-2xl p-4">
            <div className="card-body">
                <h2 className="text-3xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <span className="text-xl">$29/mo</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                <div className="mt-6">
                    <button className="btn btn-primary rounded-2xl btn-block">Get Started Free</button>
                </div>
            </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full max-w-sm mx-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm rounded-2xl p-4">
            <div className="card-body">
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">Pro</h2>
                    <span className="badge badge-sm badge-warning font-bold">Most Popular</span>
                </div>
                <p>Perfect for getting started</p>
                <span className="text-xl">$29/mo</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                <div className="mt-6">
                    <button className="btn rounded-2xl btn-block">Start Pro Trial</button>
                </div>
            </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full max-w-sm mx-auto bg-base-50 shadow-sm rounded-2xl p-4">
            <div className="card-body">
                <h2 className="text-3xl font-bold">Starter</h2>
                <p>Perfect for getting started</p>
                <span className="text-xl">$29/mo</span>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Access to 10 free tools</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Basic templates</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>Community support</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>1 project per month</span>
                            </li>
                        </ul>
                <div className="mt-6">
                    <button className="btn btn-primary rounded-2xl btn-block">Contact Sales</button>
                </div>
            </div>
        </div>

    </div>
</div>
    );
};

export default Pricing;