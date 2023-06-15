import React from 'react';
import Logo from "../../public/assets/logo.png";
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const menuItems = <React.Fragment>
        <li className='text-black'><Link href="/about" >Home</Link></li>
        <li className='text-black'><Link href="/appointment">Features</Link></li>
        <li className='text-black'><Link href="/">Package</Link></li>
        <li className='text-black'><Link href="/">Service</Link></li>
        <li className='text-black'><Link href="/">Blog</Link></li>
        <li className='text-black'><Link href="/">Support</Link></li>
        <li className='text-black'><Link href="/">More</Link></li>
    </React.Fragment>
    return (
        <div className=' bg-white'>
            <div className="navbar lg:w-[90%] mx-auto">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-red-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link href="/" className="text-xl w-24">
                        <Image src={Logo} alt="logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href="/postcss.config.js" className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;