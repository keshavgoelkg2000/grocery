import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdKeyboardArrowDown } from 'react-icons/md';
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className='navbar-container'>

            <div className='navbar-sub-container'>

                <div className='burger-menu'>
                    <GiHamburgerMenu className='burger-menu-icon' />
                    <p>Sort by Department</p>
                </div>

                <div className='navbar'>
                    <ul className='anim-nav'>
                        <li><a href="#!">Home</a></li>
                        <li><a href="#!" > <span className='flex items-center'>Shop <MdKeyboardArrowDown className='text-[25px]' /></span> </a></li>
                        <li><a href="#!">Blog</a></li>
                        <li><a href="#!">Contact</a></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;