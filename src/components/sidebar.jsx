"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";
import { motion } from 'framer-motion'


function Sidebar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname()
    const isActive = (path) => {
        let active = pathname === path;
        return active ? 'text-secondary' : '';
    }

    useEffect(() => {

        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        }

        return () => {
            // Ensure scrolling is enabled when the component unmounts
            document.body.style.overflow = 'auto';

        };
    }, [sidebarOpen])
    return (
        <>
            <motion.div onMouseEnter={(e) => setSidebarOpen(true)} className={`${sidebarOpen ? '' : 'animate-pulse'} px-4 md:px-5 h-52 fixed top-[40%] left-0 text-white cursor-pointer bg-primary z-40`}>
            </motion.div>
            <div
                onClick={(e) => setSidebarOpen(false)}
                className={`${sidebarOpen ? '' : 'hidden'} absolute bg-[#353535] bg-opacity-75 min-w-full min-h-[1000vh] z-40`}>
                <div
                    className={`px-5 md:px-6 py-2 h-60 fixed top-[38%] left-[3%] text-white cursor-pointer bg-primary grid grid-cols-1 items-center justify-center`}>
                    <Link
                        className={`hover:text-secondary ${isActive('/')} text-center relative group`} href='/'
                    >
                        <i className=" fa-solid fa-house text-2xl"></i>
                        <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto z-40">
                            Home
                        </span>
                    </Link>
                    <Link
                        className={`hover:text-secondary ${isActive('/work')} text-center relative group`} href='/work'>
                        <i className="fa-solid fa-keyboard text-2xl"></i>
                        <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto z-40">
                            Work
                        </span>
                    </Link>
                    <Link
                        className={`hover:text-secondary ${isActive('/skilles')} text-center relative group`} href='/skilles'>
                        <i className=" fa-solid fa-laptop-code text-2xl"></i>
                        <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto z-40">
                            Skilles
                        </span>
                    </Link>
                    <Link
                        className={`hover:text-secondary ${isActive('/contact-me')} text-center relative group`} href='/contact-me'>
                        <i className=" fa-solid fa-phone-volume text-2xl"></i>
                        <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto z-40">
                            Contact
                        </span>
                    </Link>
                    <Link
                        className={`hover:text-secondary ${isActive('/about-me')} text-center relative group`} href='/about-me'>
                        <i className=" fa-solid fa-circle-info text-2xl"></i>
                        <span
                            className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                            -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto z-40">
                            About
                        </span>
                    </Link>
                </div>

            </div>
        </>
    )
}
export default Sidebar;