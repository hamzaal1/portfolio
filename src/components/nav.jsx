"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import './scss/linkSlide.scss';
import { useEffect, useState } from "react";
import { Drawer } from 'antd';
import { motion } from "framer-motion";

const links = [
    {
        name: 'Home',
        path: '/'
    },
    { name: 'Work', path: '/work' },
    { name: 'Skilles', path: '/skilles' },
    { name: 'About', path: '/about-me' },
];

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
                    {
                        links.map(link => (
                            <Link
                                key={link.name}
                                className={`font-semibold ${isActive(link.path) === false ? 'hover_animation' : 'text-secondary'}`}
                                href={link.path}
                            >
                                {link.name}
                            </Link>
                        ))
                    }
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
                        <ul
                            className="grid grid-cols-1 gap-7 py-12 justify-center items-center min-h-fit text-3xl">
                            {
                                links.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20, backdropFilter: blur("30px") }}
                                        whileInView={{ opacity: 1, x: 0, backdropFilter: blur("0px") }}
                                        transition={{ duration: 0.5, delay: index * 0.3 }}>
                                        <Link
                                            className={`font-semibold ${isActive(link.path) === false ? 'hover_animation' : 'text-secondary'}`}
                                            href={link.path}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))
                            }
                        </ul>

                    </div>
                </Drawer>


            </div>
        </>
    )
}
export default Nav;