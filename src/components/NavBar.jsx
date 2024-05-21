import React from 'react'
import logo from "../assests/logo.png"
import navTicket from "../assests/navTicket.png";
import redDot from "../assests/redDot.svg"
import { Link, useLocation } from 'react-router-dom';


const NavBar = () => {
    const { pathname } = useLocation()

    return (
        <nav className='w-full flex flex-row justify-between items-center px-32'>
            <img src={logo} className=' w-28 h-24 object-contain' alt="logo" />


            <div className='flex-row  flex gap-x-4 font-montserrat font-normal text-xl justify-center '>
                <Link to='/'
                    className={`items-center flex flex-col
                     ${pathname === "/" ? "text-[#EE0003] font-semibold" : ""}`}>
                    Home {"\n"}
                    <img src={redDot} alt="dot" className={`${pathname === "/" ? "block" : "hidden"}`} />
                </Link>

                <Link to='/about'
                    className={`items-center flex flex-col
                     ${pathname === "/about" ? "text-[#EE0003] font-semibold" : ""}`}>
                    About {"\n"}
                    <img src={redDot} alt="dot" className={`${pathname === "/about" ? "block" : "hidden"}`} />
                </Link>

                <Link
                    to='/results'
                    className={`items-center flex flex-col
                     ${pathname === "/results" ? "text-[#EE0003] font-semibold" : ""}`}>
                    Results {"\n"}

                    <img src={redDot} alt="dot" className={`${pathname === "/results" ? "block" : "hidden"}`} />
                </Link>

                <Link
                    to='/partners'
                    className={`items-center flex flex-col
                     ${pathname === "/partners" ? "text-[#EE0003] font-semibold" : ""}`}>
                    Partners {"\n"}
                    <img src={redDot} className={`${pathname === "/partners" ? "block" : "hidden"}`} alt="dot" />
                </Link>

                <Link
                    to='/careers'
                    className={`items-center flex flex-col
                     ${pathname === "/careers" ? "text-[#EE0003] font-semibold" : ""}`}>
                    Careers {"\n"}

                    <img src={redDot} className={`${pathname === "/careers" ? "block" : "hidden"}`} alt="dot" />
                </Link>

            </div>



            <div className='flex-row flex gap-x-4 items-center'>
                <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7259 18.298L13.1468 14.784L13.1891 14.742C15.5763 12.1059 17.3599 8.98696 18.4168 5.6H22.5455V2.8H12.6818V0H9.86364V2.8H0V5.6H15.7395C14.7955 8.288 13.3018 10.85 11.2727 13.09C9.96227 11.648 8.87727 10.066 8.01773 8.4H5.19955C6.22818 10.682 7.63727 12.838 9.39864 14.784L2.22636 21.812L4.22727 23.8L11.2727 16.8L15.655 21.154L16.7259 18.298ZM24.6591 11.2H21.8409L15.5 28H18.3182L19.8964 23.8H26.5895L28.1818 28H31L24.6591 11.2ZM20.9673 21L23.25 14.938L25.5327 21H20.9673Z" fill="#99917D" />
                </svg>

                <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75 9.33334H12.9167" stroke="#99917D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M26.9093 10.5H23.5484C21.2428 10.5 19.375 12.0668 19.375 14C19.375 15.9332 21.244 17.5 23.5471 17.5H26.9093C27.0178 17.5 27.0707 17.5 27.116 17.4977C27.8135 17.4592 28.3689 16.9937 28.4141 16.4092C28.4167 16.3718 28.4167 16.3263 28.4167 16.2365V11.7635C28.4167 11.6737 28.4167 11.6282 28.4141 11.5908C28.3676 11.0063 27.8135 10.5408 27.116 10.5023C27.072 10.5 27.0178 10.5 26.9093 10.5Z" stroke="#99917D" strokeWidth="1.5" />
                    <path d="M26.3561 10.3134C26.2553 8.12944 25.9324 6.7901 24.8874 5.84744C23.3749 4.4801 20.9388 4.4801 16.068 4.4801H12.193C7.32208 4.4801 4.88599 4.4801 3.37345 5.84744C1.85962 7.2136 1.85962 9.41394 1.85962 13.8134C1.85962 18.2129 1.85962 20.4133 3.37345 21.7794C4.88599 23.1468 7.32208 23.1468 12.193 23.1468H16.068C20.9388 23.1468 23.3749 23.1468 24.8874 21.7794C25.9324 20.8368 26.2566 19.4974 26.3561 17.3134" stroke="#99917D" strokeWidth="1.5" />
                    <path d="M23.2384 14H23.2513" stroke="#FEC93E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <button className='bg-gradient-to-t from-[#E84A4A] to-[#F7A738] px-6 py-2 rounded-full '>
                    <p className='text-white font-montserrat font-semibold text-base'>
                        Login
                    </p>
                </button>

                <img src={navTicket} className='object-contain w-[12%]' alt='ticket' />



            </div>
        </nav>
    )
}

export default NavBar