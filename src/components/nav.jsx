"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import './scss/linkSlide.scss';
import { useEffect, useState } from "react";
import { Drawer } from 'antd';


function Nav() {
    const pathname = usePathname()
    const isActive = (path) => {
        return pathname === path;
    }
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState('right');
    const showDrawer = () => {
        setOpen(true);
    }
    const onClose = () => {
        setOpen(false);
    }
    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <>
            <div
                className={`hidden md:block`}>
                <div
                    className={`flex gap-8`}>
                    <Link
                        className={`font-semibold ${isActive('/') === false ? 'hover_animation' : 'text-secondary'}`}
                        href='/'
                    >
                        Home
                    </Link>
                    <Link
                        className={`font-semibold ${isActive('/work') === false ? 'hover_animation' : 'text-secondary'}`}
                        href='/work'
                    >
                        Work
                    </Link>
                    <Link
                        className={`font-semibold ${isActive('/skilles') === false ? 'hover_animation' : 'text-secondary'}`}
                        href='/skilles'
                    >
                        Skilles
                    </Link>
                    {/* Until i finish the code */}
                    {/* <Link
                        className={`font-semibold ${isActive('/contact') === false ? 'hover_animation' : 'text-secondary'}`}
                        href='/contact'
                    >
                        Contact
                    </Link> */}
                    <Link
                        className={`font-semibold ${isActive('/about-me') === false ? 'hover_animation' : 'text-secondary'}`}
                        href='/about-me'
                    >
                        About
                    </Link>
                </div>

            </div>

            <div className="block md:hidden text-white">
                <span className="cursor-pointer px-2 py-1" onClick={showDrawer}>
                    <i className="fa-solid fa-bars-staggered text-2xl"></i>
                </span>
                <Drawer
                    className="!bg-background text-white"
                    title={<span className="text-secondary">TechStylitix | Navigation</span>}
                    placement={placement}
                    width={500}
                    onClose={onClose}
                    open={open}
                >
                    <div className="text-left min-w-full ">
                        <ul className="grid grid-cols-1 gap-7 py-12 justify-center items-center min-h-fit text-3xl">
                            <li>
                                <Link
                                    className={`font-semibold ${isActive('/') === false ? 'hover_animation' : 'text-secondary'}`}
                                    href='/'
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className={`font-semibold ${isActive('/work') === false ? 'hover_animation' : 'text-secondary'}`}
                                    href='/work'
                                >
                                    Work
                                </Link>
                            </li>
                            <li>

                                <Link
                                    className={`font-semibold ${isActive('/skilles') === false ? 'hover_animation' : 'text-secondary'}`}
                                    href='/skilles'
                                >
                                    Skilles
                                </Link>
                            </li>
                            {/* Until i finish the code */}
                            {/* <li>
                                <Link
                                    className={`font-semibold ${isActive('/contact') === false ? 'hover_animation' : 'text-secondary'}`}
                                    href='/contact'
                                >
                                    Contact
                                </Link>
                            </li> */}
                            <li>
                                <Link
                                    className={`font-semibold ${isActive('/about-me') === false ? 'hover_animation' : 'text-secondary'}`}
                                    href='/about-me'
                                >
                                    About
                                </Link>
                            </li>
                        </ul>

                    </div>
                </Drawer>


            </div>
        </>
    )
}
export default Nav;