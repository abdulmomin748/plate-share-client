import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare } from 'react-icons/fa';

const Footer = () => {

    return (
        <div className='bg-[#EEEEEE] py-10' style={{ boxShadow: '0 -8px 10px -5px rgba(0, 0, 0, 0.4)' }}>
            <footer className="c-container gap-5 footer footer-horizontal footer-center  rounded p-10 text-[#11224E]" >
                <nav className="grid grid-flow-col text-[16px] sm:text-[18px]  gap-4 text-xl">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4 text-4xl">
                        <FaInstagramSquare className='text-[#11224E]' />
                        <FaFacebookSquare  className='text-[#11224E]'/>
                        <FaPinterestSquare  className='text-[#11224E]'/>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved.</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;