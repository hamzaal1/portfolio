"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useEffect, useState } from "react";

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
            <div onMouseEnter={(e) => setSidebarOpen(true)} className="animate-pulse px-4 md:px-5 h-52 fixed top-[40%] left-0 text-white cursor-pointer bg-primary">
            </div>
            <div
                onClick={(e) => setSidebarOpen(false)}
                className={`${sidebarOpen ? '' : 'hidden'} absolute bg-[#353535] bg-opacity-75 min-w-full min-h-[1000vh] z-40`}>
                <div
                    className="px-5 md:px-6 h-60 fixed top-[38%] left-[3%] text-white cursor-pointer bg-primary grid grid-cols-1 items-center justify-center">
                    <Link className={`hover:text-secondary ${isActive('/')} text-center`} href='/'>
                        <i className=" fa-solid fa-house text-2xl"></i>
                    </Link>
                    <Link className={`hover:text-secondary ${isActive('/skilles')} text-center`} href='/skilles'><i className=" fa-solid fa-laptop-code text-2xl"></i></Link>
                    <Link className={`hover:text-secondary ${isActive('/contact-me')} text-center`} href='/contact-me'><i className=" fa-solid fa-phone-volume text-2xl"></i></Link>
                    <Link className={`hover:text-secondary ${isActive('/about-me')} text-center`} href='/about-me'> <i className=" fa-solid fa-circle-info text-2xl"></i></Link>
                </div>

            </div>
        </>
    )
}
export default Sidebar;