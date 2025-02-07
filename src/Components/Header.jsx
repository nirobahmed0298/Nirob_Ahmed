import React, { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import { AuthContext } from './AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {
    let { user, LogOutUser } = useContext(AuthContext);
    let navigate = useNavigate()
    let handleLogOut = () => {
        LogOutUser()
            .then(() => {
                Swal.fire({
                    title: "WelCome!",
                    text: "You succesFully LogOut.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })

    }
    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><Link to="skill" spy={true} smooth={true} offset={50} duration={1000}>Skills</Link></li>
        <li><Link to="about" spy={true} smooth={true} offset={50} duration={1000}>About Me</Link></li>
        <li><Link to="projects" spy={true} smooth={true} offset={50} duration={1000}>My Projects</Link></li>
        {
            user?.email === 'nirobahmed0296@gmail.com' ? <li><NavLink to="/dashboard">Dashboard</NavLink></li> : ''
        }
    </>

    return (
        <div className='fixed z-10 bg-[#E1EBED] bg-opacity-30 top-0  w-full'>
            <div className="navbar px-0 w-10/12 mx-auto text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu text-black menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to={'/'} data-aos="fade-right" data-aos-duration="2000">
                        N<span className='text-[#12F7FF]'>i</span>R<span className='text-[#12F7FF]'>o</span>B <span className='text-[#12F7FF]'>.</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul data-aos="zoom-in" data-aos-duration="2000" className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end" data-aos="fade-left" data-aos-duration="2000">
                    {
                        user ? <button onClick={handleLogOut} className="btn bg-[#12F7FF] border-none text-black px-7  font-semibold rounded-none flex items-center gap-1"><FiLogOut></FiLogOut>LogOut</button>
                            : <NavLink to='/login' className="btn bg-[#12F7FF] border-none text-black px-7 font-semibold rounded-none flex items-center gap-1"><FiLogIn></FiLogIn>Login</NavLink>

                    }
                </div>
            </div>
        </div>

    );
};

export default Header;