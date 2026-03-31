import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className="bg-base-200 text-base-content px-6 sm:px-10 lg:px-50 py-10">

            <div className="footer sm:footer-horizontal flex flex-col sm:flex-row sm:flex-wrap justify-between gap-10 mb-20 mt-20">

                <div className="flex-1 min-w-96">
                    <h1 className='font-bold text-4xl mb-3 text-center sm:text-left'>Digitools</h1>
                    <p className="text-sm sm:text-base">
                        Premium digital tools for creators, professionals, and businesses.
                        Work smarter with our suite of powerful tools.
                    </p>
                </div>

                <div className="flex-1 min-w-30">
                    <h6 className="footer-title mb-2">Product</h6>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Pricing</a>
                    <a className="link link-hover">Templates</a>
                    <a className="link link-hover">Integrations</a>
                </div>

                <div className="flex-1 min-w-40">
                    <h6 className="footer-title mb-2">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Blog</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Press</a>
                </div>

                <div className="flex-1 min-w-44">
                    <h6 className="footer-title mb-2">Resources</h6>
                    <a className="link link-hover">Documentation</a>
                    <a className="link link-hover">Help Center</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">Contact</a>
                </div>

                <div className="flex-1 min-w-52">
                    <h6 className="footer-title mb-2">Social</h6>
                    <div className='flex gap-3 text-2xl'>
                        <RiInstagramFill />
                        <FaFacebookSquare />
                        <FaXTwitter />
                    </div>
                </div>
            </div>

            <div className="border-t border-base-500 my-6"></div>

            <div className='flex flex-col sm:flex-row justify-between items-center gap-3 text-sm sm:text-base'>
                <p>© 2026 Digitools. All rights reserved.</p>
                
                <div className='flex flex-wrap gap-4 sm:gap-6'>
                    <p className="link link-hover">Privacy Policy</p>
                    <p className="link link-hover">Terms of Service</p>
                    <p className="link link-hover">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;